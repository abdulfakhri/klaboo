<?php 
session_start(); 
if(!isset($_SESSION['valid'])) {
	header('Location: /login.php');
}
include('nav.php');
include('Auths.php');
$auth= new Auths();
$profile=$auth->viewProfile($_SESSION['id']);
$name=$profile['name'];
$email=$profile['email'];
$password=$profile['password'];
$id=$profile['id'];

if(isset($_POST['update'])){

  $name=$_POST['name'];
  $email=$_POST['email'];
  $password=$_POST['pwd'];
  $id=$_SESSION['id'];
  $auth->editProfile($name,$email,$password,$id);

}
?>



     
       
    
<body>
    
    
     

	
	
	<!-- Main Content -->
  
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">
            <?php echo $name; ?>
          </h1>
          <form class="form-control" method="post" action="">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" name="name" value="<?php echo $name; ?>">
              <input type="hidden" class="form-control" id="uid" name="uid" value="<?php echo $id; ?>">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" name="email" value="<?php echo $email; ?>">
            </div>
            <div class="form-group">
              <label for="pwd">Password</label>
              <input type="password" class="form-control" id="pwd" name="pwd" value="<?php echo $password; ?>">
            </div>
            <button type="submit" class="btn btn-default" name="update">Update</button>

          </form>
        </div>
      </div>
    
     </div>
    
     
        
<?php
include('footer.php');
?>