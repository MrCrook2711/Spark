$(document).ready(function(){
  $(".image").click(function(){
      document.querySelector('.second').scrollIntoView({ 
        behavior: 'smooth' 
    });
  });
}); 
