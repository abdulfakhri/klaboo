</div>

</div>

<script>
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
</script>

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>
<script>
function mgtDropdown(){
  var x = document.getElementById('mgtDropdown');

  if(x.className.indexOf("w3-show")==-1){
    x.className += " w3-show";
  }else{
    x.className = x.className.replace(" w3-show", "");
  }
}

function mgtPersonal(){
  var x = document.getElementById('mgtPersonal');

  if(x.className.indexOf("w3-show")==-1){
    x.className += " w3-show";
  }else{
    x.className = x.className.replace(" w3-show", "");
  }
}

function careerDrop(){
  var x = document.getElementById('careerDrop');

  if(x.className.indexOf("w3-show")==-1){
    x.className += " w3-show";
  }else{
    x.className = x.className.replace(" w3-show", "");
  }
}

function dailyDrop(){
  var x = document.getElementById('dailyDrop');

  if(x.className.indexOf("w3-show")==-1){
    x.className += " w3-show";
  }else{
    x.className = x.className.replace(" w3-show", "");
  }
}

function resourcesDropdown(){
  var x = document.getElementById('resourcesDropdown');

  if(x.className.indexOf("w3-show")==-1){
    x.className += " w3-show";
  }else{
    x.className = x.className.replace(" w3-show", "");
  }
}
function extrasDropdown(){
  var x = document.getElementById('extrasDropdown');

  if(x.className.indexOf("w3-show")==-1){
    x.className += " w3-show";
  }else{
    x.className = x.className.replace(" w3-show", "");
  }
}


// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
</script>

</body>
</html>