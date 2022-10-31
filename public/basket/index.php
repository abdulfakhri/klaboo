<?php
session_start();
include('model.php');

$md=new Model();

// On submit
if(isset($_POST['login'])){

    $uname =$_POST['email'];
    $password = $_POST['pwd'];
//    $remember = $_POST['remember'];
    $auth= new Auths();
    $auth->login($uname, $password);

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

            <h2>Login</h2>
            <?php //echo $md->url(); ?>

        <form action="" method="post" class="">
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" name="pwd" placeholder="Enter password">
            </div>
            <div class="form-group">
                <label for="rememberme">Remember me:</label>
                <input type="checkbox" id="rememberme" name="rememberme">
            </div>
            <button type="submit" class="btn btn-default" name="login">Submit</button>
        </form>

    </div>
</body>

</html>
