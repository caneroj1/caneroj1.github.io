$(function() {
  makeBlogBackgrounds();
});

function makeBlogBackgrounds() {
  var geoPattern;
  $('.blog-title').each(function(index) {
    var headerString = $(this).data('title');
    geoPattern = GeoPattern.generate(headerString);
    $(this).parent().css('background-image', geoPattern.toDataUrl());
  });
}

$(document).ready(function(){
   $(".dropdown-button").dropdown();
});
