<?php
$path=$_SERVER['DOCUMENT_ROOT'];
include("$path/public/model.php");

class Management extends Model{



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
    public function daily() {

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
                <td><a href="/delete.php?t='.$row["id"].'" class="btn btn-danger btn-xs delete">X</a>


                    </td>
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
    public function weekly() {

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
    public function deleteTask($id){

        $sql="UPDATE tasks SET delete_key='1' WHERE id=:id";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':id',$id);
        $stmt->execute();
        return header("Location: index.php");
    }

public function updateTask($task_name,$due_time,$due_date,$importance,$task_type,$task_details,$status,$id){

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

public function taskDone($id){

    $sql="INSERT INTO finished_tasks (task_name,due_time,due_date,importance,task_type,task_details,status)
    SELECT task_name,due_time,due_date,importance,task_type,task_details,status FROM tasks WHERE id=:id;";

    $sql .="UPDATE finished_tasks SET status='1' WHERE id=:id;";

    $sql .="DELETE FROM tasks WHERE id=:id";

    $stmt= $this->db->prepare($sql);
    $stmt->bindParam(':id',$id);
    $stmt->execute();
    return header("Location: index.php");

}

public function taskDoneUndo($id){

    $sql="UPDATE tasks SET status='0' WHERE id=:id";
    $stmt = $this->db->prepare($sql);
    $stmt->bindParam(':id',$id);
    $stmt->execute();
    return header("Location: index.php");

}

public function focusOn($id){

    $sql="UPDATE tasks SET focus='1' WHERE id=:id";
    $stmt = $this->db->prepare($sql);
    $stmt->bindParam(':id',$id);
    $stmt->execute();
    return header("Location: index.php");

}

public function focusOff($id){

    $sql="UPDATE tasks SET focus='0' WHERE id=:id";
    $stmt = $this->db->prepare($sql);
    $stmt->bindParam(':id',$id);
    $stmt->execute();
    return header("Location: index.php");

}

public function addTask($task_name, $task_details,$dueDate,$dueTime,$value,$task_type,$status){
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

public function view($id)
{
    $sql = "SELECT * FROM tasks WHERE id=:id";
    $stmt = $this->db->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $result = $stmt->fetch();
    return $result;
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

public function plans() {

        $today = date("Y-m-d");

        $sql = "SELECT * FROM tasks WHERE task_type!='daily' OR task_type!='weekly' AND due_date!='".$today."'  ORDER BY due_date DESC";
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

    public function addPass($task_name, $task_details,$dueDate,$dueTime,$value,$task_type,$status){
        $task_name=$this->sanitize($task_name);
        $task_details=$this->sanitize($task_details);
        $dueDate=$this->sanitize($dueDate);
        $dueTime=$this->sanitize($dueTime);
        $value=$this->sanitize($value);
        $task_type=$this->sanitize($task_type);
        $status=$this->sanitize($status);
        $task_name=$this->encData($task_name);
        $task_details=$this->encData($task_details);
        $sql = "INSERT INTO materials (task_name, task_details, due_date, due_time, importance, task_type, status)
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

    public function viewPass($id)
    {
        $sql = "SELECT * FROM materials WHERE id=:id";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $result = $stmt->fetch();
        return $result;
    }

    public function searchPass($query){

            $query= base64_encode($query);

            $sql = "SELECT * FROM materials WHERE task_name LIKE :query OR task_details LIKE :query";
            $stmt = $this->db->prepare($sql);
            $query = "%{$query}%";
            $stmt->bindParam(':query', $query);
            $stmt->execute();
            $result = $stmt->fetchAll();
            return $result;

    }

    public function updatePass($task_name,$due_time,$due_date,$importance,$task_type,$task_details,$status,$id){

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

    public function deletePass($id){

        $sql="UPDATE tasks SET delete_key='1' WHERE id=:id";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':id',$id);
        $stmt->execute();
        return header("Location: index.php");
    }


    public function passwords() {

        $today = date("Y-m-d");

        $sql = "SELECT * FROM tasks WHERE task_type!='daily' OR task_type!='weekly' AND due_date!='".$today."'  ORDER BY due_date DESC";
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





    public function addExpanse($expType,$exp_name,$expOrg,$expAmount,$expDue,$expCycle,$expCurrency,$expStatus) {
        $sql = "INSERT INTO expanses (type, title, organization, amount, due, cycle, currency, status) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$expType,$exp_name,$expOrg,$expAmount,$expDue,$expCycle,$expCurrency,$expStatus]);
        return $stmt;
    }
    public function updateExpanse($expType,$exp_name,$expOrg,$expAmount,$expDue,$expCycle,$expCurrency,$expStatus,$expId) {
        $sql = "UPDATE expanses SET type=?, title=?, organization=?, amount=?, due=?, cycle=?, currency=?, status=? WHERE id=?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$expType,$exp_name,$expOrg,$expAmount,$expDue,$expCycle,$expCurrency,$expStatus,$expId]);
        return $stmt;
    }

    public function addIncome($income_title,$income_amount,$income_source,$paying_company,$type,$income_cycle,$currency,$status,$payment_method) {
        $sql="INSERT INTO income (income_title,income_amount,income_source,paying_company,type,income_cycle,currency,status,payment_method) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$income_title,$income_amount,$income_source,$paying_company,$type,$income_cycle,$currency,$status,$payment_method]);
        return $stmt;
    }
    public function updateIncome($income_title,$income_amount,$income_source,$paying_company,$type,$income_cycle,$currency,$status,$payment_method,$income_id) {
        $sql="UPDATE income SET income_title=?,income_amount=?,income_source=?,paying_company=?,type=?,income_cycle=?,currency=?,status=?,payment_method=? WHERE id=?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$income_title,$income_amount,$income_source,$paying_company,$type,$income_cycle,$currency,$status,$payment_method,$income_id]);
        return $stmt;
    }



    public function expanses($type) {

        $sql = "SELECT * FROM expanses WHERE type='$type' AND status='Paying' ORDER BY id ASC";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $i=1;
        foreach($results as $row){

          echo '
            <tr>
            <td>'.$i++.'</td>
            <td>'.$row["title"].'</td>
            <td>'.$row["type"].'</td>
            <td>'.$row["organization"].'</td>
            <td>'.$row["amount"].'</td>
            <td>'.$row["due"].'</td>
            <td>'.$row["due_date"].'</td>
            <td>'.$row["cycle"].'</td>
            <td>'.$row["currency"].'</td>
            <td>'.$row["status"].'</td>
            <td><a href="/edit_finance.php?exp='.$row["id"].'" class="btn btn-danger btn-xs delete">Edit</a></td>
            <td><a href="/delete_exp.php?exp='.$row["id"].'" class="btn btn-danger btn-xs delete">Delete</a></td>
            </tr>';

        }

    }

    public function incomes() {

        $sql = "SELECT * FROM income WHERE status='Paying' ORDER BY id ASC";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $i=1;
        foreach($results as $row){

          echo '
            <tr>
            <td>'.$i++.'</td>
            <td>'.$row["income_title"].'</td>
            <td>'.$row["income_amount"].'</td>
            <td>'.$row["income_source"].'</td>
            <td>'.$row["paying_company"].'</td>
            <td>'.$row["type"].'</td>
            <td>'.$row["income_cycle"].'</td>
            <td>'.$row["currency"].'</td>
            <td>'.$row["status"].'</td>
            <td>'.$row["payment_method"].'</td>
            <td><a href="/edit_income.php?ic='.$row["id"].'" class="btn btn-danger btn-xs delete">Edit</a></td>
            <td><a href="/delete_income.php?ic='.$row["id"].'" class="btn btn-danger btn-xs delete">Delete</a></td>
            </tr>';

        }

    }

    public function total($type) {

        $sql = "SELECT SUM(amount) as sum_amount FROM expanses WHERE status='Paying'";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return round($results[0]["sum_amount"],2);
    }

    public function totalIncome() {

        $sql = "SELECT SUM(income_amount) as sum_amount FROM income WHERE status='Paying'";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return round($results[0]["sum_amount"],2);
    }



    public function viewExpanse($id)
    {
        $sql = "SELECT * FROM expanses WHERE id=:id";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $result = $stmt->fetch();
        return $result;
    }

    public function viewIncome($id)
    {
        $sql = "SELECT * FROM income WHERE id=:id";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $result = $stmt->fetch();
        return $result;
    }



    public function deleteExp($id){


        $sql = "DELETE FROM expanses WHERE id=:id";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':id',$id);
        $stmt->execute();
        return header("Location: /fm.php");
}
/***********************************************************End of Tasks Part *******************************************************/
public function deleteIncome($id){
    $sql = "DELETE FROM income WHERE id=:id";
    $stmt = $this->db->prepare($sql);
    $stmt->bindParam(':id',$id);
    $stmt->execute();
    return header("Location: /fm.php");
}
public function addCreditCard($card_name,$card_num,$credit_limit,$card_balance,$statement_balance,$interest_rate,$mini_payment,$late_payment_fee,$due_date,$cr_insinuation,$payment_cycle,$cr_type,$currency,$cr_status,$payment_status) {
    $sql = "INSERT INTO credit_cards(card_name,card_num,credit_limit,card_balance,statement_balance,interest_rate,mini_payment,late_payment_fee,due_date,cr_insinuation,payment_cycle,cr_type,currency,cr_status,payment_status) VALUES(? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? , ?)";
    $stmt = $this->db->prepare($sql);
    $stmt->execute([$card_name,$card_num,$credit_limit,$card_balance,$statement_balance,$interest_rate,$mini_payment,$late_payment_fee,$due_date,$cr_insinuation,$payment_cycle,$cr_type,$currency,$cr_status,$payment_status]);
    return $stmt;
}
public function updateCreditCard($card_name,$card_num,$credit_limit,$card_balance,$statement_balance,$interest_rate,$mini_payment,$late_payment_fee,$due_date,$cr_insinuation,$payment_cycle,$cr_type,$currency,$cr_status,$payment_status,$card_id) {
    $sql = "UPDATE credit_cards SET card_name=?, card_num=?, credit_limit=?, card_balance=?, statement_balance=?, interest_rate=?, mini_payment=?, late_payment_fee=?, due_date=?, cr_insinuation=?, payment_cycle=?, cr_type=?, currency=?, cr_status=?, payment_status=? WHERE id=?";
    $stmt = $this->db->prepare($sql);
    $stmt->execute([$card_name,$card_num,$credit_limit,$card_balance,$statement_balance,$interest_rate,$mini_payment,$late_payment_fee,$due_date,$cr_insinuation,$payment_cycle,$cr_type,$currency,$cr_status,$payment_status,$card_id]);
    return $stmt;
}
public function CreditCards() {
    $today = date("Y-m-d");
    $sql = "SELECT * FROM credit_cards ORDER BY id ASC";
    $stmt = $this->db->prepare($sql);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $results;
}
public function viewCreditCard($id)
{
    $sql = "SELECT * FROM credit_cards WHERE id=:id";
    $stmt = $this->db->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $result = $stmt->fetch();
    return $result;
}
public function CreditCardTotal() {

    $sql = "SELECT SUM(card_balance) as sum_amount FROM credit_cards";
    $stmt = $this->db->prepare($sql);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return round($results[0]["sum_amount"],2);
}
public function deleteCreditCard($id){

    //$notation_id=sanitize($notion_id);
    $sql = "DELETE FROM credit_cards WHERE id=:id";
    $stmt = $this->db->prepare($sql);
    $stmt->bindParam(':id',$id);
    $stmt->execute();
    return header("Location: /fm_cr.php");
}


    /*
    public function createTable($tableName,$fields) {

        $columns=explode(',',$fields);

        for($i=0;$i<count($columns);$i++){
        //$sql ="CREATE TABLE IF NOT EXISTS ".$tableName."( id INT(100) NOT NULL AUTO_INCREMENT,".$fields[$i]."VARCHAR(100)".",PRIMARY KEY id)";
        $sql ="CREATE TABLE IF NOT EXISTS ".$tableName."($fields[$i]." VARCHAR(100),".")";
        $stmt = $this->db->prepare($sql);
        $result=$stmt->execute();
        if($result){
            echo "Table Created Successfully";
        }else{
            echo "Table Not Created";
        }
        }
    }
    */

}


$mg=new Management();

if(isset($_POST['update'])) {



    $taskName=$_POST['taskName'];
    $task_details=$_POST['taskDetails'];
    $dueDate=$_POST['dueDate'];
    $dueTime=$_POST['dueTime'];
    $value=$_POST['value'];
    $task_type=$_POST['task_type'];
    $status=$_POST['status'];
    $importance=$_POST['importance'];
    $taskId=$_POST['task_id'];

    return $mg->updateTask($taskName,$dueTime,$dueDate,$importance,$task_type,$task_details,$status,$taskId);
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



if(isset($_POST['delete'])){

    return $mg->deleteTask($tid);

}
