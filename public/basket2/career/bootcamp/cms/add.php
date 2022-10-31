<?php
session_start();

include 'controller.php';
$model= new Controller();

$model->getAuthCheck();

?>
<!DOCTYPE HTML>
<html lang= "en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Note a Lesson</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>
<body>
    <div class="container"  id="registerApp">
        <div class="row">
            <div class="col-md-12">
           
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">Add Note</h3>
                            </div>
                            <div class="panel-body">
                                <form method="post" action="">
                                    <span id="message"></span>
                                    <div class="form-group">
                                        <label for="subject">Subject</label>
                                        <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject">
                                    </div>
                                    <div class="form-group">
                                        <label for="category">Category</label>
                                        <input type="text" class="form-control" id="category" name="category" placeholder="Category">
                                    </div>
                                    <div class="form-group">
                                        <label for="category">Subcategory</label>
                                        <input type="text" class="form-control" id="subcategory" name="subcategory" placeholder="Subcategory">
                                    </div>
                                    <div class="form-group">
                                        <label for="chapter">Chapter</label>
                                        <input type="text" class="form-control" id="chapter" name="chapter" placeholder="Chapter">
                                    </div>
                                    <div class="form-group">
                                        <label for="title">Note Title</label>
                            
                                        <input type="text" name="title" id="title" class="form-control"  placeholder="Note Title" required />
                                    </div>
                                   
                                    <div class="form-group">
                                        <label for="description">Content</label>
                                        <textarea class="form-control" cols="80" rows="10" id="content" name="content" placeholder="Content"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Diagram </label>
                                        <textarea class="form-control" cols="80" rows="10" id="imgUrl" name="imgUrl" placeholder="URL"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Video</label>
                                        <textarea class="form-control" cols="80" rows="10" id="picUrl" name="picUrl" placeholder="URL"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Code in PHP </label>
                                        <textarea class="form-control" cols="80" rows="10" id="codePHP" name="codePHP" placeholder="Code PHP"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Code in JavaScript</label>
                                        <textarea class="form-control" cols="80" rows="10" id="codeJS" name="codeJS" placeholder="Code JS"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Comment in PHP </label>
                                        <textarea class="form-control" cols="80" rows="10" id="commentPHP" name="commentPHP" placeholder="Comment php"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Comment in JavaScript</label>
                                        <textarea class="form-control" cols="80" rows="10" id="commentJS" name="commentJS" placeholder="Comment JS"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Code Result </label>
                                        <textarea class="form-control" cols="80" rows="10" id="code_result" name="code_result" placeholder="Code Result"></textarea>
                                    </div>
                                
                               
                                    <div class="form-group">
                                        <input type="submit" name="add" id="add" class="btn btn-info" value="Note" />
                                      
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
      
        </div>
    
    </div>
      
</body>
</html>
<style>
.success
{
 font-weight: bold;
 color:#009933;
 background-color: #ccffcc;
 border:1px solid #009933;
}

.danger
{
 font-weight: bold;
 color:#ff0000;
 background-color: #ffe6e6;
 border:1px solid #ff0000;
}
</style>

