///MIP 
$(document).ready(function() {
  $('#submit-btn').click(function(){ 
  event.preventDefault();  // bc normally goes to database. clicked anchors will not take the browser to a new URL.
    var city = $('#city-type').val(); //stores input in a value
    // var cityAdjust = #city-type.trim(); //Try to use .trim
    $('#city-input').val(''); //converts to string
       console.log(city);
    if (city == "NYC" || city =="ny"|| city =="nyc" || city == "New York" || city == "New York City" || city == "new york city"){ // How do I do other options: ny, New york, etc?
      $('body').attr('class','nyc');
    } else if (city == "SF" || city == "sf" || city =="san fran" || city == "San Fran" || city == "San Francisco") {      
       $('body').attr('class','sf');
    } else if (city == "LA" || city =="la" || city =="los angeles" || city == "Los Angeles" || city == "LAX") {      
       $('body').attr('class','la');
    } else if (city == "AUS" || city =="austin" || city == "Austin" || city == "Austin Texas" || city == "ATX") {      
       $('body').attr('class','austin');
    } else if (city == "SYD" || city =="sydney" || city == "Sydney") {      
       $('body').attr('class','sydney');
    }
  });
});

$('.container' ).each(function(){
    this.reset();
});


// take a string and convert to lowercase 
// inside condinional put in different conditions new york city, ny, etc
// || "nyc" || "New York" || "New York City" 
// if it is monday and not a holiday the ampersand pipes
