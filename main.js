console.log('javascript practice');
// in-line comment
/* multi-line
comment */


let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
// targets all the ID selectors from the html

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation(); 
});
// added a 'submit event listener' for the form so that it can prevent the default behavior of app

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData(); // acceptData function works when clicking the submit button. 
    // For that, we will fire this function in the else statement of our formValidation function
  }
};
// added if else statement to function, prevents users from submitting blank input fields

let data = {};
// created object named data
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};
// created function named acceptData and will fire on successful submit
// Whatever data we get from the input fields, we will store them in an object. 
// using the function, we collect data from the inputs and store them in our object named data

/* javascript template literals */

// In order to post our input data on the right side,
// we need to create a div element and append it to the posts div. ????

let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  input.value = "";
};
// The backticks are template literals
// need 3 things: a parent div, the input itself, and the options div which carries the edit and delete icons. 
// in acceptData function, fire the createPost function 

/* capital l reeeee
let createPost = () => {
  posts.innerHTMl += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
 </div>
  `;
  input.value = "";
};
*/
/* Questions & Notes

lightbulb create named function? msg.innerHTML error?

let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
// targets all the ID selectors from the html

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

// added a 'submit event listener' for the form so that it can prevent the default behavior of app
let formValidation = () => {};
// created 'function'named formValidation
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
  }
// added if else statement to function, prevents users from submitting blank input fields








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