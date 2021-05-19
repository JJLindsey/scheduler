
var interval = setInterval(hourUpdate, 15000);

// function hourUpdate() {
//     var currentHour = moment().hours();
// }

//$('.date').text(moment().format('dddd, MMMM Do'));

// get current date
var currentDate = new Date();


//items to localStorage
var saveTask = document.querySelector("#saveBtn");

var entry = JSON.parse(localStorage.setItem('usertask')) || [];

//define function 
function saveTask(){
    
}
//event listener
$("#saveBtn").on("click", function(event) {
    event.preventDefault();

    var toDoEntry = $(".form-control").val().trim();
    //console.log(event);

    //define 'entry' variabel earlier
    entry.push(todoEntry);

    //define saveTask function push it to entry
    saveTask(entry)
    
    //retreiving usertask entry from localstorage
    localStorage.getItem("usertask", JSON.stringify(entry));

    });
}
