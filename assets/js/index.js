$(function() {
  var mq = window.matchMedia( "(max-width: 600px)" );
  // rearrange some of the elements so they look better on mobile
  if(mq.matches) {
    $('#project-2 > div').each(function() {
      $(this).prependTo(this.parentNode);
    });

    $('#project-3 > div').each(function() {
      $(this).prependTo(this.parentNode);
    });
  }

  var card1Left = $('#card-1').position().left;
  var card2Left = $('#card-2').position().left;
  $('#card-1').offset({ left: card1Left - 100});
  $('#card-2').offset({ left: card2Left + 100});

  $('#main-content').fadeIn(1500);
  $('#my-info').delay(500).fadeIn(1500);
  var options = [
    { selector: '#my-projects', offset: 0, callback: 'displayProjectTitle()' },
    { selector: '#project-1', offset: 0, callback: 'displayProject1()' },
    { selector: '#project-2', offset: 0, callback: 'displayProject2()' },
    { selector: '#project-3', offset: 0, callback: 'displayProject3()' },
    { selector: '#project-4', offset: 0, callback: 'displayProject4()' },
    { selector: '#project-5', offset: 0, callback: 'displayProject5()' },
    { selector: '#about-me', offset: 0, callback: 'displayAboutMe()' },
    { selector: '.work-cards', offset: 0, callback: 'displayPreviousWorks()'},
    { selector: '#previous-work', offset: 0, callback: 'displayWork()' },
  ];
  Materialize.scrollFire(options);
});

function displayProjectTitle() {
  $('#my-projects').animate({
    opacity: 1
  }, 2300);
}

function displayAboutMe() {
  $('#about-me').animate({
    opacity: 1
  }, 2300);
}

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

function displayWork() {
  $('#previous-work').animate({
    opacity: 1
  }, 2300);
}
