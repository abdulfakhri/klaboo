<?php
session_start();

include 'controller.php';
$model= new Controller();

$model->getAuthCheck();

$nid=$_GET['id'];

if (deleteNotation($nid)) {
    
    echo "Notation deleted successfully";
    
   
}
?>



