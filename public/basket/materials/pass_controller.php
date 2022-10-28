<?php
include 'model.php';

class Pass extends Model{

  
    
    public function __construct(){
        parent::__construct();
        parent::timeZone();
        parent::connect();
    }
    public function encData($data){
        
        return base64_encode($data);
    }
    public function decData($data){
        
        return base64_decode($data);
    }

    public function add($task_name, $task_details,$dueDate,$dueTime,$value,$task_type,$status){
      $task_name=$this->sanitize($task_name);
      $task_details=$this->sanitize($task_details);
      $dueDate=$this->sanitize($dueDate);
      $dueTime=$this->sanitize($dueTime);
      $value=$this->sanitize($value);
      $task_type=$this->sanitize($task_type);
      $status=$this->sanitize($status);
      $task_name=$this->encData($task_name);
      $task_details=$this->encData($task_details);
      $sql = "INSERT INTO tasks (task_name, task_details, due_date, due_time, importance, task_type, status) 
      VALUES (:task_name, :task_details, :dueDate, :dueTime, :value, :task_type, :status)";
      $stmt = $this->db->prepare($sql);
      $stmt->bindParam(':task_name', $task_name);
      $stmt->bindParam(':task_details', $task_details);
      $stmt->bindParam(':dueDate', $dueDate);
      $stmt->bindParam(':dueTime', $dueTime);
      $stmt->bindParam(':value', $value);
      $stmt->bindParam(':task_type', $task_type);
      $stmt->bindParam(':status', $status);
      $stmt->execute();
      return true;
    }

    public function password() {

        $today = date("Y-m-d");
        $sql = "SELECT * FROM tasks WHERE due_date='$today' OR task_type='daily' AND status!='1' ORDER BY due_time ASC";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $i=1;
        foreach($results as $row){

            $task_type=$row['task_type'];
            if($task_type=='daily'){
                $style="background-color:#f1f1f1;font-weight:bold;font-size:20px;border:1px solid #ccc;";
            }else{
                $style="background-color:#fff;font-weight:normal;font-size:15px;border:1px solid #ccc;";
            }
          $imp=$row['importance'];
          if($imp='diamond'){
            $imp_ic='Diamond';
          }elseif($imp='gold'){
            $imp_ic='gold';
          }elseif($imp='silver'){
            $imp_ic='silver';
          }elseif($imp='normal'){
            $imp_ic='normal';
          }elseif($imp='emergency'){
            $imp_ic='emergency';
          }elseif ($imp='urgent') {
            $imp_ic='urgent';
          }

          $done=$row['status'];
          $delete_key=$row['delete_key'];
          if($delete_key!=1 or $delete_key ==NULL){

            if($done ==1){

                echo '
                <tr>
                <td style=""><a href="/task_done_undo.php?t='.$row["id"].'">Undo</a></td>
                <td style="">'.$row['due_time'].'</td>
                <td>'.$imp_ic.'</td>
                <td><del>'.$this->decData($row['task_name']).'</del></td>
                <td><a href="/edit.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">Edit</a></td>
                <td><a href="/view.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">View</a></td>
                <td><a href="/delete.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">X</a></td>
                </tr>';
            }else{
                if($row['focus']==1){
                    echo '
                    <tr style="font-size:26px;color:green">
                    <td style="width:5%;"><a href="/task_done.php?t='.$row["id"].'">Done</a></td>
                    <td style="">'.$row['due_time'].'</td>
                    <td>'.$imp_ic.'</td>
                    <td>'.$this->decData($row['task_name']).'</td>
                    <td><a href="/task_focus_off.php?t='.$row["id"].'" class="">UnFocus</a></td>
                    <td><a href="/edit.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">Edit</a></td>
                    <td><a href="/view.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">View</a></td>
                    <td><a href="/delete.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">X</a></td>
                    </tr>';
                }
                    echo '
                    <tr style="'.$style.'">
                    <td style="width:5%;"><a href="/task_done.php?t='.$row["id"].'">Done</a></td>
                    <td style="">'.$row['due_time'].'</td>
                    <td>'.$imp_ic.'</td>
                    <td>'.$this->decData($row['task_name']).'</td>
                    <td><a href="/task_focus.php?t='.$row["id"].'" class="">Focus</a></td>
                    <td><a href="/edit.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">Edit</a></td>
                    <td><a href="/view.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">View</a></td>
                    <td><a href="/delete.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">X</a></td>
                    </tr>';
                
              }    
           }

        }

        
    }

