<?php 
session_start();
include 'management.php';
$mg=new Management();
$mg->getAuthCheck();

if(!empty(isset($_POST["add_crd"]))){ 

  /*
  card_name
  card_num
  credit_limit
  card_balance
  statement_balance
  interest_rate
  mini_payment
  late_payment_fee
  due_date
  cr_insinuation
  payment_cycle
  cr_type
  currency
  cr_status
payment_status
  card_name,card_num,credit_limit,card_balance,statement_balance,interest_rate,mini_payment,late_payment_fee,due_date,cr_insinuation,payment_cycle,cr_type,currency,cr_status
   */

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
  

    $exp=$mg->addCreditCard($card_name,$card_num,$credit_limit,$card_balance,$statement_balance,$interest_rate,$mini_payment,$late_payment_fee,$due_date,$cr_insinuation,$payment_cycle,$cr_type,$currency,$cr_status,$payment_status);
    if($exp){
        echo "<script>alert('Credit Card Added Successfully');</script>";
        
    }
    else{
        echo "<script>alert('Credit Card Not Added');</script>";
    }

}


  

include("nav.php");


?>


<div class="container">
<br><br />
  <div class="row">
    <div class="col-sm-6">
      <button type="button" onClick="showExpanseForm()" class="btn btn-primary">Add Credit Cards</button> | <button type="button" onClick="hideExpanseForm()" class="btn btn-primary">Hide</button>
 
     
      <div id="addcreditcard">
  <form method="post" action="" id="myDIV" class="">
 <label for="expName">Credit Card Name</label>
 <input type="text" class="form-control" id="card_name" name="card_name" placeholder="Card Name">
 <br>
 <label for="expAmount">Credit Card #</label>
  <input type="text" class="form-control" id="card_num" name="card_num" placeholder="Card#">
  <br>
  <label for="expAmount">Credit Limit</label>
  <input type="text" class="form-control" id="credit_limit" name="credit_limit" placeholder="Credit Limit">
  <br>
  <label for="expAmount">Credit Card Balance</label>
  <input type="text" class="form-control" id="card_balance" name="card_balance" placeholder="Card Balance">
  <br>
  <label for="expAmount">Credit Card Statement Balance</label>
  <input type="text" class="form-control" id="statement_balance" name="statement_balance" placeholder="Statement Balance">
  <br>
  <label for="expAmount">Interest Rate</label>
  <input type="text" class="form-control" id="interest_rate" name="interest_rate" placeholder="Card Interest Rate">
  <br>
  <label for="expAmount">Current Minimum Payment</label>
  <input type="text" class="form-control" id="mini_payment" name="mini_payment" placeholder="Minimun Payment">
  <br>
  <label for="expAmount">Late Payment Fee</label>
  <input type="text" class="form-control" id="late_payment_fee" name="late_payment_fee" placeholder="Late Payment Fee">
  <br>
  <label for="expAmount">Statement Due Date</label>
  <input type="date" class="form-control" id="due_date" name="due_date" placeholder="Due Date">
  <br>
  <label for="expAmount">Credit Card Institution</label>
  <input type="text" class="form-control" id="cr_insinuation" name="cr_insinuation" placeholder="Institution">
  <br>
  <label for="expAmount">Payment Cycle</label>
  <select class="form-control" name="payment_cycle" required>
    <option selected>Payment Cycle</option>
    <option value="Weekly">Weekly</option>
    <option value="Daily">Daily</option>
    <option value="BiWeekly">BiWeekly</option>
    <option value="Monthly">Monthly</option>
  </select>
  <br>
  <label for="expAmount">Credit Card Type</label>
  <select class="form-control" name="cr_type" required>
    <option selected>Card Type</option>
    <option value="Weekly">Master Card</option>
    <option value="Daily">Credit Card</option>
    <option value="BiWeekly">Visa Card</option>
    <option value="Monthly">Debit Card</option>
  </select>
  <br>
  <label for="expAmount">Credit Card Amount</label>
  <select class="form-control" name="currency" required>
    <option selected>Currency</option>
    <option value="CAD">CAD</option>
    <option value="USD">USD</option>
    <option value="EURO">EURO</option>
    
  </select>
  <br>
  <label for="expAmount">Credit Card Status</label>
  <select class="form-control" name="cr_status" required>
    <option selected>Status</option>
    <option value="Active">Active</option>
    <option value="Closed">Closed</option>
    <option value="Pending">Pending</option>
    
  </select>
  <br>
  <br>
  <label for="expAmount">Credit Card Payment Status</label>
  <select class="form-control" name="payment_status" required>
    <option selected>Status</option>
    <option value="StatementPaid">Statement Paid</option>
    <option value="BalancePaid">Balance Paid</option>
    <option value="MinimumPaid">Minimum Paid</option>
    <option value="MinimumPaymentMissed">Minimum Payment Missed</option>

    
  </select>
  <br>
  <button type="submit" class="btn btn-primary" class="addBtn" name="add_crd">Add Credit Card</button>
