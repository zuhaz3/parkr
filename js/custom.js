$( document ).ready(function() {
    $('.price').hide();
	$('.zone').hide();
	$('.renting').hide();
});

$( "#reserve" ).click(function() {
  $('.buttons').hide();
  $('.zone').addClass('animated fadeInUp');
  $('.zone').show();
});

$( "#rent" ).click(function() {
  $('.rent').hide();
  $('.tagline').hide();
  $('.renting').addClass('animated fadeInRight');
  $('.renting').toggle();
});

$("#one").hover(
  function () {
    $('#1').show();
  },
  function () {
  	$('#1').hide();
  }
);

$("#two").hover(
  function () {
    $('#2').show();
  },
  function () {
  	$('#2').hide();
  }
);

$("#three").hover(
  function () {
    $('#3').show();
  },
  function () {
  	$('#3').hide();
  }
);

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