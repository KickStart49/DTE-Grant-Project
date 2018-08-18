function myFunction() {

  var email = $("#email").val();
	if(!email)
	{
		$(".loginmessage").html("Please provide email");
	}
	else
	{
   	 ValidateEmail(email);
	}
}
function ValidateEmail(email) 
{

	var mailFormat = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(mailFormat.test(email))
  	{

    VerifyEmail(email);
	}
	else
	{

    $(".loginmessage").html("Invalid Email Format");
	}

}

function VerifyEmail(email){
	
  if(email=="abc@gmail.com")
  { 
  		alert("ok");
  		$("#login").addClass("back");
        /*$("#login").addClass("hidden");
  		$("#password").removeClass("hidden");*/
  		
  }
 	/*else
  {
  		$(".loginmessage").html("Couldn't find your email address");
  }*/
