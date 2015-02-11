(function($){ 
  /* Button D */  
  flag = true

  activeState = function(){
    $('.button_d').addClass('active-btn')
  }

  resetButton = function(){
    $('.button_d').removeClass('active-btn')
    $('.box-d').text('Box D')
  }

  postDataDButton = function(){
    $.ajax({
      url: '/user/create',
      type: 'POST',
      data: $('#userForm').serialize(),
      dataType: 'JSON',
      success: function(data){
        $('.box-d').text(data['return_text'])
      }
    })
  }

  buttonDEventHandler = function(){
    if(flag){
      resetForm()
      valid = validateForm()
      if(valid){
        postDataDButton()
        activeState()
        flag = false
      }
      
    }else{
      resetButton()
      flag = true
    }    
  }

  keyEventHandler = function(){
    if(flag === false){
      resetForm()
      valid = validateForm()
      if(valid){
        postDataDButton()
      }
    }
  }

}(jQuery));

$(document).ready(function(){
  $('.button_d').click(function(e){
    buttonDEventHandler()
    e.preventDefault()
  });

  $('#userForm input').keyup(function(e){
    keyEventHandler()
    e.preventDefault()
  });

})