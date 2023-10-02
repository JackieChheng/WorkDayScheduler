// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
 $(".saveBtn").on("click", function () {
  var timeBlockId = $(this).closest(".time-block").attr("id"); // Finds closest ancestor with timeblock and gets ID
  var userInput = $(this).siblings("textarea").val(); // Gets user input from textarea when clicked
  localStorage.setItem(timeBlockId, userInput); // Saves user input in local storage
 });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var currentDay =dayjs().format("dddd, MMMM D HH:mm") // Displays current time in order from [Day Month, Weekday Time(Military)]
  $("#currentDay").text(currentDay); 
})


