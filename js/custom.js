$( document ).ready(function() {
  $('.price').hide();
	$('.zone').hide();
	$('.renting').hide();
  $('.return').hide();
	$('.tagline').addClass('animated fadeInDown');
});

$( "#reserve" ).click(function() {
  $('.buttons').addClass('animated fadeOutUp');
  $('.buttons').hide();
  $('.tagline').css("margin-top","-22px");  //If you get move/get rid of arrow, remove this line
  $('.zone').addClass('animated fadeInUp');
  $('.zone').show();
  $('.return').addClass('animated fadeInUp');
  $('.return').show();
});

$( "#rent" ).click(function() {
  $('.rent').hide();
  $('.tagline').hide();
  $('.renting').addClass('animated fadeInRight');
  $('.renting').toggle();
});

$('.return').click(function(){
  $('.buttons').show();
  $('.zone').hide();

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