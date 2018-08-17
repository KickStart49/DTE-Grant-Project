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

    VerifyEmail(email);

  }else{

    $(".loginmessage").html("Invalid Email Format");
	
  }

}

function VerifyEmail(email){

  $(".login").addClass("loading");
  $(".loadingline").removeClass("hidden");
  // if(email == "abc@gmail.com"){

  //   $(".login").addClass("hidden");
  //   $(".password").removeClass("hidden");

  // }else{

  //   $(".login").removeClass("loading");
  //   $(".loginmessage").html("Couldn't find your account");

  // }

}