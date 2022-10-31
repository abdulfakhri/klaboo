<?php 
session_start();
$path=$_SERVER['DOCUMENT_ROOT'];
//include("$path/nav.php");
include ("../bt_controller.php");
$btc= new bootcamp();
$url=$btc->geturl();
$btc->getAuthCheck();
$link=$url."/career/bootcamp/lessons/home.php?sub=";

?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>RGU</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css">
</head>
<body>

<!-- Side Navigation -->
<nav class="w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" style="display:none" id="mySidebar">
  <h1 class="w3-xxxlarge w3-text-theme">Side Navigation</h1>
  <button class="w3-bar-item w3-button" onclick="w3_close()">Close <i class="fa fa-remove"></i></button>
  <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
  <a href="#" class="w3-bar-item w3-button">Link 4</a>
</nav>

<!-- Header -->
<header class="w3-container w3-theme w3-padding" id="myHeader">
  <i onclick="w3_open()" class="fa fa-bars w3-xlarge w3-button w3-theme"></i> 
  <div class="w3-center">
  <h1></h1>
 
    <div class="w3-padding-32">
      <button class="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey" onclick="document.getElementById('id01').style.display='block'" style="font-weight:900;">Development Skills</button>
    </div>
  </div>
</header>

<!-- Modal -->
<div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-card-4 w3-animate-top">
      <header class="w3-container w3-theme-l1"> 
        <span onclick="document.getElementById('id01').style.display='none'"
        class="w3-button w3-display-topright">×</span>
        <h4>Oh snap! We just showed you a modal..</h4>
        <h5>Because we can <i class="fa fa-smile-o"></i></h5>
      </header>
      <div class="w3-padding">
        <p>Cool huh? Ok, enough teasing around..</p>
        <p>Go to our <a class="w3-btn" href="/w3css/default.asp">W3.CSS Tutorial</a> to learn more!</p>
      </div>
      <footer class="w3-container w3-theme-l1">
        <p>Modal footer</p>
      </footer>
    </div>
</div>

<div class="w3-row-padding w3-center w3-margin-top">
<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:650px">
  <h2>Frontend UI/UX</h2><br>
  <button onclick="myAccFunc('Demo1')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Markups</button>
<div id="Demo1" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>html">HTML</a></p>
  <p><a href="<?php  echo $link; ?>xhtml">XHTML</a></p>
  <p><a href="<?php  echo $link; ?>xml">XML</a></p>
  <p><a href="<?php  echo $link; ?>html5">HTML5</a></p>
  </div>
</div>
<button onclick="myAccFunc('Demo2')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Scripts</button>
<div id="Demo2" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>JavaScript">JavaScript</a></p>
  <p><a href="<?php  echo $link; ?>TypeScript">TypeScript</a></p>
  <p><a href="<?php  echo $link; ?>CoffeeScript">CoffeeScript</a></p>
  
  </div>
</div>
<button onclick="myAccFunc('Demo3')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Stylesheets</button>
<div id="Demo3" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>CSS">CSS</a></p>
  <p><a href="<?php  echo $link; ?>CSS3">CSS3</a></p>
  <p><a href="<?php  echo $link; ?>TailwindCSS">TailwindCSS</a></p>
  <p><a href="<?php  echo $link; ?>SASS">SASS</a></p>
  <p><a href="<?php  echo $link; ?>Bootstrap">Bootstrap</a></p>
  </div>
</div>
<button onclick="myAccFunc('Demo4')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Frameworks</button>
<div id="Demo4" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>VueJS">VueJS</a></p>
  <p><a href="<?php  echo $link; ?>ReactJS">ReactJS</a></p>
  <p><a href="<?php  echo $link; ?>Redux">Redux</a></p>
 
  </div>
</div>
<button onclick="myAccFunc('Demo5')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Components Builders</button>
<div id="Demo5" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>VueJS">BootstrapVue</a></p>
  <p><a href="<?php  echo $link; ?>ReactJS">BootstrapReact</a></p>
  <p><a href="<?php  echo $link; ?>Redux">Semantic UI</a></p>
 
  </div>
