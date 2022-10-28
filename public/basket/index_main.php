<?php 
session_start();
include 'mg/mg_controller.php';
$mg=new Management();
$mg->getAuthCheck();
include("nav.php");
?>
<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:180px;" id="mySidebar"><br>
        <div class="w3-container w3-row">
        <a href="/profile.php" class="w3-bar-item w3-button">
              <h1><?PHP  echo $_SESSION['name'];?></h1>  </a>
    
    
        <hr>
        <a href="#tasks" class="w3-bar-item w3-button">
             Tasks
            </a>
            <hr>
        <a href="#problem_solving" class="w3-bar-item w3-button">
           Problem Solving
            </a>
            <hr>
        <a href="#decision_making" class="w3-bar-item w3-button">
            Decision Making
            </a>
            <hr>
        <a href="#planning" class="w3-bar-item w3-button">
             Planning
            </a>
            <hr>
        <a href="#strategy_making" class="w3-bar-item w3-button">
            Strategy Making
            </a>
        <hr>
    
              
              
           
        </div>
    </nav>

  <!-- Overlay effect when opening sidebar on small screens -->
  <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer"
        title="close side menu" id="myOverlay"></div>

    <!-- !PAGE CONTENT! -->
    <div class="w3-main" style="margin-left:180px;margin-top:43px;">
  <!-- Header -->
  <header class="w3-container" style="padding-top:22px">
    <h3><b> Create your self</b> | <?php echo date("Y-m-d"); ?></h3>
    <a href="#" class="w3-button" onClick="showAddTaskForm()">Show Add</a> | <a href="#" class="w3-button" onClick="hideAddTaskForm()">Hide</a><br>
    <a href="fm.php">Finance</a> | <a href="fm_cr.php">Credit Cards</a>
    <div id="tasks">
    <form method="post" action="mg/mg_controller.php" id="myDIV" class="">
  
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
      
       <?php  
       $time=date("H:i");
       $mg->daily();
       ?>

      </table>

  



  <hr>
  <h5><b> Weekly Tasks</b> | <?php echo date("d"); ?></h5>
     <table class="w3-table w3-striped w3-white">
       <?php  $mg->weekly();?>
      </table>





      </div>




    <div class="w3-twothird">


    <h5><b> Yearly Tasks</b> | <?php echo date("Y"); ?></h5>
    <table class="w3-table w3-striped w3-white">
       <?php  $mg->plans();?>
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