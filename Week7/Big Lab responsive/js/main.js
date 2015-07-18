document.getElementsByTagName("li")[0].addEventListener("click",function(){
	if(!this.parentNode.getAttribute("class")){
		this.parentNode.setAttribute("class","pullDown"); 
	} else{
		this.parentNode.removeAttribute("class");
	}
});

$(document).ready(function(){
$(window).resize(function(){
 if ($(window).width() < 768) {
  $('#button').text("Click Here");
  // $('a.button').text("Stop");
 }
});
});