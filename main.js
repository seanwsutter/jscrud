console.log('javascript practice');
// in-line comment
/* multi-line
comment */


let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked"); // log

  formValidation();
});


function formValidation() { }

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure"); // log
  } else {
    console.log("successs"); // log
    msg.innerHTML = "";
  }
};
/*




-------- NOTES -----------
8 data types: undefined, null, boolean, string, symbol, bigint, number, and object

'variables' store and manipulate data using a "label" to POINT to the data rather than USING the data itself
like 'x' and 'y' in math

any of the 8 data types can be stores in a 'variable'
-------- NOTES -----------

// freecodecamp javascript start 

// Assign the contents of a to variable b.
var a; a=7; var b; b=a;
// Define a variable 'a' with 'var' and initialize it to a value of '9'.
var a=9; b=a; 
console.log(a); console.log(b) // display value of a and b in console
// Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.
var myFirstName="Sean"; var myLastName="Sutter"; 
// Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.
var a=5;
var b=10;
var c="I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
console.log(a)

var myName; // creates 'variable' myName (let vs var?)
myName = "Sean"; // assigns value 'Sean' to 'variable'
*/