    public function resources() {

        $today = date("Y-m-d");
        
        $sql = "SELECT * FROM tasks WHERE task_type='weekly' ORDER BY due_time DESC";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $i=1;
        foreach($results as $row){

          $imp=$row['importance'];
          if($imp='diamond'){
            $imp_ic='Diamond';
          }elseif($imp='gold'){
            $imp_ic='gold';
          }elseif($imp='silver'){
            $imp_ic='silver';
          }elseif($imp='normal'){
            $imp_ic='normal';
          }elseif($imp='emergency'){
            $imp_ic='emergency';
          }elseif ($imp='urgent') {
            $imp_ic='urgent';
          }

          $done=$row['status'];
          $delete_key=$row['delete_key'];
          if($delete_key!=1 or $delete_key ==NULL){

            if($done ==1){

                echo '
                <tr>
                <td style=""><a href="/task_done_undo.php?t='.$row["id"].'">Undo</a></td>
                <td style="">'.$row['due_time'].'</td>
                <td>'.$imp_ic.'</td>
                <td><del>'.$this->decData($row['task_name']).'</del></td>
                <td><a href="/edit.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">Edit</a></td>
                <td><a href="/view.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">View</a></td>
                <td><a href="/delete.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">X</a></td>
                </tr>';
            }else{
                if($row['focus']==1){
                    echo '
                    <tr style="font-size:26px;color:green">
                    <td style="width:5%;"><a href="/task_done.php?t='.$row["id"].'">Done</a></td>
                    <td style="">'.$row['due_time'].'</td>
                    <td>'.$imp_ic.'</td>
                    <td>'.$this->decData($row['task_name']).'</td>
                    <td><a href="/task_focus_off.php?t='.$row["id"].'" class="">UnFocus</a></td>
                    <td><a href="/edit.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">Edit</a></td>
                    <td><a href="/view.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">View</a></td>
                    <td><a href="/delete.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">X</a></td>
                    </tr>';
                }
                    echo '
                    <tr style="">
                    <td style="width:5%;"><a href="/task_done.php?t='.$row["id"].'">Done</a></td>
                    <td style="">'.$row['due_time'].'</td>
                    <td>'.$imp_ic.'</td>
                    <td>'.$this->decData($row['task_name']).'</td>
                    <td><a href="/task_focus.php?t='.$row["id"].'" class="">Focus</a></td>
                    <td><a href="/edit.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">Edit</a></td>
                    <td><a href="/view.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">View</a></td>
                    <td><a href="/delete.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">X</a></td>
                    </tr>';
                
              }    
           }

        }


    }

    public function delete($id){
   
        $sql="UPDATE tasks SET delete_key='1' WHERE id=:id";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':id',$id);
        $stmt->execute();
        return header("Location: index.php");
    }   

    public function update($task_name,$due_time,$due_date,$importance,$task_type,$task_details,$status,$id){
   
    $task_name=$this->encData($task_name);
    $task_details=$this->encData($task_details);
    $sql="UPDATE tasks SET task_name=:task_name,due_time=:due_time,due_date=:due_date,importance=:importance,task_type=:task_type,task_details=:task_details,status=:status WHERE id=:id";
    $stmt = $this->db->prepare($sql);
    $stmt->bindParam(':task_name',$task_name);
    $stmt->bindParam(':due_time',$due_time);
    $stmt->bindParam(':due_date',$due_date);
    $stmt->bindParam(':importance',$importance);
    $stmt->bindParam(':task_type',$task_type);
    $stmt->bindParam(':task_details',$task_details);
    $stmt->bindParam(':status',$status);
    $stmt->bindParam(':id',$id);
    $stmt->execute();
    return header("Location: index.php");
   
   }
 
    public function search($query){

        $query= base64_encode($query);
    
        $sql = "SELECT * FROM tasks WHERE task_name LIKE :query OR task_details LIKE :query";
        $stmt = $this->db->prepare($sql);
        $query = "%{$query}%";
        $stmt->bindParam(':query', $query);
        $stmt->execute();
        $result = $stmt->fetchAll();
        return $result;
    
    }


}

if(isset($_POST['addTask'])){

  $task_name=$_POST['taskName'];
  $task_details=$_POST['taskDetails'];
  $task_name=$_POST['taskName'];
  $task_details=$_POST['taskDetails'];
  $dueDate=$_POST['dueDate'];
  $dueTime=$_POST['dueTime'];

  $dueTime=date("g:i a", strtotime($dueTime));

  $value=$_POST['value'];
  $task_type=$_POST['task_type'];
  $status='0';
  $res=$mg->addTask($task_name, $task_details,$dueDate,$dueTime,$value,$task_type,$status);
  if($res==true){
      echo "Task added successfully";
  }
  else{
      echo "Error adding task";
  }
}
  



if(isset($_POST['update'])) {
    
    $edit=new Management();
    
    $taskName=$_POST['taskName'];
    $task_details=$_POST['taskDetails'];
    $dueDate=$_POST['dueDate'];
    $dueTime=$_POST['dueTime'];
    $value=$_POST['value'];
    $task_type=$_POST['task_type'];
    $status=$_POST['status'];
    $importance=$_POST['importance'];
    $taskId=$_POST['task_id'];

    return $edit->updateTask($taskName,$dueTime,$dueDate,$importance,$task_type,$task_details,$status,$taskId);
}