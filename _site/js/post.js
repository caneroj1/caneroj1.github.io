var headerString = $('#banner').data('title');
geoPattern = GeoPattern.generate(headerString);
$('#banner').css('background-image', geoPattern.toDataUrl());

$(document).ready(function(){
   $(".dropdown-button").dropdown();
});
