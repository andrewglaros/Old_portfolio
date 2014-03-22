 //swap yelp link with anchor
$(document).ready(function(){
  $('.bxslider').bxSlider(),
  $('#taco').attr('href','#andrew') 
});

//smooth anchor scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-50
        }, 500);
        return false;
      }
    }
  });
});

//image swap when taqueria is clicked
$(function() {
 $('#taco').click(function(){
   $('#andrew').attr('src','images/andrew-taco.jpg');
   return false;
 });
});

//add the meta info into Hover's container frame
$(document).ready(function() {
  $("head").append('<meta name="viewport" content="width=device-width, initial-scale=1.0">')
});