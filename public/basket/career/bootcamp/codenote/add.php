<?php
include 'controller.php';
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
                                
                                  
                                  
                                    <div class="form-group">
                                        <label for="title">Note Title</label>
                            
                                        <input type="text" name="title" id="title" class="form-control"  placeholder="Note Title" required />
                                    </div>
                                   
                                    <div class="form-group">
                                        <label for="description">Content</label>
                                        <textarea class="form-control" cols="80" rows="10" id="content" name="content" placeholder="Content"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Code  </label>
                                        <textarea class="form-control" cols="80" rows="10" id="code" name="code" placeholder="Code"></textarea>
                                    </div>

                                     
                                    <div class="form-group">
                                        <label for="title">Reference</label>
                            
                                        <input type="text" name="reference" id="reference" class="form-control"  placeholder="Reference"  />
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

