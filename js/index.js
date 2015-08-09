$(function() {
  var card1Left = $('#card-1').position().left;
  var card2Left = $('#card-2').position().left;
  $('#card-1').offset({ left: card1Left - 100});
  $('#card-2').offset({ left: card2Left + 100});
  
  var options = [
    { selector: '#project-1', offset: 0, callback: 'displayProject1()' },
    { selector: '#project-2', offset: 0, callback: 'displayProject2()' },
    { selector: '#project-3', offset: 0, callback: 'displayProject3()' },
    { selector: '#project-4', offset: 0, callback: 'displayProject4()' },
    { selector: '#project-5', offset: 0, callback: 'displayProject5()' },
    { selector: '.work-cards', offset: 0, callback: 'displayPreviousWorks()'},
  ];
  Materialize.scrollFire(options);
});

var num = $('#parallax-container').height();
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#navfix').addClass('navbar-fixed-top');
    } else {
        $('#navfix').removeClass('navbar-fixed-top').css('top', 0);
    }
});

$(document).ready(function(){
   $('.parallax').parallax();
});

function displayProject1() {
  $('#project-1').animate({
    opacity: 1
  }, 2300);
}

function displayProject2() {
  $('#project-2').animate({
    opacity: 1
  }, 2300);
}

function displayProject3() {
  $('#project-3').animate({
    opacity: 1
  }, 2300);
}

function displayProject4() {
  $('#project-4').animate({
    opacity: 1
  }, 2300);
}

function displayProject5() {
  $('#project-5').animate({
    opacity: 1
  }, 2300);
}

function displayPreviousWorks() {
  $('#card-1').animate({
    left: 0,
    opacity: 1
  }, 2300);

  $('#card-2').animate({
    left: 0,
    opacity: 1
  }, 2300);
}
