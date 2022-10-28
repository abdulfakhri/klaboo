<?php
session_start();

include 'management.php';
$mg=new Management();
$mg->getAuthCheck();
$nid=$_GET['t'];

$result=$mg->view_by_id($nid);


$task_name=$mg->decData($result['task_name']);
$task_details=$mg->decData($result['task_details']);
    
$id=$result['id'];






?>
<!DOCTYPE HTML>
<html lang= "en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Code Notations</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="page-header">
                    <h1><?php echo $task_name; ?></h1>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default">
                           
                            <div class="panel-body">
                                <form method="post"  action="" id="to_do_form">
                                <div class="form-group">
                                        <input   class="form-control" placeholder="Task details..." value="<?php echo $task_name; ?>" />
                                       </div>
                                    <div class="form-group">
                                        <textarea  readonly="readonly" id="notation_details" name="notation_details" cols="10" rows="10" class="form-control" placeholder="Task details..." ><?php echo $task_details; ?></textarea>
                                       </div>
                                    <br />
                                
                                    <div class="form-group">
                                       
                                        <a href="index.php" class="btn btn-danger">Back</a>
                                    </div>
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

