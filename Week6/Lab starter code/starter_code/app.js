
// which location did the user choose
var city = ['NYC', 'LA', 'SF', 'ATX', 'SYD'];

// add values to the 'select' menu with for loop
 for (var i = 0; i < city.length; i++ ) {
    $('#city-type').append('<option>' + city[i] + '<option>');
 }

// update the background based on the dropdown input
     // $('#city-type').change(function(){
     //  console.log("Look I'm changing");
     //  var city = $('#city-type').val() //should consider changing the var to dropdown
     //   if (city == "NYC" || city =="ny"|| city =="nyc" || city == "New York" || city == "New York City" || city == "new york city"){ // How do I do other options: ny, New york, etc?
     //      $('body').attr('class','nyc');
     //    } else if (city == "SF" || city == "sf" || city =="san fran" || city == "San Fran" || city == "San Francisco") {      
     //       $('body').attr('class','sf');
     //    } else if (city == "LA" || city =="la" || city =="los angeles" || city == "Los Angeles" || city == "LAX") {      
     //       $('body').attr('class','la');
     //    } else if (city == "AUS" || city =="austin" || city == "Austin" || city == "Austin Texas" || city == "ATX") {      
     //       $('body').attr('class','austin');
     //    } else if (city == "SYD" || city =="sydney" || city == "Sydney") {      
     //       $('body').attr('class','sydney');
     //   }
     // });

     // use .on change - to track the change on something different on the page
     $('form').on('change', '#city-type', function(){
      console.log("Look I'm changing");
      var city = $('#city-type').val()
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

