$(window).scroll(function() {
  var value = $(window).scrollTop()
  if (value === 880){
    $("#navbar").addClass("navbar-static")
    $("#navbar").addClass("navbar-static")
    $('')
  }
  $('#navbar').css({
    opacity: function() {
      console.log((value*10/1000))
      return (value*10)/1000
    }
  });
    });
