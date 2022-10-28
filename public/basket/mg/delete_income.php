<?php
session_start();

include 'management.php';
$mg=new Management();
$mg->getAuthCheck();
$incomeId=$_GET['ic'];

if($_GET['ic']!==null){

    return $mg->deleteIncome($incomeId);

}

?>