</div>
<button onclick="myAccFunc('Demo6')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Package Managers</button>
<div id="Demo6" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>NPM">NPM</a></p>
  <p><a href="<?php  echo $link; ?>Yarn">Yarn</a></p>

 
  </div>
</div>
<button onclick="myAccFunc('Demo7')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">UI Testing</button>
<div id="Demo7" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>PupperJS">PupperJS</a></p>
  <p><a href="<?php  echo $link; ?>CasperJS">CasperJS</a></p>
  <p><a href="<?php  echo $link; ?>PhantomJS">PhantomJS</a></p>
 
  </div>
</div>
<button onclick="myAccFunc('Demo8')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Mockups</button>
<div id="Demo8" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>Wireframing">Wireframing</a></p>
  <p><a href="<?php  echo $link; ?>UML">UML</a></p>
  <p><a href="<?php  echo $link; ?>Diagramming">Diagramming</a></p>
 
  </div>
</div>
  
  
  </div>
</div>

<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:600px">
  <h2>DevOps(Deployment)</h2><br>
  <button onclick="myAccFunc('Demo9')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Cloud Platform</button>
<div id="Demo9" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>AWS">AWS</a></p>
  <p><a href="<?php  echo $link; ?>Azure">Azure</a></p>
  <p><a href="<?php  echo $link; ?>GCP">GCP</a></p>
 
  </div>
</div>
<button onclick="myAccFunc('Demo10')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Cloud Computing</button>
<div id="Demo10" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>Deployment">Deployment</a></p>
  <p><a href="<?php  echo $link; ?>Cloning">Cloning</a></p>
  <p><a href="<?php  echo $link; ?>Migration">Migration</a></p>
 
  </div>
</div>

<button onclick="myAccFunc('Demo11')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">VCS</button>
<div id="Demo11" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>Git">Git</a></p>
  <p><a href="<?php  echo $link; ?>Github">Github</a></p>

  <p><a href="<?php  echo $link; ?>BitBucket">BitBucket</a></p>
  </div>
</div>
<button onclick="myAccFunc('Demo12')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">CI/CD</button>
<div id="Demo12" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>Docker">Docker</a></p>
  <p><a href="<?php  echo $link; ?>Kubernetes">Kubernetes</a></p>
  <p><a href="<?php  echo $link; ?>GitLab">GitLab</a></p>
 
  </div>
</div>
<button onclick="myAccFunc('Demo13')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Storage</button>
<div id="Demo13" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>S3">S3</a></p>
  <p><a href="<?php  echo $link; ?>Redis">Redis</a></p>

 
  </div>
</div>
<button onclick="myAccFunc('Demo14')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">CLI</button>
<div id="Demo14" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>GitBash">Git Bash</a></p>
  <p><a href="<?php  echo $link; ?>UnixShell">Unix Shell</a></p>
  <p><a href="<?php  echo $link; ?>WSPowerShell">WS Power Shell</a></p>
 
  </div>
</div>
<button onclick="myAccFunc('Demo15')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">OS</button>
<div id="Demo15" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>Linux">Linux/Ubuntu</a></p>
  <p><a href="<?php  echo $link; ?>Windows">Windows</a></p>
  <p><a href="<?php  echo $link; ?>OSX">OSX</a></p>
 
  </div>
</div>
<button onclick="myAccFunc('Demo16')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">SDLC</button>
<div id="Demo16" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>Agile">Agile</a></p>
  <p><a href="<?php  echo $link; ?>Scrum">Scrum</a></p>
  <p><a href="<?php  echo $link; ?>V-Model">V-Model</a></p>
  <p><a href="<?php  echo $link; ?>Waterfall">Waterfall</a></p>
 
  </div>
</div>

 
  </div>
</div>

<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:750px">
  <h2>Backend (Server Side)</h2><br>
  <button onclick="myAccFunc('Demo17')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Frameworks</button>
<div id="Demo17" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>Laravel">Laravel</a></p>
  <p><a href="<?php  echo $link; ?>Express">Express</a></p>

 
  </div>
 
</div>
<button onclick="myAccFunc('Demo18')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Languages</button>
<div id="Demo18" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>PHP">PHP</a></p>
  <p><a href="<?php  echo $link; ?>Nodejs">Nodejs</a></p>

 
  </div>


  </div>
  <button onclick="myAccFunc('Demo19')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Database</button>
