

$(document).ready(function() {



  // navbar scroll
  $(window).scroll(function(){

    if($(this).scrollTop() >=90)
    {
    $(".bg-color").css({
      
    "background-color":"white" ,
      
    });
  
    $(".navbar-nav,.nav-link").css("color","black");
  
    }
    
  
    else {
    $(".bg-color").css("background-color","transparent");
    $(".navbar-nav,.nav-link").css("color","white");
  
    }
  
  });




    // arrows 


    var sec2 = $(".sec2").position();
 
    $('.arrows').click(function() {
      $('html, body').animate({
        scrollTop: sec2.top
      }, 2000);
      return false;
  
    });


    // $('.parallax-window').parallax({imageSrc: '..img/coffee.jpg'});



    $('.parallax-window').parallax({
      naturalWidth: 400,
      naturalHeight: 600
  }); 


  // if( !jQuery('html').hasClass('ie8') ) {
  //   jQuery('.statistics .number-561b1dd77d2e1').counterUp({
  //   delay: 20,
  //   time: 1000
  //   });
  //   }


// count to plugin
// $(".count").countTo();




});

