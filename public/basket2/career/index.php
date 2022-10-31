<?php 
session_start();
include("../nav.php");

?>

<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:200px;" id="mySidebar"><br>
        <div class="w3-container w3-row">
      
        <a href="/career/bootcamp/" class="w3-bar-item w3-button">
             Bootcamp
            </a>
            <hr>
        <a href="#problem_solving" class="w3-bar-item w3-button">
           Problem Solving
            </a>
            <hr>
        <a href="#decision_making" class="w3-bar-item w3-button">
            Decision Making
            </a>
            <hr>
        <a href="#planning" class="w3-bar-item w3-button">
             Planning
            </a>
            <hr>
        <a href="#strategy_making" class="w3-bar-item w3-button">
            Strategy Making
            </a>
        <hr>
    
        </div>
</nav>


  <!-- Overlay effect when opening sidebar on small screens -->
  <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer"
        title="close side menu" id="myOverlay"></div>

    <!-- !PAGE CONTENT! -->
    <div class="w3-main" style="margin-left:200px;margin-top:45px;">

  <div class="container">
  <?php
                                   
                                     

                                      $rss_link1='https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/spotlight/learning-science-math/rss.xml';
                                      $rss = simplexml_load_file($rss_link1);
                                  
                                      foreach ($rss->channel->item as $item) {
                                        echo ' 
                                        <div class="contianer">
                                        <h4><a href="'. $item->link .'">'.$item->title.'</a></h4>
                                    
                                        <article>'.$item->description.'</article>
                                        <p>'.$item->content.'</p>
                                    
                                        </div>
                                        <br>
                                      ';
                                      } 

                                    
                                     
                                    ?>





     
</div>

<script>
var openInbox = document.getElementById("myBtn");
openInbox.click();

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function myFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show"; 
    x.previousElementSibling.className += " w3-red";
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-red", "");
  }
}

openMail("Borge")
function openMail(personName) {
  var i;
  var x = document.getElementsByClassName("person");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x = document.getElementsByClassName("test");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" w3-light-grey", "");
  }
  document.getElementById(personName).style.display = "block";
  event.currentTarget.className += " w3-light-grey";
}
</script>

<script>
var openTab = document.getElementById("firstTab");
openTab.click();
</script>

</body>
</html> 
