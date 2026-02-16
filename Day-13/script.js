let a = 10;
let b = 5;

const name = "Kavya";
const course = "BTech";

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;

let message = name + " is studying " + course;

document.getElementById("output").innerHTML =
  "<p>Addition: " + addition + "</p>" +
  "<p>Subtraction: " + subtraction + "</p>" +
  "<p>Multiplication: " + multiplication + "</p>" +
  "<p>Division: " + division + "</p>" +
  "<p>Message: " + message + "</p>" +
  "<p>Type of a: " + typeof a + "</p>" +
  "<p>Type of name: " + typeof name + "</p>" +
  "<p>Type of addition: " + typeof addition + "</p>";
