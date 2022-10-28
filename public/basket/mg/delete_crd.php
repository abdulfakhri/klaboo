<?php
session_start();


include 'management.php';
$mg=new Management();
$mg->getAuthCheck();
$tid=$_GET['crd'];

if($_GET['crd']!==null){

    return $mg->deleteCreditCard($tid);

}

?>
