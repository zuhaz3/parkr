var lat_lng;

$(document).ready(function()
{
	$("#submit").click(function()
	{
		$.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+$("#address").val()+'&sensor=true', function(data)
		{
			lat_lng = {"lat": data.results[0].geometry.location.lat, "lng": data.results[0].geometry.location.lng};
			loadFirebase();
		});
	});

});

function loadFirebase()
{
	writes = {"lat": lat_lng.lat, "lng":lat_lng.lng, "name":$("#name").val(), "phone":$("#phone").val(), "email": $("#email").val()};
	console.log(writes);
	var json_string = JSON.stringify(writes);
	console.log(json_string);
	var ref = new Firebase('https://michaelm.firebaseIO.com');
	ref.child('entry').set(json_string);
}