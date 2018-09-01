$(window).scroll(function() {
  var value = $(window).scrollTop()
  if (value === 880){
    $("#navbar").addClass("navbar-static")
    $("#navbar").addClass("navbar-static")
  }
  $('#navbar').css({
    opacity: function() {
      console.log((value/1000))
      return (value)/1000
    }
  });
});
$(document).ready(function(){
    var width=$(window).width();
    if (width<=768){
      var autoHeight=$(".second").outerHeight();
      if (width<=320){
        var adjustedHeight = autoHeight+1100;
        $(".second").height(adjustedHeight);
      }else if (width>=330&&width<=400){
        var adjustedHeight = autoHeight+900;
        $(".second").height(adjustedHeight);
      }else if (width>=401){
        var adjustedHeight = autoHeight+500;
        $(".second").height(adjustedHeight);
      }
      $("li").removeClass("mt-0");
      $("li").addClass("mt-2");
    }
   
});
  $("#toggler").click(function(){
    $("#navbar").css("opacity","1.0");
    $("#navbar").css("z-index","10");
  });
  $(".landing-image").click(function(){
  document.querySelector('.second').scrollIntoView({
        behavior: 'smooth'
    });
  });
