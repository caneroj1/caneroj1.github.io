$(function() {
  $('#main-content').fadeIn(1500);
  $('#my-info').delay(500).fadeIn(1500);
  var options = [
    { selector: '#my-projects', offset: 0, callback: 'displayProjectTitle()' },
    { selector: '#project-1', offset: 0, callback: 'displayProject1()' },
    { selector: '#project-2', offset: 0, callback: 'displayProject2()' },
    { selector: '#project-3', offset: 0, callback: 'displayProject3()' }
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
