$(document).ready(function(){
  // WindowHeightNormalizerOnMobileScreens();
  $(".image").click(function(){
      document.querySelector('.second').scrollIntoView({
        behavior: 'smooth'
    });
  });
});
// $(window).scroll(function() {
//   var scrollTop = $(this).scrollTop();
//   console.log(scrollTop)
//   $('#navbar').css({
//     opacity: function() {
//       var elementHeight = $(this).height();
//       return 1 - (elementHeight - scrollTop) / elementHeight;
// console.log(opacity)
//
//     }
//   });
// });

$(window).scroll(function() {
  var value = $(window).scrollTop()
  if (value === 880){
    $("#navbar").addClass("navbar-static")
    $("#navbar").addClass("navbar-static")
    $('')
  }
  $('#navbar').css({
    opacity: function() {
      console.log((value/1000))
      return (value)/1000
    }
  });
    });
function WindowHeightNormalizerOnMobileScreens(){
  var height = $(".second").outerHeight();
  // alert(height);
  var normalHeight = height + 50;
  // alert(normalHeight)
  $(".second").css("height",String(normalHeight));
}
if (window.matchMedia("(max-width: 600px)").matches) {
  WindowHeightNormalizerOnMobileScreens();
  // alert("Mobile");
} else {
  // alert("Not a mobile");
}
//TO SEE THE FUNCTION IN ACTION, RELOAD THE PAGE BECAUSE IT IS CALLED IN DOCUMENT.READY()
//USER WILL NOT WANT RESIZE THE BROWSER WINDOW
