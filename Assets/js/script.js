
// get the data from local storage on page load
var saveData = localStorage.getItem("userEntry");
var parseData = JSON.parse(saveData);
// select a textbox element using jQuery
var targetTextBox = $('form-control');
// change the value of the selected textbox to parseData
targetTextBox.val(parseData)

//day JS
var displayDate = dayjs().format('dddd, MMMM.DD.YYYY');
  $(document).ready(function() {
    $("#currentDay").append(displayDate)
  });


//edit due dated in time block 
var inputForms = $(".form-control");
  for (let i = 0; i < inputForms.length; i++) {
    var currentHour = parseInt(dayjs().format('H'));
    var inputHour = parseInt($(inputForms[i]).attr('data-hour'));
    //compare these 2 variables 
    //add class past, present, future
      if(currentHour > inputHour) {
        $(inputForms[i]).addClass("past");
    
      } else if(currentHour === inputHour) {
        $(inputForms[i]).addClass("present")
        $(inputForms[i]).removeClass("past")
        
    
      } else {
        $(inputForms[i]).addClass("future")
        $(inputForms[i]).removeClass("present")
        $(inputForms[i]).removeClass("past")
      //console.log(inputForms);
  };
};

//event listener with local storage

  //save input to localstorage
$(document).ready(function() {
    $('.btn').on('click', function(event) {
      event.preventDefault();
      var toDoEntry = $(this).closest("div.input-group").find("input[class~='form-control']").val();
      // get the data-hour value number
      var toDoHour = $(this).closest("div.input-group").find("input[class~='form-control']").attr('data-hour');
      console.log($(this).closest("div.input-group"));
      localStorage.setItem("userEntry", JSON.stringify(toDoEntry));
      //console.log(toDoEntry);
      })
})
