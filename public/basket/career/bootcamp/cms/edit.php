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
$content=str_replace("<pre>","",$content);
$content=str_replace("</pre>","",$content);
$content=trim($content);
$category=$result['category'];
$subcategory=$result['subcategory'];
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
</head>
<body>
    <div class="container-fluid">
        <div class="row">
        <form method="post"  action="" id="to_do_form">
        <div class="row">
        <div class="col-sm-3">
                                
                                        <input type="text" class="form-control" id="subject" name="subject" value="<?php echo $subject; ?>" placeholder="Enter Subject" required>
                                        <input type="text" class="form-control" id="category" name="category" value="<?php echo $category; ?>" placeholder="Enter Category" >
                                        <input type="text" class="form-control" id="subcategory" name="subcategory" value="<?php echo $subcategory; ?>" placeholder="Subcategory" required>
                                        <input type="text" class="form-control" id="chapter" name="chapter" value="<?php echo $chapter; ?>" placeholder="Enter Chapter" required>
                                    
                                        <input type="text" class="form-control" id="title" name="title" value="<?php echo $title; ?>" placeholder="Enter Title" required>
                                   

                   </div> 
            </div>     
            
            <hr>

            <div class="col-sm-6">
       
                                 <div class="form-group">
                                        <label for="content">Content</label>
                                        <textarea class="form-control" id="content" name="content" rows="25"  cols="50" placeholder="Enter Content" ><?php echo $content; ?></textarea>
                                    </div>
                                 
                                    
                                    
              </div>              
              <div class="col-sm-4">                   
                                     <div class="form-group">
                                        <label for="imgUrl">Image Url</label>
                                        <img src="<?php echo $imgUrl; ?>" id="imgUrl" name="imgUrl" height="150"  class="img-responsive" alt="">
                                        <input type="text" class="form-control" id="imgUrl" name="imgUrl" value="<?php echo $imgUrl; ?>" placeholder="Enter Image Url" >
                                    </div>   
                                    <hr>
                                    <div class="form-group">
                                        <label for="imgUrl">Video Url</label>
                                        <img src="<?php echo $videoUrl; ?>" id="videoUrl" name="videoUrl" height="150"  class="img-responsive" alt="">
                                        <input type="text" class="form-control" id="videoUrl" name="videoUrl" value="<?php echo $videoUrl; ?>" placeholder="Enter Image Url" >
                                    </div>       
                
                                   
                                   
              </div>                       
                                   
                              
           
         
                   
                    <div class="col-sm-2">
                  
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
   <textarea id="content" name="content"   class="form-control" placeholder="notation_details..." ><?php echo $codePHP; ?></textarea>
    
  </div>
    <div id="menu1" class="container tab-pane"><br>
    
    <textarea id="content" name="content" cols="" rows="5"  class="form-control" placeholder="notation_details..." ><?php echo $codeJS; ?></textarea>
    </div>
    
  </div>

                    <hr>
                                    <div class="form-group">
                                        <label for="codeReusult">Code Result</label>
                                        <textarea class="form-control" id="codeReusult" name="codeReusult" placeholder="Enter Code Result"><?php echo $codeReusult; ?></textarea>
                          </div>

                   </div>
                    
                         
                                  
                      </div>
                      <hr />
                      <div class="row">
                         <div class="col-sm-3">
                     
                                      <input type="hidden" class="form-control" name="pid" id="pid"  value="<?php echo $id; ?>">
                              
                                 
                                
                                  <div class="form-group">
                                        <input type="submit" name="update"  class="btn btn-info" value="Editor" />
                                    </div>

                                  
                         </div>
                         </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

