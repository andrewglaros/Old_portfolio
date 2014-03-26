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

//activate nav links based on scroll position
$(function() {
  $(window).scroll(function(){
    var projects = $('#projects').offset().top - $(window).scrollTop();
    var info = $('#info').offset().top - $(window).scrollTop();

    if(projects <= 50 && info > 50){
      $('#nav-projects').addClass('active');
    }
    else{
      $('#nav-projects').removeClass('active');
    };

    if(info <= 50){
      $('#nav-info').addClass('active');
    }
    else{
      $('#nav-info').removeClass('active');
    };
  });
});
