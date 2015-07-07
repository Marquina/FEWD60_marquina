<<<<<<< HEAD
document.getElementById("mouse-over-me").addEventListener("mouseover", function ()  {
  alert("You put your mouse over the div");
});
=======
//START1st Try Javascript Mouseover Nav 
//document.getElementByClass("mouse-over-me").addEventListener("mouseover", function ()  {
//  alert("You put your mouse over the div");
//});
//END 1st Try Javascript Mouseover Nav 

function onColor(listElement) {
    listElement.style.background = "blue";
}

function offColor(listElement) {
    listElement.style.background = "orange"; 
}
//END 2nd Try Javascript Mouseover Nav 


function changeColor() {
  document.getElementById("button").setAttribute("class","blue-steel");
}

function correctColor() {
  document.getElementById("button").removeAttribute("class","blue-steel");  
}




// START 3rd Try
//function mouseOver() {
//     document.getElementById("blue-steel").style.color = "red";
//  }

// function mouseOut() {
//     document.getElementById("demo").style.color = "black";
// }

// function myFunction() {
//     document.getElementsByTagName("h1")[0].removeAttribute("class"); 
// }
>>>>>>> origin/master
