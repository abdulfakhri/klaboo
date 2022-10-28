<?php
session_start();

include 'management.php';
$mg=new Management();
$mg->getAuthCheck();
$expId=$_GET['exp'];

if($_GET['exp']!==null){

    return $mg->deleteExp($expId);

}

?>