</form>
</div>
</div>
  </div>
 <hr>
 <button type="button" onClick="showExpanseTable()" class="btn btn-primary">Show Credit Cards</button> | <button type="button" onClick="hideExpanseTable()" class="btn btn-primary">Hide Table</button>
 <div id="addcreditcard">
  
 <div class="table-responsive">

	<table class="table table-bordered table-striped">
   





		<tr>
			
      <th >Card Name</th>
      <th>Card #</th>
      <th>Credit Limit</th>
      <th>Card Type</th>
      <th>Card Institution</th>
      <th>Card Balance</th>
      <th>Statement Balance</th>
      <th>Interest Rate</th>
      <th>Statement Due Date</th>
      <th>Payment Cycle</th>
      <th>Late Payment Fee</th>
      <th>Currency</th>
      <th>Status</th>
      <th>Payment Status</th>
      <th>Mini Payment</th>
      <th>Edit</th>
      <th>Delete</th>
    

		</tr>
  <?php 
  $creditcards=$mg->CreditCards(); 

  foreach($creditcards as $row){
	echo '
		<tr>
	
      <td style="width:10%;">'.$row['card_name'].'</td>
      <td>'.$row['card_num'].'</td>
      <td>'.$row['credit_limit'].'</td>
      <td>'.$row['cr_type'].'</td>
      <td>'.$row['cr_insinuation'].'</td>
      <td>'.$row['card_balance'].'</td>
      <td>'.$row['statement_balance'].'</td>
      <td>'.$row['interest_rate'].'</td>
      <td>'.$row['due_date'].'</td>
      <td>'.$row['payment_cycle'].'</td>
      <td>'.$row['late_payment_fee'].'</td>
      <td>'.$row['currency'].'</td>
      <td>'.$row['cr_status'].'</td>
      <td>'.$row['payment_status'].'</td>
      <td>'.$row['mini_payment'].'</td>

      

      <td><a href="/edit_crd.php?crd='.$row["id"].'" class="btn btn-danger btn-xs delete">Edit</a></td>
      <td><a href="/delete_crd.php?crd='.$row["id"].'" class="btn btn-danger btn-xs delete">Delete</a></td>
		</tr>
		
		';
	
  }
  
  ?>
   <tr>
      <th><h3>Total:</h3></th><th><h3><?php echo $mg->CreditCardTotal();?> $</h3></th>
     

</tr>
</table>
  
  </div>
</div>



</body>
<script>
  
  function showExpanseForm(){
    
    document.getElementById("addcreditcard").style.display = "block";
  }

 

  function showExpanseTable(){
    
    document.getElementById("addcreditcard").style.display = "block";
  }


     

   function hideExpanseTable(){
    document.getElementById("addcreditcard").style.display = "none";
  
  }

  function   hideExpanseForm(){
    document.getElementById("addcreditcard").style.display = "none";
  
  }

  </script>
</html>
<?php include("footer.php");   ?>
