<?PHP
session_start();

//if(isset($_GET['action'])){
    
    
        session_destroy();

        // Remove cookie variables
        //$days = 30;
        //setcookie ("rememberme","", time() - ($days *  24 * 60 * 60 * 1000) );
        
        //setcookie ("rememberme"," ",time()-3600,"/");
        
        setcookie ("rememberme"," ",time()-3600,"/");

        header('Location: /index.php');
//}
   
session_destroy();

$days = 30;
setcookie ("rememberme","");
header("Location:/index.php");

?>