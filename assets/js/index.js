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

  $('#main-content').fadeIn(1500);
  $('#my-info').delay(500).fadeIn(1500);
  var options = [
    { selector: '#my-projects', offset: 0, callback: 'displayProjectTitle()' },
    { selector: '#project-1', offset: 0, callback: 'displayProject1()' },
    { selector: '#project-2', offset: 0, callback: 'displayProject2()' },
    { selector: '#project-3', offset: 0, callback: 'displayProject3()' },
    { selector: '#project-4', offset: 0, callback: 'displayProject4()' },
    { selector: '#project-5', offset: 0, callback: 'displayProject5()' }
  ];
  Materialize.scrollFire(options);
});

function displayProjectTitle() {
  $('#my-projects').animate({
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
