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

  $('.return').addClass('animated fadeOutUp');
  // $('.return').toggle();
  $('.zones').addClass('animated fadeOutUp'); /*NEED TO GET ORIGNAL 2 BUTTONS TO SHOW UP AGAIN AND ALSO IF YOU WANT TO PUT THE ARROW SOMEWHERE ELSE, TAKE OUT THE MARKED LINE ABOVE AND ALSO THE TAGLINE CLASS IN THE CSS*/
  // $('.zones').toggle();
  // $('.go').show();    
  // $('.go').removeClass('animated fadeOutUp');
  // $('.go').addClass('animated fadeInUp');

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