// front end

$(document).ready(function() {
  $("#spaceForm").submit(function(event) {
    alert("errrrrrrrror");
    event.preventDefault();
    var numberInputResult = parseInt($("#numberInput").val());

    var listOfNumbers = [];

    for (var index = 0; index <= numberInputResult; index += 1) {
      var numberString = index.toString();

      if (numberString.includes("3")) {
        listOfNumbers.push("I'm sorry, Dave. I can't do that.");
      }
      else if (numberString.includes("2")) {
        listOfNumbers.push("Boop!");
      }
      else if (numberString.includes("1")) {
        listOfNumbers.push("Beep!");
      }
      else {
        listOfNumbers.push(index);
      }
    }
     $("#numberInputResult").text(listOfNumbers);
  });
});