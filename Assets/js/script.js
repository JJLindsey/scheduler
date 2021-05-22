
//var interval = setInterval(hourUpdate, 15000);
//day JS
var displayDate = dayjs().format('dddd, MMMM.DD.YYYY');
  $(document).ready(function() {
    $("#currentDay").append(displayDate)
  });


//edit due dated in time block 
var inputForms = $("#user-task");
  for (let i = 0; i < inputForms.length; i++) {
    var currentHour = dayjs().format('H');
    var inputHour = $(inputForms[i]).attr('data-hour');
    //compare these 2 variables 
    //add class past, present, future
      if(currentHour === inputHour) {
        $(inputForms[i]).addClass("present");
    
      } else if(currentHour < inputHour) {
        $(inputForms[i]).addClass("past");
    
      } else if(currentHour > inputHour)
        $(inputForms[i]).addClass("future");
      //console.log(inputForms);
  };

//event listener with local storage
    //console.log(event);
  //save input to localstorage
$(document).ready(function() {
    $('.btn').on('click', function(event) {
      event.preventDefault();
      var toDoEntry = $(this).closest("div.input-group").find("input[class~='form-control']").val();
      console.log($(this).closest("div.input-group"));
      localStorage.setItem("userEntry", JSON.stringify(toDoEntry))
      //console.log(toDoEntry);
      })
})

//color code time blocks in past, present and future with Moment.js



//saved events persists even when page refreshed


//listen for save button clicks
//$("#save").on('click', function() {
//get nearby values -look into siblings and parents relationship in jQuery
//save in localStorage
//Show notifications that item was saved to localStorage by adding class .show
//Timeout to remove .show class after 5 seconds
