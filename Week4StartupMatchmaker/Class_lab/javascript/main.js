//sTART1st Try Javascript Mouseover Nav 
//document.getElementByClass("mouse-over-me").addEventListener("mouseover", function ()  {
//  alert("You put your mouse over the div");
//});
//END 1st Try Javascript Mouseover Nav 

//START 2nd Try Javascript Mouseover Nav 
/*function onColor(listElement) {
    listElement.style.background = "green";
}

function offColor(listElement) {
    listElement.style.background = "orange"; 
}*/
//END 2nd Try Javascript Mouseover Nav 


function mouseOver() {
    document.getElementById("demo").style.color = "red";
}

function mouseOut() {
    document.getElementById("demo").style.color = "black";
}

function myFunction() {
    document.getElementsByTagName("H1")[0].removeAttribute("class"); 
}