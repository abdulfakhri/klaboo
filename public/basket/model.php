<?php

 class Model {

    private $host= "localhost";
    private $dbname='u559678163_system';
    private $user="u559678163_systemu";
    private $pass="!@#123qweasdZXC";
    protected $db;

    private $host_local= "localhost";
    private $dbname_local='system_rgu';
    private $user_local="root";
    private $pass_local="root";
    protected $db_local;


    public function __construct(){

        $host=$this->checkHost();
        if ($host ==true){

            try{
                $this->db=new PDO("mysql:host=$this->host_local;dbname=$this->dbname_local",$this->user_local,$this->pass_local);
                $this->db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            }catch(PDOException $e){
                echo "Connection failed: ".$e->getMessage();
            }
        }else{

           try{
                $this->db=new PDO("mysql:host=$this->host;dbname=$this->dbname",$this->user,$this->pass);
                $this->db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            }catch(PDOException $e){
                echo "Connection failed: ".$e->getMessage();
            }

        }
    }

    public function geturl() {
        $url=$_SERVER['HTTP_HOST'];
        return $url;
    }

    public function getAuthCheck() {
        $auth=$_SESSION['valid'];
        if(!isset($auth)){
            header("Location: ./login.php");
        }
    }

    public function timeZone() {
        date_default_timezone_set('Canada/Pacific');
    }

    public function checkHost() {
        $url=$_SERVER['HTTP_HOST'];
        if($url=="localhost:3000" or $url=="127.0.0.1:8000"){
            return true;
        }else{
            return false;
        }
    }


    protected function connect(){
        return $this->db;
    }

    public function sanitize($value) {


        $value = trim($value);
        $value = stripslashes($value);
        $value = htmlspecialchars($value);
        $value = strip_tags($value);
        $value = htmlentities($value);
        return $value;


    }


    protected function close(){
        $this->db=null;
    }


}

class Auths extends Model{

    public function __construct(){
        parent::__construct();
    }

    public function editProfile($name, $password,$email,$id){
        $sql = "UPDATE admin_user SET name = '$name', password = '$password', email = '$email' WHERE id = '$id'";
        $this->db->query($sql);

        return "Update Successful";

    }

    public function viewProfile($id){
        $sql = "SELECT * FROM admin_user WHERE id = '$id'";
        $result = $this->db->query($sql);
        $row = $result->fetch();
        return $row;
    }

    public function login($username, $password){

        $username = $this->sanitize($_POST['email']);
        $password = $this->sanitize($_POST['pwd']);
        //$remember = $_POST['remember'];
        /*
        if($remember == 'on'){
            setcookie('email', $username, time() + (86400 * 30), "/");
            setcookie('pwd', $password, time() + (86400 * 30), "/");

        }
        */

        $sql = "SELECT * FROM admin_user WHERE email='$username' AND password='$password'";

        $result = $this->db->query($sql);

       if($result->rowCount() > 0){

       $row = $result->fetch();

                $_SESSION['id'] = $row['id'];
                $_SESSION['valid'] = $row['id'];
                $_SESSION['email'] = $row['email'];
                $_SESSION['name'] = $row['name'];




            header('Location: /index.php');


        }else{
            echo "Invalid username or password";
        }
    }

    public function checkUser($email){
        $sql = "SELECT * FROM admin_user WHERE email='$email'";
        $result = $this->db->query($sql);
        if($result->rowCount() > 0){
            return true;
        }else{
            return false;
        }
    }

    public static function logout(){
        session_destroy();
        header('Location: /login.php');
    }

    public function registeration(){
        $name = $this->sanitize($_POST['name']);
        $email = $this->sanitize($_POST['email']);
        $password = $this->sanitize($_POST['password']);

        $sql = "INSERT INTO rand_user(name, email, password) VALUES('$name', '$email', '$password')";
        $result = $this->db->query($sql);
        if ($result) {
            //echo "New record created successfully";
            header('Location: /login.php');
        }else{

           echo "New record not created successfully";
           echo $this->db->errorInfo();
        }
    }

    public function signup($name, $email, $password){

        $name = $this->sanitize($_POST['name']);
        $username = $this->sanitize($_POST['email']);
        $pass = $this->sanitize($_POST['password']);
        $sql="INSERT INTO admin_user(name,email,password) VALUES('$name','$username','$pass')";

        $result = $this->db->query($sql);
        if ($result) {
            //echo "New record created successfully";
            header('Location: /login.php');
        }else{

           echo "New record not created successfully";
           echo $this->db->errorInfo();
        }
    }

}
