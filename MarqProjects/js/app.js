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

// From http://stackoverflow.com/questions/271171/sending-emails-with-javascript
function sendMail() {
    var link = "mailto:marquinamarie@gmail.com"
             + "?cc=marquinamarie@gmail.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('formoid').value)
    ;

    window.location.href = link;
}

// Contact form pop up mailto on submit button
  // $("#formoid").submit(function(event) {

  //   event.preventDefault();

  //   var $form = $(this),
  //     url = $form.attr('action');

  //   var posting = $.post(url, {
  //     name: $('#input-name').val(),
  //     email: $('#input-email').val(),
  //     subject: $('#input-subject').val(),
  //     message: $('#input-message').val()
  //   });

  //   posting.done(function(data) {
  //     alert('success');
  //   });
  // });

// Contact form submission sends me an email
// $(document).ready(function () {
//     $("#join_list").click(function () {
//         //first email list
//         var emailAddress1 = $("#email_address1").val();
//         var userName = $("#first_name").val();
//         var isValid = true; //boolean to test against true/false in if/else loop below

//         //submit the form
//         if (isValid) {
//             $("#email_form").submit();
//         }
//     });
//     //focus the cursor on the first email address
//     $("#email_address1").focus();
// });