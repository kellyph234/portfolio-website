  alert("Hello, welcome to my creative corner!");

var text1 = "Hello, you found me :)";
var text2 = "Hello, spaces are also OK!";
var text3 = 'Single quotes are valid too.';

var numberInteger = 456;
var numberInteger2 = -345; // This is negative integer
var numberFloat = 50.25;

console.log (text1)

//2.3//

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
}   else {
    x.className = 'navtoggle';
}
