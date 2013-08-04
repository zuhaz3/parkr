$( document ).ready(function() {
  $('.price').hide();
	$('.zone').hide();
	$('.renting').hide();
  $('.return').hide();
	$('.tagline').addClass('animated fadeInDown');
  $('#paypalButton').hide();
});

$( "#reserve" ).click(function() {
  $('.buttons').addClass('animated fadeOutUp');
  $('.buttons').hide();
  $('.zone').addClass('animated fadeInUp');
  $('.zone').show();
  $('#paypalButton').show();

});

$( "#rent" ).click(function() {
  $('.rent').hide();
  $('.tagline').hide();
  $('.renting').addClass('animated fadeInRight');
  $('.renting').toggle();
});

$( "#one" ).click(function() {
  $('#1').addClass('animated fadeInDown');
  $('#1').toggle();
});

$( "#two" ).click(function() {
  $('#2').addClass('animated fadeInDown');
  $('#2').toggle();
});

$( "#three" ).click(function() {
  $('#3').addClass('animated fadeInDown');
  $('#3').toggle();
});



$("#four").hover(
  function () {
    $('#4').show();
  },
  function () {
  	$('#4').hide();
  }
);

$("#five").hover(
  function () {
    $('#5').show();
  },
  function () {
  	$('#5').hide();
  }
);