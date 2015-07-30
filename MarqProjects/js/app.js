$(function(){
 var topbar = $('.topbar').height()+20;
 var height = $(window).innerHeight();
 var width = $(window).innerWidth();
  if(580 >= width){
    $('.fa-2x').removeClass('fa-2x').addClass('fa-lg');
  }
  else {
    $('.project').css({'min-height':height-topbar, 'height':'auto'});
  }
  
  $('.title').fitText(0.9,{ maxFontSize: '28px' });
  
  if ( window.location.hash ) {
    $(window.location.hash).click();
  }
  $('.social').tooltip();
});

if(screen && screen.width > 580) {
$(window).resize(function(){
 var height = $(window).innerHeight();
 var topbar = $('.topbar').height()+20;
      $('.project').css({'min-height':height-topbar});
});
}

$('body').on('click', '.project', function(){
  
  $(this).addClass('selected').siblings().addClass('deselected');
  window.location.hash = $(this).attr('id');
  $(this).siblings().children('.title').hide();
  $('.close').fadeIn();
  setTimeout(function(){
    $('.selected').children('.content').fadeIn();
  },500);
});

$('body').on('click', '.close', function(){
  $(this).fadeOut();
  window.location.hash = '';
  $('.selected').children('.content').fadeOut();
  setTimeout(function(){
  $('.selected').siblings().removeClass('deselected');
    $('.selected').removeClass('selected');
   
    setTimeout(function(){
     $('.title').fadeIn();
     $('.title').fitText(0.9,{ maxFontSize: '28px' });
    },500);
  },500);
});

// Contact form submission sends me an email
$(document).ready(function () {
    $("#join_list").click(function () {
        //first email list
        var emailAddress1 = $("#email_address1").val();
        var emailAddress2 = $("#email_address2").val();
        var firstName = $("#first_name").val();
        var isValid = true;

        //validate the first email address
        if (emailAddress1 == "") {
            $("#email_address1_error").text("this address is required");
            isValid = false;
        } else {
            $("#email_address1").next().text("");
        }
        //validate the second email address
        if (emailAddress2 == "") {
            $("#email_address2_error").text("this address is required");
            isValid = false;
        } else if (emailAddress1 !== emailAddress2) {
            $("#email_address2_error").text("the two emails have to be the same");
            isValid = false;
        } else {
            $("#email_address2_error").text("");
        }
        //validate the first Name
        if (firstName == "") {
            $("#first_name_error").text("name is required");
            isValid = false;
        } else {
            $("#first_name_error").text("");
        }
        //submit the form
        if (isValid) {
            $("#email_form").submit();
        }
    });
    //focus the cursor on the first email address
    $("#email_address1").focus();
});