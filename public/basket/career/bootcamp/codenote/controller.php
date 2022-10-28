<?PHP
include 'model.php';


 class controller extends model  {

   

     public function __construct()
     {
         parent::__construct();
         parent::connect();
         
     }

        public function insert( $content, $title, $reference, $code){
            $sql = "INSERT INTO cn (content, title, reference, code) VALUES ( :content, :title, :reference, :code)";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':content', $content);
            $stmt->bindParam(':code', $code);
            $stmt->bindParam(':title', $title);
            $stmt->bindParam(':reference', $reference);
            $stmt->execute();
        }


        function delete($id){
   
    
            $sql = "DELETE FROM cn WHERE id=:id";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':id',$id);
            $stmt->execute();
            return header("Location: index.php");

        }


        function update($content, $title, $reference, $code, $id){


            $content="<pre>".$content."</pre>";
            $codePHP = "<pre>".$code."</pre>";
   
    

            $sql = "UPDATE cn SET title=:title,content=:content,code=:code,reference=:reference WHERE id=:id";
             $stmt = $this->db->prepare($sql);
             $stmt->bindParam(':content', $content);
            $stmt->bindParam(':code', $code);
            $stmt->bindParam(':title', $title);
            $stmt->bindParam(':reference', $reference);
             $stmt->bindParam(':id',$id);
             $stmt->execute();
             return header("Location: index.php");
         
         }
         public function view_by_id($id)
         {
         
         
             $sql = "SELECT * FROM cn WHERE id=:id";
             $stmt = $this->db->prepare($sql);
             $stmt->bindParam(':id', $id);
             $stmt->execute();
             $result = $stmt->fetch();
             return $result;
         }

         public function view()
         {
             
             $sql = "SELECT * FROM cn";
             $stmt = $this->db->prepare($sql);
             $stmt->execute();
             $results = $stmt->fetchAll();
             return $results;
         }

}
     





if(isset($_POST['add'])){

   
    $title = $_POST['title'];
    $content = $_POST['content'];
    $code = $_POST['code'];
    $reference = $_POST['reference'];
  
  
    $insert = new controller();

    $insert->insert($content, $title, $reference, $code);

    return header("Location: index.php");

}


function deleteNotation($nid){

    $delete=new controller();

    $delete->delete($nid);
}
    
    
if(isset($_POST['update'])){

    $edit = new Controller();
    
    $title = $_POST['title'];
    $content = $_POST['content'];
    $code = $_POST['code'];
    $reference = $_POST['reference'];
    $id=$_POST['pid'];

   $res=$edit->update($content, $title, $reference, $code, $id);
   if($res==true){
    return header("Location: index.php");
   }

}

   
