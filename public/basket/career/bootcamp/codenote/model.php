<?php


 class Model {

    private $host= "localhost";
    private $dbname='u559678163_ed';
    private $user="u559678163_ed_u";
    private $pass="!@#123qweasdZXC";
    protected $db;

    private $host_local= "localhost";
    private $dbname_local='education_rgu';
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

    public function checkHost() {
        $url=$_SERVER['HTTP_HOST'];
        if($url=="localhost:3000"){
            return true;
        }else{
            return false;
        }
    }


   final protected function connect(){
        return $this->db;
    }


    protected function close(){
        $this->db=null;
    }


    public function sanitize($value) {


        $value = trim($value);
        $value = stripslashes($value);
        $value = htmlspecialchars($value);
        $value = strip_tags($value);
        $value = htmlentities($value);
        return $value;
    
        
    }



   
}