<div id="Demo19" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>SQL">SQL</a></p>
  <p><a href="<?php  echo $link; ?>MySQL">MySQL</a></p>
  <p><a href="<?php  echo $link; ?>Postgres">Postgres</a></p>
  <p><a href="<?php  echo $link; ?>NoSQL">NoSQL</a></p>
  <p><a href="<?php  echo $link; ?>MonogoDB">MonogoDB</a></p>
  <p><a href="<?php  echo $link; ?>GraphQL">GraphQL</a></p>

 
  </div>
 
</div>
<button onclick="myAccFunc('Demo20')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">ORM</button>
<div id="Demo20" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>Doctrine">Doctrine</a></p>


 
  </div>
  
</div>

<button onclick="myAccFunc('Demo21')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Web Services</button>
<div id="Demo21" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>SOAP">SOAP</a></p>
  <p><a href="<?php  echo $link; ?>RestfulAPIs">Restful APIs</a></p>
  <p><a href="<?php  echo $link; ?>Webhooks">Webhooks</a></p>
 
 
  </div>
</div>
  <button onclick="myAccFunc('Demo22')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Design Patterns</button>
<div id="Demo22" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>MVC">MVC</a></p>
  <p><a href="<?php  echo $link; ?>MVVM">MVVM</a></p>

 
 
  </div>
  </div>
  <button onclick="myAccFunc('Demo23')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Algorithms</button>
<div id="Demo23" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>Searching">Searching</a></p>
  <p><a href="<?php  echo $link; ?>Sorting">Sorting</a></p>
  <p><a href="<?php  echo $link; ?>Insertion">Insertion</a></p>
  <p><a href="<?php  echo $link; ?>Updating">Updating</a></p>
  <p><a href="<?php  echo $link; ?>Delete">Delete</a></p>
 
  </div>
  </div>
  <button onclick="myAccFunc('Demo24')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Data Structures</button>
<div id="Demo24" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>LinearDS">Linear DS</a></p>
  <p><a href="<?php  echo $link; ?>NonLinearDS">Non-Linear DS</a></p> 
  </div>
  </div>
  <button onclick="myAccFunc('Demo25')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Machine Learning</button>
<div id="Demo25" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>SupervisedLearning">Supervised Learning</a></p>
  <p><a href="<?php  echo $link; ?>NonSupervisedLearning">Non-Supervised Learning</a></p> 
  </div>
  </div>

  <button onclick="myAccFunc('Demo26')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Testing</button>
<div id="Demo26" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>PHPUnit">PHPUnit</a></p>
  <p><a href="<?php  echo $link; ?>Jira">Jira</a></p> 
  <p><a href="<?php  echo $link; ?>Mocha Chai">Mocha Chai</a></p>
  <p><a href="<?php  echo $link; ?>Selenium">Selenium</a></p> 
  </div>
  </div>

  <button onclick="myAccFunc('Demo27')" class="w3-padding-16 w3-theme w3-button w3-block w3-left-align">CMS</button>
<div id="Demo27" class="w3-hide">
  <div class="w3-container">
  <p><a href="<?php  echo $link; ?>WordPress">WordPress</a></p>
  <p><a href="<?php  echo $link; ?>Drupal">Drupal</a></p> 
 
  </div>
  </div>

















<!-- Script for Sidebar, Tabs, Accordions, Progress bars and slideshows -->
<script>
// Side navigation
function w3_open() {
  var x = document.getElementById("mySidebar");
  x.style.width = "100%";
  x.style.fontSize = "40px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Tabs
function openCity(evt, cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var activebtn = document.getElementsByClassName("testbtn");
  for (i = 0; i < x.length; i++) {
    activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-dark-grey";
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

// Accordions
function myAccFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Slideshows
var slideIndex = 1;

function plusDivs(n) {
  slideIndex = slideIndex + n;
  showDivs(slideIndex);
}

function showDivs(n) {
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

showDivs(1);

// Progress Bars
function move() {
  var elem = document.getElementById("myBar");   
  var width = 5;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
</script>

</body>
</html>
