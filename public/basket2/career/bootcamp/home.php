<?php 
session_start();
$path=$_SERVER['DOCUMENT_ROOT'];
//include("$path/nav.php");
include ("$path/career/cr_controller.php");
$model= new bootcamp();
$url=$model->geturl();
$model->getAuthCheck();

?>

<!DOCTYPE html>
<html>
<head>


<title>Education</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!--
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>-->

  <link rel="stylesheet" href="bootstrap.min.css">
  <script src="jquery.min.js"></script>
  <script src="bootstrap.min.js"></script>
 
  

<style>
.collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: #555;
}

.collapsible:after {
  content: '\002B';
  color: white;
  
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}

#drp{
    font-size: 20px;
    
    color: #fff;
    text-align: left;
    background-color: #000;
    width: 20%;

}


.container{
      overflow: hidden;
      background-color: #fff;
      
      border-radius: 5px;
      border: 1px solid #fff;
    
 
      overflow: auto;
      height: 100%;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .collapse{
   
      overflow-y: auto;
      overflow-x: hidden;
    }
    .vertical {
            border-left: 6px solid black;
        
            position:absolute;
            left: 20%;
        }
        #content{
          height:80%;
          
          
            overflow-y: auto;
            overflow-x: hidden;
        }
        #category{
          font-size: 30px;
          font-weight: bold;
          color: #000;
          text-align: left;
          padding: 10px;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }
        #chapter{
          font-size: 20px;
          font-weight: bold;
          weight: bold;
          color: #000;
          text-align: left;
          font-family: verdana, arial, sans-serif;
          
        
        }
#content{
   font-size: 20px;
  
   color: #000;
   text-align: left;
         
}
#accordion{
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fff0f0;
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 10px;
  width: 100%;
  
}

.card-body{
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #000f0f;
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 10px;
  width: 100%;
  height:700px;
  
}
</style>

</head>
<body>

<div class="container">


<?php  
  $sub=$_GET['sub'];
  echo "<h1>".$sub."</h1>";
  if($sub != null){
  $results=$model->viewTopic($sub);
  foreach ($results as $result) {

  $chapters=$result['chapter'];

 ?>
<button id="drp" class="collapsible"><?php echo $result['chapter'];?></button>
<div class="content">
<?php

//foreach ($chapters as $chapter) {

echo $model->listPostsEdit($result['chapter']);

//}                 
?>     
</div>
  <?php
                      
    }
  }else{
    header("Location: /career/education/old_tech/index.php");
  }                 
  ?>





<script>

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
</script>

</body>
</html>