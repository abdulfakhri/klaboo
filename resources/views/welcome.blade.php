<!DOCTYPE html>
<html>
<head>
<title>Klabo</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Arial", sans-serif}

body, html {
  height: 100%;
  line-height: 1.8;
}
.w3-display-container{
    color: #000;
}

/* Full height image header */
.bgimg-1 {
  background-position: center;
  background-size: cover;
  background-image: url("/w3images/mac.jpg");
  min-height: 100%;
}
.btn-primary{
    background-color: #f2780a;
    border-color: #f2780a;
    border-radius: 3px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 6px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    width: auto;


}
hr{
    border-color: #f2780a;
}
a {
    color: #f2780a;
}
.w3-bar .w3-button {
  padding: 16px;
}
</style>
</head>
<body>

<!-- Navbar (sit on top) -->
<div class="w3-top">
  <div class="w3-bar w3-white w3-card" id="myNavbar">
    <a href="#home" class="w3-bar-item w3-button w3-wide">Klabo Logo</a>

    <button class="w3-bar-item w3-button w3-hide-small w3-left btn-primary" onclick="toggleFunction()">
 For talents</button>
 <button class="w3-bar-item w3-button w3-hide-small w3-left" onclick="toggleFunction()">
 For clients</button>

    <!-- Right-sided navbar links -->
    <div class="w3-right w3-hide-small">
      <a href="#about" class="w3-bar-item w3-button">How it Works</a>
      <a href="#team" class="w3-bar-item w3-button"> </a>
      <a href="#work" class="w3-bar-item w3-button"> For Agency</a>
      <a href="/register" class="w3-bar-item w3-button btn-primary"> Get Started</a>
      <a href="/login" class="w3-bar-item w3-button"> Log in</a>
    </div>
    <!-- Hide right-floated links on small screens and replace them with a menu icon -->

    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</div>

<!-- Sidebar on small screens when clicking the menu icon -->
<nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large w3-center" style="display:none" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
  <button class="w3-bar-item w3-button w3-hide-small w3-left" onclick="toggleFunction()">
 For talents</button>
 <button class="w3-bar-item w3-button w3-hide-small w3-left" onclick="toggleFunction()">
 For clients</button>
  <a href="#about" class="w3-bar-item w3-button">How it Works</a>
      <a href="#team" class="w3-bar-item w3-button"> </a>
      <a href="#work" class="w3-bar-item w3-button "> For Agency</a>
      <a href="/register" class="w3-bar-item w3-button btn-primary"> Get Started</a>
      <a href="/login" class="w3-bar-item w3-button"> Log In</a>
</nav>

<!-- Header with full-height image -->
<header class="w3-display-container w3-center" style="border: 1px solid gray;"  id="home">

  <div class="row" >

  <div class="col-lg-6">
  <div class="w3-left w3-margin" style="padding-top:64px;">

  <br></br>
    <br></br>
        <h4 style="padding-top:64px; ">A revolutionary platform for independent talents</h4>
        <h1> <b>Better Work Together</b> </h1>
        <h4>Efficient solutions to outsource and integrate</h4>
        <br></br>
        <br></br>
        <div class="mb-3">
          <button  class="btn btn-primary">Get Started</button>

          <a href="#about">Learn More</a>
        </div>

        </div>

   </div>



   <div class="col-lg-6">
   <div class="w3-right">
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_jn6admcl.json" background="transparent"  speed="1"  style="width: 1000px; height: 1000px;" loop autoplay></lottie-player>
</div>

   </div>

  </div>

</header>
<!-- About Section -->
<div class="w3-container" style="padding:128px 16px" id="about">

  <h3 class="w3-left">Reimagine freelancing</h3>

  <div class="w3-row-padding w3-center" style="margin-top:64px">
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_qx8ajuag.json" background="transparent"  speed="1"  style="width: 1000px; height: 1000px;" loop controls autoplay></lottie-player>
  </div>
</div>

<div class="w3-container " style="padding:128px 16px" id="about">

  <h3 class="w3-right">Reimagine flexibility with efficiency</h3>

  <div class="w3-row-padding w3-right" style="margin-top:64px">
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_08po4sme.json" background="transparent"  speed="1"  style="width: 1000px; height: 1000px;" loop autoplay></lottie-player>
  </div>
</div>

<div class="w3-container" style="padding:128px 16px" id="about">

  <h3 class="w3-left">Reimagine talent management</h3>

  <div class="w3-row-padding w3-center" style="margin-top:64px">
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_dmwmtttc.json" background="transparent"  speed="1"  style="width: 1000px; height: 1000px;" loop autoplay></lottie-player>
  </div>
</div>


<div class="w3-center w3-paddin-64">
    <h3>Achieve more with Klabo today</h3>
    <p><button type="button" class="w3-button">Sign Up</button></p>

    </div>




<!-- Footer -->
<footer class="w3-white  w3-center w3-padding-16">
  <div class="row">
  <div class="w3-section">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
  </div>
</div>
<div class="row">
    <p>@2022 Klabo Technologies Ltd. All rights reserved | Terms of use |  Privacy Policy |  Contact Us</p>
</div>

</footer>

<script>
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
</script>

</body>
</html>
