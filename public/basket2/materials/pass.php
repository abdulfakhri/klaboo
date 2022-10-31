<?php 
session_start();
include("pass_controller.php");
$auth= new Auths();
$mg=new Pass();
$mg->getAuthCheck();
include("nav.php");
?>

  <!-- Header -->
  <header class="w3-container" style="padding-top:22px">

    <a href="#" class="w3-button" onClick="showAddTaskForm()">Show Add</a> | <a href="#" class="w3-button" onClick="hideAddTaskForm()">Hide</a>
    <div id="tasks">
    <form method="post" action="" id="myDIV" class="">
  
    
 
 
  <input type="text" class="" id="taskName" name="taskName" placeholder="Task Name" style="width:20%;">

  <input type="date"  class="" id="dueDate" name="dueDate" placeholder="Task Date" style="width:15%;">
  <input type="time" class="" id="dueTime" name="dueTime"  placeholder="Task Time" style="width:15%;"/>

<select class="" name="task_type" style="width:15%;">
   
    <option value="daily">Daily Routines</option>
    <option value="monthly">Month</option>
    <option value="weekly">Weekly</option>
    <option value="yearly">Yearly</option>
    <option value="quarterly">Quarterly</option>
 </select>
 <select class="" name="value" style="width:15%;">
    <option value="diamond">Diamond</option>
    <option value="gold">Gold</option>
    <option value="silver">Silver</option>
    <option value="urgent">Urgent</option>
    <option value="normal">Normal</option>
    <option value="emergency">Emergency</option>
  </select>

  <br />

  <textarea id="taskDetails" name="taskDetails" class="form-control" placeholder="Task Description" rows="10" cols="10"></textarea>





  <input type="hidden" class="" id="task_status" name="task_status"  value="no">

 <button type="submit" class="btn btn-primary" class="addBtn" name="addTask">Add Task</button>
</form>









    </div>
  </header>



  <div class="w3-panel">
    <div class="w3-row-padding" style="margin:0 -16px">

    <div class="w3-third">
      <h5><b> Daily Tasks</b> | <?php echo date("d"); ?></h5>
      <table class="w3-table w3-striped w3-white">
      
       <?php  $mg->password();?>

      </table>

  



  <hr>
  <h5><b> Weekly Tasks</b> | <?php echo date("d"); ?></h5>
     <table class="w3-table w3-striped w3-white">
     <?php  $mg->password();?>
      </table>





      </div>




    <div class="w3-twothird">


    <h5><b> Yearly Tasks</b> | <?php echo date("Y"); ?></h5>
    <table class="w3-table w3-striped w3-white">
    <?php  $mg->password();?>
      </table>
  

      </div>
    </div>



      
    </div>
  </div>
  <hr>
  
  <script>
  function showAddTaskForm(){
    
    document.getElementById("tasks").style.display = "block";
  }

  function hideAddTaskForm(){
    document.getElementById("tasks").style.display = "none";
  
  }

  </script>


<?php include("footer.php");   ?>