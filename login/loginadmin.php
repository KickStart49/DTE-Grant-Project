<?php 
	include("../include/db.php");
	$email = $_POST["email"];

	$query = "SELECT email From temp where email='$email'";
	$execute = mysqli_query($connect,$query);
	$num = mysqli_num_rows($execute);
	if($num > 0){
		echo "true";
	}else{
		echo "false";
	}
?>