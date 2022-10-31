<?php
session_start();
include 'mg_controller.php';
$mg=new Management();
$mg->getAuthCheck();
$nid=$_GET['t'];

$result=$mg->view($nid);

$task_name=$result['task_name'];
$task_details=$result['task_details'];
$task_name=$mg->decData($task_name);
$task_details=$mg->decData($task_details);
$due_time=$result['due_time'];
$due_date=$result['due_date'];
$importance=$result['importance'];
$task_type=$result['task_type'];
$task_status=$result['status'];
$id=$result['id'];

?>
<!DOCTYPE HTML>
<html lang= "en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MyTasks</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="page-header">
                    <h1>My Tasks</h1>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">Edit Task</h3>
                            </div>
                            <div class="panel-body">


                            <form method="post" action="" id="myDIV" class="">
  
    
  <button type="submit" class="btn btn-primary" class="addBtn" name="update">Save</button><br>
 
  
    <label for="importance">Status</label>
  <select class="form-control" name="status">
    <option value=""><?php echo $task_status; ?></option>
    <option value="1">Done</option>
    <option value="0">Not</option>
    <option value="0.1">Process</option>
  </select>

  <input type="hidden" class="form-control" name="task_id" id="task_id"  value="<?php echo $id; ?>">
  <label for="task_name">Task Name</label>
  <input type="text" name="taskName" id="taskName" class="form-control" placeholder="Task Name" required value="<?php echo $task_name; ?>" />
   
    <label for="task_details">Task Details</label>
   <textarea  id="taskDetails" name="taskDetails" cols="10" rows="10" class="form-control" placeholder="Task details..." ><?php echo $task_details; ?></textarea>
   
   <label for="dueDate">Date Time</label>
   <input type="time" class="form-control" id="dueTime" name="dueTime"  placeholder="Task Time" value="<?php echo $due_time; ?>" />
 
   <label for="due_date">Due Date</label>
   <input type="date"  class="form-control" id="dueDate" name="dueDate" placeholder="Task Date" value="<?php echo $due_date; ?>" />
  
  
  <label for="importance">Importance</label>
  <select class="form-control" name="importance">
    <option value=""><?php echo $importance; ?></option>
    <option value="diamond">Diamond</option>
    <option value="gold">Gold</option>
    <option value="silver">Silver</option>
  </select>
    <label for="task_type">Task Type</label>
  <select class="form-control" name="task_type">
    <option value=""><?php echo $task_type; ?></option>
    <option value="daily">Daily</option>
    <option value="monthly">Month</option>
    <option value="weekly">Weekly</option>
    <option value="yearly">Yearly</option>
    <option value="quarterly">Quarterly</option>
 </select>
</form>

                            </div>
                        </div>
                    </div>
                </div>
         
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

