<?php
session_start();

include 'controller.php';

$nid=$_GET['id'];

$controller = new Controller();

$controller->getAuthCheck();



$result=$controller->view_by_id($nid);

$title=$result['title'];
$subject=$result['subject'];
$content=$result['content'];
$category=$result['category'];
$chapter=$result['chapter'];
$id=$result['id'];
$codePHP=$result['codePHP'];
$codeJS=$result['codeJS'];
$codeReusult=$result['coderesult'];
$imgUrl=$result['imgUrl'];
$videoUrl=$result['picUrl'];





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
                    <h1><?php  echo $subject; ?></h1>
                    <h2><?php  echo $category; ?></h2>
                 
                    <h4><?php  echo $chapter; ?></h4>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">Edit Lessons</h3>
                            </div>
                            <div class="panel-body">
                                <form method="post"  action="" id="to_do_form">
                                    <span id="message"></span>
                                    <div class="form-group">
                                      <input type="hidden" class="form-control" name="pid" id="pid"  value="<?php echo $id; ?>">
                                        <input type="text" name="title" id="title" class="form-control" placeholder="Notation Name" required value="<?php echo $title; ?>" />
                                    </div>
                                    <div class="form-group">
                                    <textarea id="content" name="content" cols="10" rows="10" class="form-control" placeholder="notation_details..." ><?php echo $content; ?></textarea>
                                    </div>
                                    <div class="form-group">
                                    <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#home">PHP</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#menu1">JS</a>
    </li>
    
  </ul>

  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br>
    <textarea id="content" name="content" cols="10" rows="10" class="form-control" placeholder="notation_details..." ><?php echo $codePHP; ?></textarea>
    </div>
    <div id="menu1" class="container tab-pane fade"><br>
    <textarea id="content" name="content" cols="10" rows="10" class="form-control" placeholder="notation_details..." ><?php echo $codeJS; ?></textarea>
    </div>
    
  </div>
                                        
                                       
                                    <br />
                                
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

