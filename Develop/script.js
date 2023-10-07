
$(function () {
 $(".saveBtn").on("click", function () {
  var timeBlockId = $(this).closest(".time-block").attr("id"); // Finds closest ancestor with timeblock and gets ID
  var userInput = $(this).siblings("textarea").val(); // Gets user input from textarea when clicked
  localStorage.setItem(timeBlockId, userInput); // Saves user input in local storage
 });

  var currentHour = dayjs().format("H"); // Get current hour in 24-hour format

  $(".time-block").each(function () {
  var blockHour = parseInt($(this).attr("id").split("-")[1]); // Extract hour from the ID
  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour == currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }


  // Retrieve and populate saved user data
  var timeBlockId = $(this).attr("id");
  var savedUserInput = localStorage.getItem(timeBlockId);

  if (savedUserInput !== null) {
    $(this).find("textarea").val(savedUserInput);
  }
});




  var currentDay =dayjs().format("dddd, MMMM D HH:mm") // Displays current time in order from [Day Month, Weekday Time(Military)]
  $("#currentDay").text(currentDay); 
});


