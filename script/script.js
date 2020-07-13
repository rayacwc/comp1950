
$(document).ready(function(){
    $(".dayInfo").hide();
    $("h4").click(function(){
        $(this).next().toggle();
    });
    $("header nav div div a:not(:first-child)").click(function(){
      console.log("asdf");
      $(".navlinks").css("display","block");
    });
    var errorMessage;
        $("#contactForm").validate({
            rules: {
              firstname: "required",
              lastname: "required",
              email: {
                required: true,
                email: true
              },
              studentNumber: {
                required: true,
                minlength: 9
              }
            },
            messages: {
              firstname: "Please enter your firstname",
              lastname: "Please enter your lastname",
              studentNumber: "Student number must start with A followed by 8 digits",
              email: "Please enter a valid email address"
            },
            errorPlacement: function (error, element) {
                element.after(error).after('<br/>');
            },
            submitHandler: function(form) {
        
                return false; 
               
            }
          });
    resizer();
});
function resizer(){
  var win = $(this); 
  if (win.width() <=735)
  {
    $("header nav div:not(:first-child) a").css("display","none");
  }
  else
  {
    $("header nav div:not(:first-child) a").css("display","block");
  }
}

