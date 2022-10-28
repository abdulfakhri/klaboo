<?php
session_start();
include 'management.php';

$mg=new Management();
$mg->getAuthCheck();
$id=$_GET['crd'];

$result=$mg->viewCreditCard($id);

$card_name=$result['card_name'];
$card_num=$result['card_num'];
$credit_limit=$result['credit_limit'];
$card_balance=$result['card_balance'];
$statement_balance=$result['statement_balance'];
$interest_rate=$result['interest_rate'];
$mini_payment=$result['mini_payment'];
$late_payment_fee=$result['late_payment_fee'];
$due_date=$result['due_date'];
$cr_insinuation=$result['cr_insinuation'];
$payment_cycle=$result['payment_cycle'];
$cr_type=$result['cr_type'];
$currency=$result['currency'];
$cr_status=$result['cr_status'];
$payment_status=$result['payment_status'];

$id=$result['id'];

if(!empty(isset($_POST["update_crd"]))){ 

  $card_name=$_POST['card_name'];
  $card_num=$_POST['card_num'];
  $credit_limit=$_POST['credit_limit'];
  $card_balance=$_POST['card_balance'];
  $statement_balance=$_POST['statement_balance'];
  $interest_rate=$_POST['interest_rate'];
  $mini_payment=$_POST['mini_payment'];
  $late_payment_fee=$_POST['late_payment_fee'];
  $due_date=$_POST['due_date'];
  $cr_insinuation=$_POST['cr_insinuation'];
  $payment_cycle=$_POST['payment_cycle'];
  $cr_type=$_POST['cr_type'];
  $currency=$_POST['currency'];
  $cr_status=$_POST['cr_status'];
  $payment_status=$_POST['payment_status'];
  $card_id=$_POST['id'];

    $exp=$mg->updateCreditCard($card_name,$card_num,$credit_limit,$card_balance,$statement_balance,$interest_rate,$mini_payment,$late_payment_fee,$due_date,$cr_insinuation,$payment_cycle,$cr_type,$currency,$cr_status,$payment_status,$card_id);
    if($exp){
        header("Location: /fm_cr.php");
    }
    else{
        echo "<script>alert('Expense Not Updated');</script>";
    }

}

include("nav.php");

?>

<div class="container">
<br><br />
  <div class="row">
    <div class="col-sm-6">
      <button type="button" onClick="showExpanseForm()" class="btn btn-primary">Add Credit Cards</button> | <button type="button" onClick="hideExpanseForm()" class="btn btn-primary">Hide</button>
 
     
      <div id="addexpanase">
  <form method="post" action="" id="myDIV" class="">
 <label for="expName">Credit Card Name</label>
 <input type="text" class="form-control" id="card_name" name="card_name" value="<?php echo $card_name; ?>" placeholder="Card Name">
 <br>
 <label for="expAmount">Credit Card #</label>
  <input type="text" class="form-control" id="card_num" name="card_num" value="<?php echo $card_num; ?>" placeholder="Card#">
  <br>
  <label for="expAmount">Credit Limit</label>
  <input type="text" class="form-control" id="credit_limit" name="credit_limit" value="<?php echo $credit_limit; ?>" placeholder="Credit Limit">
  <br>
  <label for="expAmount">Credit Card Balance</label>
  <input type="text" class="form-control" id="card_balance" name="card_balance" value="<?php echo $card_balance; ?>" placeholder="Card Balance">
  <br>
  <label for="expAmount">Credit Card Statement Balance</label>
  <input type="text" class="form-control" id="statement_balance" name="statement_balance" value="<?php echo $card_balance; ?>"   placeholder="Statement Balance">
  <br>
  <label for="expAmount">Interest Rate</label>
  <input type="text" class="form-control" id="interest_rate" name="interest_rate"  value="<?php echo $card_balance; ?>"  placeholder="Card Interest Rate">
  <br>
  <label for="expAmount">Current Minimum Payment</label>
  <input type="text" class="form-control" id="mini_payment" name="mini_payment" value="<?php echo $card_balance; ?>"   placeholder="Minimun Payment">
  <br>
  <label for="expAmount">Late Payment Fee</label>
  <input type="text" class="form-control" id="late_payment_fee" name="late_payment_fee" value="<?php echo $card_balance; ?>" placeholder="Late Payment Fee">
  <br>
  <label for="expAmount">Statement Due Date</label>
  <input type="date" class="form-control" id="due_date" name="due_date" value="<?php echo $due_date; ?>" placeholder="Due Date">
  <br>
  <label for="expAmount">Credit Card Institution</label>
  <input type="text" class="form-control" id="cr_insinuation" name="cr_insinuation" value="<?php echo $card_balance; ?>" placeholder="Institution">
  <br>
  <label for="expAmount">Payment Cycle</label>
  <select class="form-control" name="payment_cycle" required>
    <option selected>Payment Cycle</option>
    <option value="<?php echo $payment_cycle;?>"><?php echo $payment_cycle;?></option>
    <option value="Weekly">Weekly</option>
    <option value="Daily">Daily</option>
    <option value="BiWeekly">BiWeekly</option>
    <option value="Monthly">Monthly</option>
  </select>
  <br>
  <label for="expAmount">Credit Card Type</label>
  <select class="form-control" name="cr_type" required>
    <option selected>Card Type</option>
    <option value="<?php echo $cr_type;?>"><?php echo $cr_type;?></option>
    <option value="Master Card">Master Card</option>
    <option value="Credit Card">Credit Card</option>
    <option value="Visa Card">Visa Card</option>
    <option value="Debit Card">Debit Card</option>
  </select>
  <br>
  <label for="expAmount">Credit Card Amount</label>
  <select class="form-control" name="currency" required>
   <option value="<?php echo $currency;?>"><?php echo $currency;?></option>
    <option selected>Currency</option>
    <option value="CAD">CAD</option>
    <option value="USD">USD</option>
    <option value="EURO">EURO</option>
    
  </select>
  <br>
  <label for="expAmount">Credit Card Status</label>
  <select class="form-control" name="cr_status" required>
    <option selected>Status</option>
    <option value="<?php echo $cr_status;?>"><?php echo $cr_status;?></option>
    <option value="Active">Active</option>
    <option value="Closed">Closed</option>
    <option value="Pending">Pending</option>
    
  </select>
  <br>
  <br>
  <label for="expAmount">Credit Card Payment Status</label>
  <select class="form-control" name="payment_status" required>
    <option selected>Status</option>
    <option value="<?php echo $payment_status;?>"><?php echo $payment_status;?></option>
    <option value="StatementPaid">Statement Paid</option>
    <option value="BalancePaid">Balance Paid</option>
    <option value="MinimumPaid">Minimum Paid</option>
    <option value="MinimumPaymentMissed">Minimum Payment Missed</option>

    
  </select>
  <br>
  <input type="hidden" name="id" value="<?php echo $id; ?>">
  <button type="submit" class="btn btn-primary" class="addBtn" name="update_crd">Add Credit Card</button>
</form>
</div>
</div>
  </div>
</div>

<?php include("footer.php");   ?>
