<?php
session_start();


include 'mg_controller.php';
$mg=new Management();
$mg->getAuthCheck();
$tid=$_GET['t'];

if($_GET['t']!==null){

    return $mg->deleteTask($tid);

}

?>
