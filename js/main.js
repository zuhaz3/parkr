google.maps.visualRefresh = true;

var map;
var geocoder;
var bounds = new google.maps.LatLngBounds();
var markersArray = [];

var origin1 = new google.maps.LatLng(37.76904, -122.4835193);
var destinationA = new google.maps.LatLng(37.76904, -122.4835193);

var lat_lng = new google.maps.LatLng(37.76904, -122.4835193);
var zone;
var counterVal;
var counterRef = new Firebase('http://parkr.firebaseio.com/counter');
counterRef.on('value', function(s) {
	counterVal = s.val();
});

function sendDataController() {
  if ($("#address").val())
    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+$("#address").val()+'&sensor=true', function(data) {
      lat_lng = {"lat": data.results[0].geometry.location.lat, "lng": data.results[0].geometry.location.lng};
      loadFirebase();
    });
}

function loadFirebase() {
  origin1 = new google.maps.LatLng(lat_lng.lat, lat_lng.lng);
  calculateDistances();
	console.log(counterVal);
  if (zone != 0) {
  	var write_to_firebase_json = JSON.stringify({zone:zone, name:$("#name").val(), phone:$("#phone").val(), email: $("#email").val(), address: $('#address').val(), count: counterVal, status: false});
  	var ref = new Firebase('https://parkr.firebaseio.com/'+counterVal);
  	ref.child('entry').set(write_to_firebase_json);
  	var temp = counterVal + 1;
  	counterRef.set(temp);
  }
  // REDIRECT USER TO CONFIRMATION PAGE WITH INFO
}

function initialize() {
  var input = (document.getElementById('address'));
  var autocomplete=new google.maps.places.Autocomplete(input);
  var opts = {
    center: new google.maps.LatLng(37.76904, -122.4835193),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), opts);
  geocoder = new google.maps.Geocoder();
  google.maps.event.trigger(map, 'resize');
}

function calculateDistances() {
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix ({
      origins: [origin1],
      destinations: [destinationA],
      travelMode: google.maps.TravelMode.WALKING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    }, callback);
}

function callback(response, status) {
  if (status != google.maps.DistanceMatrixStatus.OK) {
    alert('Error was: ' + status);
  } else {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;
    var outputDiv = document.getElementById('outputDiv');
    outputDiv.innerHTML = '';
    deleteOverlays();

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      addMarker(origins[i], false);
      for (var j = 0; j < results.length; j++) {
        addMarker(destinations[j], true);
        if (results[j].distance == undefined) {
          outputDiv.innerHTML = "Sorry, you are not eligible for this!";
          zone = 0;
        }
        else {
          if (parseInt(results[j].distance.text) > 1) {
            console.log('Too far');
            zone = 0;
          }
          else {
            outputDiv.innerHTML += results[j].distance.text + ' '
                + results[j].duration.text;
            zone = 1;
          }
        }
      }
    }
  }
}

function addMarker(location, isDestination) {
  geocoder.geocode({'address': location}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      bounds.extend(results[0].geometry.location);
      map.fitBounds(bounds);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
      markersArray.push(marker);
    } else {
      alert('Geocode was not successful for the following reason: '
        + status);
    }
  });
}

function deleteOverlays() {
  for (var i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(null);
  }
  markersArray = [];
}

google.maps.event.addDomListener(window, 'load', initialize);