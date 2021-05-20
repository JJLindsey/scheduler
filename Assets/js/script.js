
//var interval = setInterval(hourUpdate, 15000);

  
  // Date object
var displayDate = new Date().toLocaleDateString(undefined,{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
    $(document).ready(function() {
      $("#currentDay").append(displayDate)
})

    

//event listener
$(".btn").on("click", function(event) {
    event.preventDefault();
    //console.log(event);
    
  $(document).ready(function() {
    $('.btn').on('click', function() {
      var toDoEntry = $(this).closest("div.input-group").find("input[class='form-control']").val();
      //alert(toDoEntry);
      localStorage.setItem("userEntry", JSON.stringify(toDoEntry))
      //console.log(toDoEntry);
      })
    })
});




//listen for save button clicks
//$("#save").on('click', function() {
//get nearby values -look into siblings and parents relationship in jQuery
//save in localStorage
//Show notifications that item was saved to localStorage by adding class .show
//Timeout to remove .show class after 5 seconds
