
var tempC = 25;

var tempF = tempC * 9 / 5 + 32;

var threshold = 70;

if (tempF < threshold) {
    document.body.setAttribute("style", "background-color: grey;");
    document.write(tempF);
} else {
    document.body.setAttribute("style", "background-color: yellow;");
    document.write(tempF);
}

//output is 77


// <script type="text/javascript">
//     function convertToC() {
//     var fTempVal = parseFloat(document.getElementById('fTemp').value);
//     var cTempVal = (fTempVal - 32) * (5/9);
//     document.getElementById('cTemp').value = cTempVal;
// }

//     function convertToF() {
//     var cTempVal = parseFloat(document.getElementById('cTemp').value);
//     var fTempVal = (cTempVal * (9/5)) + 32;
//     document.getElementById('fTemp').value = fTempVal;
// }

// </script>