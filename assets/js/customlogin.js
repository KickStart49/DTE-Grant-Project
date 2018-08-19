$(document).ready(function () {
    $('#email').focusout(function(event) {
      $('.emaillabel').css({
          'top': '52%',
          'color': '#000000',
          'cursor': 'auto',
      });
    });
    $('#email').focus(function(event) {
      $('.emaillabel').css({
          'color': '#4285F4',
          'top': '42%',
          'cursor': 'default',
      });
    });
    $(".emaillabel").click(function(){
      $("#email").trigger("focus");
    });
    $("#email").trigger("focus");
});
function loginsubmit(){
  
  var email = $("#email").val();

  // Check Null

  if(!email){

    $(".loginmessage").html("Please provide email");

  }else{
   
    // Check Valid Syntax

    ValidateEmail(email);

  }

}

function ValidateEmail(email) 
{

	var mailFormat = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  	if(mailFormat.test(email))
  	{
    
    // Check Database

    $(".login").addClass("loading");
  	$(".loadingline").removeClass("hidden");
    setTimeout(VerifyEmail, 2000);

    function VerifyEmail(){

	  if(email == "abc@gmail.com"){

	    $(".login").addClass("hidden");
	    $(".password").removeClass("hidden");

	  }else{

	    $(".login").removeClass("loading");
	    $(".loadingline").addClass("hidden");
	    $(".loginmessage").html("Couldn't find your account");

	  }

	}

  }else{

    $(".loginmessage").html("Invalid Email Format");
	
  }

}

