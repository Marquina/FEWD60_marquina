///MIP 
$(document).ready(function() {
  $('#submit-btn').click(function(){ 
  event.preventDefault();  // bc normally goes to database. clicked anchors will not take the browser to a new URL.
    var city = $('#city-type').val(); //stores input in a value
    $('#city-input').val(''); //converts to string
       console.log(city);
    if (city == "NYC"){ // How do I do other options: ny, New york, etc?
      $('body').attr('class','nyc');
    } else if (city == "SF") {      
       $('body').attr('class','sf');
    } else if (city == "LA") {      
       $('body').attr('class','la');
    } else if (city == "AUS") {      
       $('body').attr('class','austin');
    } else if (city == "SYD") {      
       $('body').attr('class','sydney');
    }
  });
});


// take a string and convert to lowercase 
// inside condinional put in different conditions new york city, ny, etc
// if it is monday and not a holiday the ampersand pipes
