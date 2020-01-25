// front end

$(document).ready(function() {
  $("#spaceForm").submit(function(event) {
    // alert("errrrrrrrror");
    event.preventDefault();
    var numberInputResult = parseInt($("#numberInput").val());
    $("#numberInputResult").text(numberInputResult);

    var listOfNumbers = [];



    for (var index = 0; index <= numberInputResult; index += 1) {
      listOfNumbers.push(index);
    }
     $("#numberInputResult").text(listOfNumbers);
      
  });
});

// business logic



