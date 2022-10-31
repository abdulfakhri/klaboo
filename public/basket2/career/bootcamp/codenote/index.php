<?php
include 'controller.php';
$model= new Controller();

?>
<!DOCTYPE HTML>
<html lang= "en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
             
            </div>
             
         <div class="row">
            <table class="table table-striped table-bordered table-hover table">
                <div class="row">
                <a href="add.php" class="btn btn-info btn-lg w3-right">Add</a>
                </div>
                <tr>
                <td>Titles</td>
               
                  
                    <td>View</td>
                    <td>Edit</td>
                     <td>Delete</td>
                 
                </tr>
                
                    <?php  
                    $results=$model->view();
                    foreach ($results as $result) {
                        ?>
                        <tr>
                        <td><?php echo $result['title']; ?></td>
                        
                        
               

                        
                        <td><a href="view.php?id=<?php echo $result['id']; ?>">View</a></td>
                        <td><a href="edit.php?id=<?php echo $result['id']; ?>">Edit</a></td>
                        <td><a href="delete.php?id=<?php echo $result['id']; ?>">Delete</a></td> 
                       </tr>
                        <?php
                    }
                    
                    ?>
               
            </table>
        </div>


       
      
</body>
</html>
