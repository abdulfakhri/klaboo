<?php

include 'controller.php';

$nid=$_GET['id'];

if (deleteNotation($nid)) {
    
    echo "Notation deleted successfully";
    
   
}
?>



