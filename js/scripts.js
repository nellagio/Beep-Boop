// front end

$(document).ready(function() {
  $("#spaceForm").submit(function(event) {
    // alert("errrrrrrrror");
    event.preventDefault();
    var numberInputResult = parseInt($("#numberInput").val());

    var listOfNumbers = [];

    for (var index = 0; index <= numberInputResult; index += 1) {
      if (index === 3) {
        listOfNumbers.push("I'm sorry, Dave. I can't do that.");
      }
      else if (index === 2) {
        listOfNumbers.push("Boop!");
      }
      else if (index === 1) {
        listOfNumbers.push("Beep!");
      }
      else {
        listOfNumbers.push(index);
      }
    }
     $("#numberInputResult").text(listOfNumbers);
  });
});

// business logic

function characterTest(number) {
  var stringTest = number.toString();
    contains
}

