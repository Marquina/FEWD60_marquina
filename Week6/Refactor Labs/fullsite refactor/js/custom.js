// Put all your lovely jQuery / Javascript goodies right down here.

$(function() {
  $('#accordion').accordion({
    header: "h4",
    collapsible: true
  });
});


// This works, but it's old code

//$(document).ready(function() {
//   $("a.anchorLink").anchorAnimate()
// });

// jQuery.fn.anchorAnimate = function(settings) {

//   settings = jQuery.extend({
//     speed : 1100
//   }, settings); 
  
//   return this.each(function(){
//     var caller = this
//     $(caller).click(function (event) {  
//       event.preventDefault()
//       var locationHref = window.location.href
//       var elementClick = $(caller).attr("href")
      
//       var destination = $(elementClick).offset().top;
//       $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
//         window.location.hash = elementClick
//       });
//         return false;
//     })
//   })
// }


/********************************************************************************************************************
$(document).ready(function() {
  //accordian button do this on click
  $('.accordionButton').click(function() {
    //removing on class from the button
    $('.accordionButton').removeClass('on');
    //close any open sides
    $('.accordionContent').slideUp('normal');
    //is the next slide isn't open, open it
    if($(this).next().is(':hidden') == true) {
      //add the on class to the button
      $(this).addClass('on');
      //then open the slide
      $(this).next().slideDown('normal');
     } 
      
   });
    

  /*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
  
//   ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
//   $('.accordionButton').mouseover(function() {
//     $(this).addClass('over');
    
//   ON MOUSEOUT REMOVE THE OVER CLASS
//   }).mouseout(function() {
//     $(this).removeClass('over');                    
//   });
  
//   /*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
  
  
  
//   CLOSES ALL S ON PAGE LOAD
  
//   $('.accordionContent').hide();

// });
//********************************************************************************************************************
