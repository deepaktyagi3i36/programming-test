(function($){ 
  /* Button C */  

  validateForm = function(){
    valid = true
    
    $('#userForm input').each(function(){
      if($(this).data('type') == 'required' && $(this).val() == ''){
        $(this).addClass('error')
        $('<span class="error_text">'+$(this).data('message')+'</span>').insertAfter(this)
        valid = false        
      }
    })

    return valid
  }

  resetForm = function(){
    $('span.error_text').remove()
    $('#userForm input').removeClass('error')
  }

  postData = function(){
    $.ajax({
      url: '/user/create',
      type: 'POST',
      data: $('#userForm').serialize(),
      dataType: 'JSON',
      success: function(data){
        alert(data['return_text'])
      }
    })
  }

  buttonCEventHandler = function(){
    resetForm()
    valid = validateForm()
    if(valid)
      postData()
  }

}(jQuery));

$(document).ready(function(){
  $('.button_c').click(function(e){
    buttonCEventHandler()
    e.preventDefault()
  });
})