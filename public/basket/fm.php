<?php 
session_start();
include 'management.php';
$mg=new Management();
$mg->getAuthCheck();

if(!empty(isset($_POST["addExp"]))){ 
    $exp_name=$_POST['expName'];
    $expAmount=$_POST['expAmount'];
    $expDue=$_POST['dueDate'];
    $expType=$_POST['expType'];
    $expOrg=$_POST['expOrg'];
    $expCycle=$_POST['expCycle'];
    $expCurrency=$_POST['expCurrency'];
    $expStatus=$_POST['expStatus'];

    $exp=$mg->addExpanse($expType,$exp_name,$expOrg,$expAmount,$expDue,$expCycle,$expCurrency,$expStatus);
    if($exp){
        echo "<script>alert('Expense Added Successfully');</script>";
        
    }
    else{
        echo "<script>alert('Expense Not Added');</script>";
    }

}

if(!empty(isset($_POST["addIncome"]))){ 

  /*
income_title
income_amount
income_source
paying_company
type
income_cycle
currency
status
payment_method
  */

  $income_title=$_POST['income_title'];
  $income_amount=$_POST['income_amount'];
  $income_source=$_POST['income_source'];
  $paying_company=$_POST['paying_company'];
  $type=$_POST['type'];
  $income_cycle=$_POST['income_cycle'];
  $currency=$_POST['currency'];
  $status=$_POST['status'];
  $payment_method=$_POST['payment_method'];

  $exp=$mg->addIncome($income_title,$income_amount,$income_source,$paying_company,$type,$income_cycle,$currency,$status,$payment_method);
  if($exp){
      echo "<script>alert('Income Added Successfully');</script>";
      
  }
  else{
      echo "<script>alert('Income Not Added');</script>";
  }


}






  

include("nav.php");


?>
<body onload="hideExpenseForm()">
<br>
<div class="container">

<div class="row">
  <div class="col-lg-9">
     
  <div class="row">
    <div class="col-sm-6">
      <button type="button" onClick="showExpenseForm()" class="btn btn-primary">Show</button> | <button type="button" onClick="hideExpenseForm()" class="btn btn-primary">Hide</button>
 
    <h3>  Add Costs </h3>
      <div id="addexpanase">
  <form method="post" action="" id="myDIV" class="">
 
  <input type="text" class="form-control" id="expName" name="expName" placeholder="Expanse Name">

  <input type="text" class="form-control" id="expAmount" name="expAmount" placeholder="Expanse Amount">

  <input type="text" class="form-control" id="dueDate" name="dueDate" placeholder="Due Date">

  <select class="form-control" name="expType" required>
    <option selected>Select Type</option>
    <option value="Expense">Expense</option>
    <option value="Cost">Cost</option>
    <option value="Investment">Investment</option>
    <option value="Risk">Risk</option>
    <option value="Saving">Saving</option>
    <option value="Loan">Loan</option>
  </select>
  
  <input type="text" class="form-control" id="expOrg" name="expOrg" placeholder="Expanse Insinuation">

  <select class="form-control" name="expCycle" required>
    <option selected>Payment Cycle</option>
    <option value="OneTime">OneTime</option>
    <option value="Weekly">Weekly</option>
    <option value="Daily">Daily</option>
    <option value="BiWeekly">BiWeekly</option>
    <option value="Monthly">Monthly</option>
    <option value="21DaysPeriod">21 Days Period</option>
  </select>
  <select class="form-control" name="expCurrency" required>

    <option selected>CAD</option>
    <option value="USD">USD</option>
    <option value="EURO">EURO</option>
    
  </select>
  <select class="form-control" name="expStatus" required>
    <option selected>Status</option>
    <option value="Paying">Paying</option>
    <option value="Closed">Closed</option>
    <option value="Pending">Pending</option>
    <option value="Paid">Paid</option>
    
  </select>
  <select class="form-control" name="payment_method" required>
   <option >Select</option>
   <option value="WireTransfer" selected>Wire Transfer</option>
   <option value="Wallet">Wallet</option>
   <option value="Pending">Pending</option>
   <option value="Paypal">Paypal</option>
   <option value="Cash">Cash</option>
   <option value="Bitcoin">Bitcoin</option>
   <option value="CreditCards">Credit Cards</option>
   
 </select>
  <button type="submit" class="btn btn-primary" class="addBtn" name="addExp">Add Cost</button>
</form>
<hr>
<h3>  Add Income </h3>

<form method="post" action="" id="myIncome" class="">
 
 <input type="text" class="form-control" id="income_title" name="income_title" placeholder="Income Name">

 <input type="text" class="form-control" id="income_amount" name="income_amount" placeholder="Income Amount">

 <input type="text" class="form-control" id="income_source" name="income_source" placeholder="Income Source">

 <input type="text" class="form-control" id="paying_company" name="paying_company" placeholder="Company">

 <select class="form-control" name="type" required>
    <option selected>Select Type</option>
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
   <option>Income Source</option>
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
   <option value="USD">USD</option>
   <option value="EURO">EURO</option>
   
 </select>
 <select class="form-control" name="status" required>
   <option selected>Status</option>
   <option value="Paying">Paying</option>
   <option value="Closed">Closed</option>
   <option value="Pending">Pending</option>
   <option value="Paid">Paid</option>
   
 </select>

 <select class="form-control" name="payment_method" required>
   <option >Select</option>
   <option value="WireTransfer" selected>Wire Transfer</option>
   <option value="Wallet">Wallet</option>
   <option value="Pending">Pending</option>
   <option value="Paypal">Paypal</option>
   <option value="Cash">Cash</option>
   
 </select>
 <button type="submit" class="btn btn-primary" class="addBtn" name="addIncome">Add Income</button>
