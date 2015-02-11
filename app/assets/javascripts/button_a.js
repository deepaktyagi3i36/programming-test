(function($){ 
  /* Button A */  
  var flag = true;
  
  effectState = function(){
    r = confirm('Are you sure you want to change the background effect in Box A?')
    if(r){
      $('div.box span.black').removeClass('black-box')  
      $('div.box span.black').addClass('white-box')  
    }else{
      $('div.box span.black').toggleClass('hide')
    }
    flag = false
  }

  originalState = function(){
    $('div.box span.black').removeClass('white-box')
    $('div.box span.black').removeClass('hide')
    $('div.box span.black').addClass('black-box')  
    flag = true
  }

  buttonAEventHandler = function(){
    if(flag){ 
      effectState()
     }else{
      originalState()  
     }
  }
}(jQuery));

$(document).ready(function(){
  $('.button_a').click(function(){
    buttonAEventHandler()
  });
})