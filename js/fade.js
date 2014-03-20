// fade out the header img as you scroll down
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
         'opacity' : '1'
      });
    };
    if(height >= point1 && height < point2){
      $("#banner-img").css({
         'opacity' : '0.9'
      });
    };
    if(height >= point2 && height < point3){
      $("#banner-img").css({
         'opacity' : '0.8'
      });
    };
    if(height >= point3 && height < point4){
      $("#banner-img").css({
         'opacity' : '0.7'
      });
    };
    if(height >= point4 && height < point5){
      $("#banner-img").css({
         'opacity' : '0.6'
      });
    };
    if(height >= point5 && height < point6){
      $("#banner-img").css({
         'opacity' : '0.5'
      });
    };
    if(height >= point6 && height < point7){
      $("#banner-img").css({
         'opacity' : '0.4'
      });
    };
    if(height >= point7 && height < point8){
      $("#banner-img").css({
         'opacity' : '0.3'
      });
    };
    if(height >= point8 && height < point9){
      $("#banner-img").css({
         'opacity' : '0.2'
      });
    };
    if(height >= point9){
      $("#banner-img").css({
         'opacity' : '0.1'
      });
    };
  });
});