</form>
</div>
</div>
  </div>
 <hr>
 <h3>Income</h3>
 <div id="coststable">
 <div class="table-responsive">
	<table class="table table-bordered table-striped">
   
		<tr>
			<th>#</th>
			<th>Income Title</th>
			<th>Amount</th>
			<th>Source</th>
			<th>Company</th>
      <th>Type</th>
      <th>Cycle</th>
      <th>Currency</th>
      <th>Status</th>
      <th>Payment Method</th>
			<th>Edit</th>
      <th>Delete</th>
    
		</tr>

    
  <?php 
   $mg->incomes();
  ?>
   <tr>
      <th><h5>Total:</h5></th><th><h5><?php echo $mg->totalIncome();?> $</h5></th>
     

</tr>
</table>
  
  </div>
</div>
<hr>
 <h3>Costs</h3>
 <div id="coststable">
 <div class="table-responsive">
	<table class="table table-bordered table-striped">
   
		<tr>
			<th>#</th>
			<th>Type</th>
			<th>Title</th>
			<th>Organization</th>
			<th>Amount</th>
      <th>Due Cycle</th>
      <th>Due Date</th>
      <th>Cycle</th>
      <th>Currency</th>
      <th>Status</th>
			<th>Edit</th>
      <th>Delete</th>
    
		</tr>

    
  <?php 
   $mg->expanses('Cost');
  ?>
   <tr>
      <th><h5>Total:</h5></th><th><h5><?php echo $mg->total('Cost');?> $</h5></th>
     

</tr>
</table>
  
  </div>
</div>
<hr>
<hr>
 <h3>Expenses</h3>
 <div id="coststable">
 <div class="table-responsive">
	<table class="table table-bordered table-striped">
   
		<tr>
			<th>#</th>
			<th>Type</th>
			<th>Title</th>
			<th>Organization</th>
			<th>Amount</th>
      <th>Due Cycle</th>
      <th>Due Date</th>
      <th>Cycle</th>
      <th>Currency</th>
      <th>Status</th>
			<th>Edit</th>
      <th>Delete</th>
    
		</tr>

    
  <?php 
   $mg->expanses('Expense');
  ?>
   <tr>
      <th><h5>Total:</h5></th><th><h5><?php echo $mg->total('Expense');?> $</h5></th>
     

</tr>
</table>
  
  </div>
</div>
<hr>
<h3>Investments</h3>
<div id="coststable">
 <div class="table-responsive">
	<table class="table table-bordered table-striped">
   
		<tr>
			<th>#</th>
			<th>Type</th>
			<th>Title</th>
			<th>Organization</th>
			<th>Amount</th>
      <th>Due Cycle</th>
      <th>Due Date</th>
      <th>Cycle</th>
      <th>Currency</th>
      <th>Status</th>
			<th>Edit</th>
      <th>Delete</th>
		</tr>

    
  <?php 
  
  $mg->expanses('Investment');
  
  ?>
   <tr>
   <th><h5>Total:</h5></th><th><h5><?php echo $mg->total('Investment');?> $</h5></th>
     

</tr>
</table>
  
  </div>
</div>
<hr>
<h3>Risks</h3>
<div id="coststable">
 <div class="table-responsive">
	<table class="table table-bordered table-striped">
   
		<tr>
			<th>#</th>
			<th>Type</th>
			<th>Title</th>
			<th>Organization</th>
			<th>Amount</th>
      <th>Due Cycle</th>
      <th>Due Date</th>
      <th>Cycle</th>
      <th>Currency</th>
      <th>Status</th>
			<th>Edit</th>
      <th>Delete</th>
		</tr>

    
  <?php 
  $mg->expanses('Risk');


  
  ?>
   <tr>
   <th><h5>Total:</h5></th><th><h5><?php echo $mg->total('Risk');?> $</h5></th>
     

</tr>
</table>
  
  </div>
</div>

<hr>
<h3>Savings</h3>
<div id="coststable">
 <div class="table-responsive">
	<table class="table table-bordered table-striped">
   
		<tr>
			<th>#</th>
			<th>Type</th>
			<th>Title</th>
			<th>Organization</th>
			<th>Amount</th>
      <th>Due Cycle</th>
      <th>Due Date</th>
      <th>Cycle</th>
      <th>Currency</th>
      <th>Status</th>
			<th>Edit</th>
      <th>Delete</th>
		</tr>

    
  <?php 
  $mg->expanses('Saving');
  ?>
   <tr>
   <th><h5>Total:</h5></th><th><h5><?php echo $mg->total('Saving');?> $</h5></th>
     

</tr>
</table>
  
  </div>
</div>

<hr>
<h3>Loans</h3>
<div id="coststable">
 <div class="table-responsive">
	<table class="table table-bordered table-striped">
   
		<tr>
			<th>#</th>
			<th>Type</th>
			<th>Title</th>
			<th>Organization</th>
			<th>Amount</th>
      <th>Due Cycle</th>
      <th>Due Date</th>
      <th>Cycle</th>
      <th>Currency</th>
      <th>Status</th>
			<th>Edit</th>
      <th>Delete</th>
		</tr>

    
  <?php 
  $mg->expanses('Loan');
  ?>
   <tr>
   <th><h5>Total:</h5></th><th><h5><?php echo $mg->total('Loan');?> $</h5></th>
     

</tr>
</table>
  
  </div>




    <div class="col-lg-3">
       
 

      </div>

</div>
</div>
</div>

  






<hr>


</body>
<script>

  


  function showExpenseForm(){
    
    document.getElementById("addexpanase").style.display = "block";
  }

  function hideExpenseForm(){
    document.getElementById("addexpanase").style.display = "none";
  
  }

  </script>
</html>
<?php include("footer.php");   ?>
