$(document).ready(
  function() {
    $('#button').click(
      function() {
        var toAdd = $('input[name=ListItem]').val();
        $('ol').append('<li>' + toAdd + '</li>');
      });


// Tried to reorder list with Jquery
    // $("input[name=ListItem]").keyup(function(event) {
    //   if (event.keyCode == 13) {
    //     $("#button").click();
    //   }
    // });

    $(document).on('dblclick', 'li', function() {
      $(this).toggleClass('strike').fadeOut('slow');
    });

    $('input').focus(function() {
      $(this).val('');
    });

    $('ol').sortable();

  }
);