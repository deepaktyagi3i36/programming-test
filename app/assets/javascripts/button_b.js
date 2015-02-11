(function($){ 
  /* Button B */  
  buttonBEventHandler = function(){
    $('div.box-b div.box').toggleClass('small')
  }

}(jQuery));

$(document).ready(function(){
  $('.button_b').click(function(){
    buttonBEventHandler()
  });
})