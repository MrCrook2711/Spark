$(document).ready(function(){
  $(".knowz").click(function(){
      document.querySelector('#navbar').scrollIntoView({ 
        behavior: 'smooth' 
    });
  });
}); 
var offsetHeight = document.getElementById('first').offsetHeight;
window.onscroll = genericFunction();
var scroll = window.scrollTop();
function genericFunction(){
  if (scroll>offsetHeight){
    $("#navbar").css("background","black");
  }else{
    $("#navbar").css("background","#2e3842");
  } 
}