google.maps.visualRefresh = true;

var map;
var geocoder;
var bounds = new google.maps.LatLngBounds();
var markersArray = [];

var origin1 = new google.maps.LatLng(37.76904, -122.4835193);
var destinationA = new google.maps.LatLng(37.76904, -122.4835193);

var lat_lng = new google.maps.LatLng(55.931, -3.118);
var counterVal;
var notzone;
var selectedzone = 2;
var counterRef = new Firebase('http://parkr.firebaseio.com/counter');
counterRef.on('value', function(s) {
	counterVal = s.val();
});

$( document ).ready(function() {
  $('#paypalButton1').click(function() {
    zoneSelected(1);
  });
});

function zoneSelected(num) {
  selectedzone = num;
  var ref = new Firebase('http://parkr.firebaseio.com/');
  ref.on('child_added', function(s) {
    if (typeof s.val() == 'object') {
      var json_string = $.parseJSON(s.val().entry);
      console.log(json_string);
      if (json_string.zone == selectedzone) {
        getStatusVal(json_string);
      }
      else {
        notzone++;
      }
    }
  });
}
 
function getStatusVal(obj) {
  console.log(obj.status);
  if (obj.status == false) {
    $('#paypal-btn').attr('data-amount', '10.00');
    obj.status = true;
    var json = JSON.stringify(obj);
    var anotherRef = new Firebase('http://zm.firebaseio.com/'+obj.count);
    anotherRef.child('entry').set(json);
    console.log('Here\'s your address: ' + obj.address);
  }
}

// function initialize() {
//   var input = (document.getElementById('address'));
//   var autocomplete=new google.maps.places.Autocomplete(input);
//   var opts = {
//     center: new google.maps.LatLng(55.53, 9.4),
//     zoom: 10,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   map = new google.maps.Map(document.getElementById('map-canvas'), opts);
//   geocoder = new google.maps.Geocoder();
// }

// function calculateDistances() {
//   var service = new google.maps.DistanceMatrixService();
//   service.getDistanceMatrix ({
//       origins: [origin1],
//       destinations: [destinationA],
//       travelMode: google.maps.TravelMode.WALKING,
//       unitSystem: google.maps.UnitSystem.IMPERIAL,
//       avoidHighways: false,
//       avoidTolls: false
//     }, callback);
// }

// function callback(response, status) {
//   if (status != google.maps.DistanceMatrixStatus.OK) {
//     alert('Error was: ' + status);
//   } else {
//     var origins = response.originAddresses;
//     var destinations = response.destinationAddresses;
//     var outputDiv = document.getElementById('outputDiv');
//     outputDiv.innerHTML = '';
//     deleteOverlays();

//     for (var i = 0; i < origins.length; i++) {
//       var results = response.rows[i].elements;
//       addMarker(origins[i], false);
//       for (var j = 0; j < results.length; j++) {
//         addMarker(destinations[j], true);
//         outputDiv.innerHTML += origins[i] + ' to ' + destinations[j]
//             + ': ' + results[j].distance.text + ' in '
//             + results[j].duration.text + '<br>';
//       }
//     }
//   }
// }

// function addMarker(location, isDestination) {
//   geocoder.geocode({'address': location}, function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       bounds.extend(results[0].geometry.location);
//       map.fitBounds(bounds);
//       var marker = new google.maps.Marker({
//         map: map,
//         position: results[0].geometry.location
//       });
//       markersArray.push(marker);
//     } else {
//       alert('Geocode was not successful for the following reason: '
//         + status);
//     }
//   });
// }

// function deleteOverlays() {
//   for (var i = 0; i < markersArray.length; i++) {
//     markersArray[i].setMap(null);
//   }
//   markersArray = [];
// }

// google.maps.event.addDomListener(window, 'load', initialize);