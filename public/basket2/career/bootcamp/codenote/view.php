<?php
include 'controller.php';

$nid=$_GET['id'];

$controller = new Controller();
$result=$controller->view_by_id($nid);

$title=$result['title'];
$content=$result['content'];
$reference=$result['reference'];
$id=$result['id'];
$code=$result['code'];







?>
<!DOCTYPE HTML>
<html lang= "en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Code Notations</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="page-header">
                 
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">Edit Lessons</h3>
                            </div>
                            <div class="panel-body">
                                <form method="post"  action="" id="to_do_form">

                                <div class="form-group">
                                        <label for="title">Note Title</label>
                                        <input type="hidden" class="form-control" name="pid" id="pid"  value="<?php echo $id; ?>">
                            
                                        <input type="text" name="title" id="title" class="form-control"  placeholder="Note Title" value="<?php echo $title; ?>" />
                                    </div>
                                   
                                    <div class="form-group">
                                        <label for="description">Content</label>
                                        <textarea class="form-control" cols="80" rows="10" id="content" name="content" placeholder="Content"><?php echo $content; ?></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Code  </label>
                                        <textarea class="form-control" cols="80" rows="10" id="code" name="code" placeholder="Code"><?php echo $code; ?></textarea>
                                    </div>

                                     
                                    <div class="form-group">
                                        <label for="title">Reference</label>
                            
                                        <input type="text" name="reference" id="reference" class="form-control"  placeholder="Reference" value="<?php echo $reference; ?>"  />
                                    </div>
                                  

                                
                                    <div class="form-group">
                                       
                                        <button><a href="#" class="btn" onclick="window.location.href='index.php'">Back</a></button>
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
<script>
$(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
});
</script>
</html>

