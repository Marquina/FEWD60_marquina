$(document).ready(function () {

  $("#weather_form").on('submit', function (e) {
    e.preventDefault();
    var city = $("#city-field").val();
    console.log("The city is " + city);
  
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + encodeURIComponent(city) + "&cnt=4&mode=json";

    console.log("The url is " + url);

    $.ajax({
     type: 'GET',
      url: url,
      dataType: 'jsonp',
      success: function(json) {
         console.log(json);
        
         $("#weatherForecast").text(JSON.stringify(json));
         $().append().html("<p>Test</p>");
        
      },
      error: function(e) {
         console.log(e.message);
      }
    });

  });

});