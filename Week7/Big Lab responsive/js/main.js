document.getElementsByTagName("li")[0].addEventListener("click",function(){
	if(!this.parentNode.getAttribute("class")){
		this.parentNode.setAttribute("class","pullDown"); 
	};
	else{
		this.parentNode.removeAttribute("class");
	}
});

$(window).resize( function(){
  console.log('working');
 if (window.width < 768) {
  $('a.button').text("Click Here");
 } else {
  $('a.button').text("Stop");
 }
});