<?php
session_start();
include 'management.php';

$mg=new Management();
$mg->getAuthCheck();
$expId=$_GET['exp'];

$result=$mg->viewExpanse($expId);

$expName=$result['title'];
$expAmount=$result['amount'];
$expDue=$result['due'];
$expCycle=$result['cycle'];
$expCurrency=$result['currency'];
$expStatus=$result['status'];
$expType=$result['type'];
$expOrg=$result['organization'];
$id=$result['id'];

if(!empty(isset($_POST["updateExp"]))){ 
    $exp_name=$_POST['expName'];
    $expAmount=$_POST['expAmount'];
    $expDue=$_POST['dueDate'];
    $expType=$_POST['expType'];
    $expOrg=$_POST['expOrg'];
    $expCycle=$_POST['expCycle'];
    $expCurrency=$_POST['expCurrency'];
    $expStatus=$_POST['expStatus'];
    $expId=$_POST['expId'];

    $exp=$mg->updateExpanse($expType,$exp_name,$expOrg,$expAmount,$expDue,$expCycle,$expCurrency,$expStatus,$expId);
    if($exp){
        header("Location: /fm.php");
    }
    else{
        echo "<script>alert('Expense Not Updated');</script>";
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
  <form method="post" action="" id="myDIV" class="">
  <select class="form-control" name="expType" required>
   >
    <option value="<?php echo $expType; ?>"><?php echo $expType; ?></option>
    <option value="Expense">Expense</option>
    <option value="Cost">Cost</option>
    <option value="Investment">Investment</option>
    <option value="Risk">Risk</option>
    <option value="Saving">Saving</option>
    <option value="Loan">Loan</option>
  </select>
    
  
 
  <input type="text" class="form-control" id="expName" name="expName" placeholder="Expanse Name" value="<?php echo $expName; ?>" autocomplete="off" required>

  <input type="text" class="form-control" id="expAmount" name="expAmount" placeholder="Expanse Amount" value="<?php echo $expAmount; ?>" autocomplete="off" required>

  <input type="text" class="form-control" id="dueDate" name="dueDate" placeholder="Due Date">

  <input type="hidden" class="form-control" id="expId" name="expId" placeholder="Due Date" value="<?php echo $id; ?>">

  <input type="text" class="form-control" id="expOrg" name="expOrg" placeholder="Expanse Insinuation" value="<?php echo $expOrg; ?>" autocomplete="off" required>

  <select class="form-control" name="expCycle" required>
    
    <option value="<?php echo $expCycle; ?>"><?php echo $expCycle; ?></option>
    <option value="OneTime">OneTime</option>
    <option value="Weekly">Weekly</option>
    <option value="Daily">Daily</option>
    <option value="BiWeekly">BiWeekly</option>
    <option value="Monthly">Monthly</option>
    <option value="21DaysPeriod">21 Days Period</option>
  </select>
  <select class="form-control" name="expCurrency" required>
    
    <option value="<?php echo $expCurrency; ?>"><?php echo $expCurrency; ?></option>
    <option selected>CAD</option>
    <option value="USD">USD</option>
    <option value="EURO">EURO</option>
    
  </select>
  <select class="form-control" name="expStatus" required>
  <option value="<?php echo $expStatus; ?>"><?php echo $expStatus; ?></option>
  <option selected>Status</option>
    <option value="Paying">Paying</option>
    <option value="Closed">Closed</option>
    <option value="Pending">Pending</option>
    <option value="Paid">Paid</option>
    
    
  </select>
  <button type="submit" class="btn btn-primary" class="addBtn" name="updateExp">Updated Expanse</button>
</form>
</div>
    </div>
</body>
</html>

