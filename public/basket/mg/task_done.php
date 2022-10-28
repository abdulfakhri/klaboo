<?php
session_start();

include 'management.php';
$mg=new Management();
$mg->getAuthCheck();
$tid=$_GET['t'];

if($_GET['t']!==null){

    return $mg->taskDone($tid);

}

?>
