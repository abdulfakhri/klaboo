<?php
session_start();
include 'management.php';

$mg=new Management();
$mg->getAuthCheck();
$incomeId=$_GET['ic'];

$result=$mg->viewIncome($incomeId);

  $income_title=$result['income_title'];
  $income_amount=$result['income_amount'];
  $income_source=$result['income_source'];
  $paying_company=$result['paying_company'];
  $type=$result['type'];
  $income_cycle=$result['income_cycle'];
  $currency=$result['currency'];
  $status=$result['status'];
  $payment_method=$result['payment_method'];
  $id=$result['id'];

if(!empty(isset($_POST["updateIncome"]))){ 

  $income_title=$_POST['income_title'];
  $income_amount=$_POST['income_amount'];
  $income_source=$_POST['income_source'];
  $paying_company=$_POST['paying_company'];
  $type=$_POST['type'];
  $income_cycle=$_POST['income_cycle'];
  $currency=$_POST['currency'];
  $status=$_POST['status'];
  $payment_method=$_POST['payment_method'];
  $id=$result['id'];

    $income=$mg->updateIncome($income_title,$income_amount,$income_source,$paying_company,$type,$income_cycle,$currency,$status,$payment_method,$id);
    if($income){
        header("Location: /fm.php");
    }
    else{
        echo "<script>alert('Income Not Updated');</script>";
    }

}



?>
<!DOCTYPE HTML>
<html lang= "en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Basket</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
    <div id="addexpanase">
    <form method="post" action="" id="myIncome" class="">
      <input type="hidden" name="id" value="<?php echo $id; ?>">
 
 <input type="text" class="form-control" id="income_title" name="income_title" value="<?php echo $income_title;?>"placeholder="Income Name">

 <input type="text" class="form-control" id="income_amount" name="income_amount" value="<?php echo $income_amount;?>" placeholder="Income Amount">

 <input type="text" class="form-control" id="income_source" name="income_source" value="<?php echo $income_source;?>" placeholder="Income Source">

 <input type="text" class="form-control" id="paying_company" name="paying_company" value="<?php echo $paying_company;?>" placeholder="Company">

 <select class="form-control" name="type" required>
    <option selected>Select Type</option>
    <option value="<?php echo $type;?>"><?php echo $type;?></option>
    <option value="Salary">Salary</option>
    <option value="SideHustle">Side Hustle</option>
    <option value="BusinessRevenue">Business Revenue</option>
    <option value="Stocks">Stocks</option>
    <option value="TaxCredit">Tax Credit</option>
    <option value="GovPayCheque">Gov Pay Cheque</option>
    <option value="Pension">Pension</option>
    <option value="Dividend">Dividend</option>
    <option value="Rental">Rental</option>
    <option value="Interest">Interest</option>
    <option value="Gift">Gift</option>

  </select>
  

 <select class="form-control" name="income_cycle" required>
   <option>Select</option>
   <option value="<?php echo $income_cycle;?>"><?php echo $income_cycle;?></option>
   <option value="OneTime">OneTime</option>
   <option value="Weekly">Weekly</option>
   <option value="Daily">Daily</option>
   <option value="Quarterly">Quarterly</option>
   <option value="Yearly">Yearly</option>
   <option value="BiWeekly">BiWeekly</option>
   <option value="Monthly" selected>Monthly</option>
   <option value="21DaysPeriod">21 Days Period</option>
 </select>
 <select class="form-control" name="currency" required>

   <option selected>CAD</option>
    <option value="<?php echo $currency;?>"><?php echo $currency;?></option>
   <option value="USD">USD</option>
   <option value="EURO">EURO</option>
   
 </select>
 <select class="form-control" name="status" required>
   <option selected>Status</option>
    <option value="<?php echo $status;?>"><?php echo $status;?></option>
   <option value="Paying">Paying</option>
   <option value="Closed">Closed</option>
   <option value="Pending">Pending</option>
   <option value="Paid">Paid</option>
   
 </select>

 <select class="form-control" name="payment_method" required>
   <option >Select</option>
    <option value="<?php echo $payment_method;?>"><?php echo $payment_method;?></option>
   <option value="WireTransfer" selected>Wire Transfer</option>
   <option value="Wallet">Wallet</option>
   <option value="Pending">Pending</option>
   <option value="Paypal">Paypal</option>
   <option value="Cash">Cash</option>
   
 </select>
 <button type="submit" class="btn btn-primary" class="addBtn" name="updateIncome">Update</button>
</form>

</div>
    </div>
</body>
</html>

