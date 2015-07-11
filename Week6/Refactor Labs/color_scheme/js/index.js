

// $('#grayButton').click(switchGray);
// $('#whiteButton').click(switchWhite);
// $('#blueButton').click(switchBlue);
// $('#yellowButton').click(switchYellow);

// function switchGray() {
//   $('body').attr('class', 'gray');
// }

// function switchWhite() {
//   $('body').attr('class', 'white');
// }

// function switchBlue() {
//   $('body').attr('class', 'blue');
// }

// function switchYellow() {
//   $('body').attr('class', 'yellow');
// }

/*this is a variable that is returned. We are saying 'jquery look for this*/
function switchThese() {
  var theme = $(this).attr('class');
  console.log($(this));
  $('body').attr('class', theme);
}

$(document).ready(function(){
   $('#switcher li').on('click', switchThese); //every line item, 'this' now becomes the line item
});