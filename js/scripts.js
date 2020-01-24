// front end

$(document).ready(function () {
  $("#user_number_input").submit(function (event) {
    alert("errrrrrrrror");
    event.preventDefault();
    var numberInputResult = parseInt($(numberInputResult).val());
  });
});

// business logic


// function to display all numbers from 0 to user input
function displayCount() {
  var listOfNumbers = [];
  var numberInput = $("#numberInput").val();
  var numberParse = $parseInt("#numberInput").val();
  parseInt.displayCount("numberInput")
  console.log(listOfNumbers)
  return listOfNumbers;
}



// Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

//     Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
//     Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
//     Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

// These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

//     The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
//     The number 21 should be replaced with "Boop".
//     The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

// A user should be able to enter a new number and see new results over and over again.

// Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "I'm Sorry...", 4, 5
// Specs

// Break the program down into simple, individual behaviors with input/output examples. Begin with the simplest possible behavior. List these behaviors (also known as "specs" or "specifications") in the project's README.md file. To get you started, this should be one of your first specs:

//     Spec: The program returns a range of numbers from 0 to the users inputted number
//         Input: "4"
//         Output: "0, 1, 2, 3, 4"

// Include similar specifications in your README for all behaviors your program demonstrates.
// Further Exploration

// If you finish meeting the objectives for this project, consider adding additional features, such as:

//     Add images, styling, and custom animations.
//     Implement different behaviors/effects/images for different inputs.
//     Include an option that returns the output in reversed order (beginning with the largest number).
//     Add a second form field that takes a name. For numbers that are divisible by 3, replace the name Dave in "I'm sorry, Dave. I'm afraid I can't do that" with the name provided by the user.

// Objectives

// <hr>

// Your code will be reviewed for the following objectives:

//     JavaScript business logic and user interface logic are separate.
//     Logic is broken down into "plain English" specs, listed in README.
//     Application implements a loop and works as expected.
//     The user can use the app repeatedly and see new results.
//     All previous objectives have been met.
//     Required functionality is in place by Friday deadline.
//     Project demonstrates understanding of this week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

// Previous Objectives

// For reference, here are the standards from previous weeks that your app needs to meet this week:

//     Project is in a presentable, portfolio-quality state.
//     Code is clean, well-refactored, and easy-to-read. This includes correct indentation, spacing, and including only necessary comments and debugging tools.
//     Variable names are descriptive and use lower camel case (e.g. myVariableExample).
//     Commits are made regularly with clear messages that finish the phrase "It will…".
//     Project README that includes, bare minimum:
//         author name
//         program name
//         detailed setup instructions
//         description
//         copyright and license information
