<!DOCTYPE html>
<html>
<title>Basket</title>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">







<style>
html,
body,
h1,
h2,
h3,
h4,
h5 {
    font-family: "Raleway", sans-serif
}

body,
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Karma", sans-serif
}

.w3-bar-block .w3-bar-item {
    padding: 20px
}

body {
    font-family: Arial;
    color: white;
}

.split {
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
}

.left {
    left: 0;
    background-color: #fff;
}

.right {
    right: 0;
    background-color: #fff;
}

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.centered img {
    width: 150px;
    border-radius: 50%;
}

body {
  margin: 0;
 
}

/* Include the padding and border in an element's total width and height */

.container-todo {
  border: 1px solid #ddd;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: auto;
  padding: 10px;
  background-color: #f1f1f1;
}
.tasklist{
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 800px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 10px;
  background-color: #f1f1f1;
}
/* Remove margins and padding from the list */
ol {
  margin: 30px;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  
  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ol li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ol li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ol li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ol li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */



</style>

<body class="w3-light-grey">

<!-- Top container -->
<div class="w3-bar w3-top w3-green w3-large" style="z-index:4">
  <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();"><i class="fa fa-bars"></i> Menu</button>
  <span class="w3-bar-item w3-left"> <a href="/index.php">Home</a></span>
  <span class="w3-bar-item w3-left"> <a href="/extras.php">Quick Not</a></span>
   <span class="w3-bar-item w3-left">   <a href="/pass.php">Materials</a></span>
   <span class="w3-bar-item w3-left">  <a href="/personal.php">Personal</a></span>
  <span class="w3-bar-item w3-left">  <a href="/career/">Work</a></span>
  <span class="w3-bar-item w3-right">  <a href="logout.php">Signout</a></span>
</div>

 







  