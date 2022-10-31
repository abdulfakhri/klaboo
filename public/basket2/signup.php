<?php
include('model.php');

if(isset($_POST['signup'])) {


  $name = $_POST['name'];
	$email = $_POST['email'];
	$pass = $_POST['password'];

  $auth = new Auths();
  $checkUserExists = $auth->checkUser($email);
  if ($checkUserExists==true) {
    echo "User already exists";
  }else{
    $auth->signup($name, $email, $pass);
  }



}

?>
<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Login </title>
    <style>
    Body {
        font-family: Calibri, Helvetica, sans-serif;
        background-color: white;;
    }

    button {
        background-color: #4CAF50;
        width: 100%;
        color: orange;
        padding: 15px;
        margin: 10px 0px;
        border: none;
        cursor: pointer;
    }

    form {
        border: 0px solid #f1f1f1;
    }

    input[type=text],
    input[type=password] {
        width: 100%;
        margin: 8px 0;
        padding: 12px 20px;
        display: inline-block;
        border: 2px solid green;
        box-sizing: border-box;
    }

    button:hover {
        opacity: 0.7;
    }

    .cancelbtn {
        width: auto;
        padding: 10px 18px;
        margin: 10px 5px;
    }


    </style>
 <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}

</style>


</head>

<body>
    <div class="container "   style="margin-top:50px;margin-left:10%;">

    <form action=""   method="post" >
      <header><h3>Sign Up </h3></header>

     <label>Name</label>
      <input type="text" name="name" placeholder="Enter your name" required>

    <label>Email</label>
    <input type="text" name="email" placeholder="Enter your email" required>

      <label>Password</label>
      <input type="password" placeholder="Password" name="password" required>

    <button type="submit" name="signup">Signup </button>
   </form>

   </div>

  </body>
</html>
