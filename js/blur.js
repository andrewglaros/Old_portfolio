// blur the header img as you scroll down
$(function() {
  $(window).scroll(function(){
    var height = $(window).scrollTop();
    var point1 = '50';
    var point2 = '100';
    var point3 = '133';
    var point4 = '166';
    var point5 = '200';
    var point6 = '233';
    var point7 = '266';
    var point8 = '300';
    var point9 = '333';

    if(height >= 0 && height < point1){
      $("#banner-img").css({
         'filter'         : 'blur(0px)',
         '-webkit-filter' : 'blur(0px)',
         '-moz-filter'    : 'blur(0px)',
         '-o-filter'      : 'blur(0px)',
         '-ms-filter'     : 'blur(0px)'
      });
    };
    if(height >= point1 && height < point2){
      $("#banner-img").css({
         'filter'         : 'blur(1px)',
         '-webkit-filter' : 'blur(1px)',
         '-moz-filter'    : 'blur(1px)',
         '-o-filter'      : 'blur(1px)',
         '-ms-filter'     : 'blur(1px)'
      });
    };
    if(height >= point2 && height < point3){
      $("#banner-img").css({
         'filter'         : 'blur(2px)',
         '-webkit-filter' : 'blur(2px)',
         '-moz-filter'    : 'blur(2px)',
         '-o-filter'      : 'blur(2px)',
         '-ms-filter'     : 'blur(2px)'
      });
    };
    if(height >= point3 && height < point4){
      $("#banner-img").css({
         'filter'         : 'blur(3px)',
         '-webkit-filter' : 'blur(3px)',
         '-moz-filter'    : 'blur(3px)',
         '-o-filter'      : 'blur(3px)',
         '-ms-filter'     : 'blur(3px)'
      });
    };
    if(height >= point4 && height < point5){
      $("#banner-img").css({
         'filter'         : 'blur(5px)',
         '-webkit-filter' : 'blur(5px)',
         '-moz-filter'    : 'blur(5px)',
         '-o-filter'      : 'blur(5px)',
         '-ms-filter'     : 'blur(5px)'
      });
    };
    if(height >= point5 && height < point6){
      $("#banner-img").css({
         'filter'         : 'blur(7px)',
         '-webkit-filter' : 'blur(7px)',
         '-moz-filter'    : 'blur(7px)',
         '-o-filter'      : 'blur(7px)',
         '-ms-filter'     : 'blur(7px)'
      });
    };
    if(height >= point6 && height < point7){
      $("#banner-img").css({
         'filter'         : 'blur(9px)',
         '-webkit-filter' : 'blur(9px)',
         '-moz-filter'    : 'blur(9px)',
         '-o-filter'      : 'blur(9px)',
         '-ms-filter'     : 'blur(9px)'
      });
    };
    if(height >= point7 && height < point8){
      $("#banner-img").css({
         'filter'         : 'blur(11px)',
         '-webkit-filter' : 'blur(11px)',
         '-moz-filter'    : 'blur(11px)',
         '-o-filter'      : 'blur(11px)',
         '-ms-filter'     : 'blur(11px)'
      });
    };
    if(height >= point8 && height < point9){
      $("#banner-img").css({
         'filter'         : 'blur(13px)',
         '-webkit-filter' : 'blur(13px)',
         '-moz-filter'    : 'blur(13px)',
         '-o-filter'      : 'blur(13px)',
         '-ms-filter'     : 'blur(13px)'
      });
    };
    if(height >= point9){
      $("#banner-img").css({
         'filter'         : 'blur(15px)',
         '-webkit-filter' : 'blur(15px)',
         '-moz-filter'    : 'blur(15px)',
         '-o-filter'      : 'blur(15px)',
         '-ms-filter'     : 'blur(15px)'
      });
    };
  });
});