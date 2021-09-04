// allows the whole document to load before using j query
$(document).ready(function(){
    // setting up date at top of page 
    var currentDay = $("#currentDay");
    // set up for current date
    var date = moment().format('MM-DD-YYYY');
    // put date onto the page 
    currentDay.text(date)


    // give each section a color based on what time of the day it is 
    var colorTimeChage = function (){
        // keeps track of the currnt time 
        var currentTime = moment().hours()
        
        if(currentTime > 9){
            $("#9am").addClass("past")
        } else if (currentTime === 9 ){
            $("#9am").addClass("present")
        } else {
            $("#9am").addClass("future")
        }
        
        if(currentTime > 10){
            $("#10am").addClass("past")
        } else if (currentTime === 10 ){
            $("#10am").addClass("present")
        } else {
            $("#10am").addClass("future")
        }
        if(currentTime > 11){
            $("#11am").addClass("past")
        } else if (currentTime === 11 ){
            $("#11am").addClass("present")
        } else {
            $("#11am").addClass("future")
        }
        
        if(currentTime > 12){
            $("#12pm").addClass("past")
        } else if (currentTime === 12 ){
            $("#12pm").addClass("present")
        } else {
            $("#12pm").addClass("future")
        }
        
        if(currentTime > 13){
            $("#1pm").addClass("past")
        } else if (currentTime === 13 ){
            $("#1pm").addClass("present")
        } else {
            $("#1pm").addClass("future")
        }
        
        if(currentTime > 14){
            $("#2pm").addClass("past")
        } else if (currentTime === 14 ){
            $("#2pm").addClass("present")
        } else {
            $("#2pm").addClass("future")
        }
        
        if(currentTime > 15){
            $("#3pm").addClass("past")
        } else if (currentTime === 15 ){
            $("#3pm").addClass("present")
        } else {
            $("#3pm").addClass("future")
        }
        
        if(currentTime > 16){
            $("#4pm").addClass("past")
        } else if (currentTime === 16 ){
            $("#4pm").addClass("present")
        } else {
            $("#4pm").addClass("future")
        }
        
        if(currentTime > 17){
            $("#5pm").addClass("past")
        } else if (currentTime === 17 ){
            $("#5pm").addClass("present")
        } else {
            $("#5pm").addClass("future")
        }
        
        console.log(currentTime)
    }
    colorTimeChage();
    
    
    // WHEN I click the save button for that time block
    // THEN the text for that event is saved in local storage
    $(".saveBtn").on("click", function(){
        
        // this will save it to a specific time slot 
        // grabs the id to save it 
        var timeSection = $(this).parent().attr("id");
        // connect to texta area to grab value
        var list = $(this).siblings(".list").val();
        
        // setting to our local storage
        localStorage.setItem(timeSection, list);
        console.log(timeSection, list);
    })

    // this post the saved tasks from the local storage
    $("#9am .list").val(localStorage.getItem("9am"));
    $("#10am .list").val(localStorage.getItem("10am"));
    $("#11am .list").val(localStorage.getItem("11am"));
    $("#12pm .list").val(localStorage.getItem("12pm"));
    $("#1pm .list").val(localStorage.getItem("1pm"));
    $("#2pm .list").val(localStorage.getItem("2pm"));
    $("#3pm .list").val(localStorage.getItem("3pm"));
    $("#4pm .list").val(localStorage.getItem("4pm"));
    $("#5pm .list").val(localStorage.getItem("5pm"));


    
    // clears all of the tasks
    $("#9").on("click", function(){
        localStorage.removeItem("9am")
        location.reload()
    })

    $("#10").on("click", function(){
        localStorage.removeItem("10am")
        location.reload()
    })

    $("#11").on("click", function(){
        localStorage.removeItem("11am")
        location.reload()
    })
        
    $("#12").on("click", function(){
        localStorage.removeItem("12pm")
        location.reload()
    })

    $("#1").on("click", function(){
        localStorage.removeItem("1pm")
        location.reload()
    })

    $("#2").on("click", function(){
        localStorage.removeItem("2pm")
        location.reload()
    })

    $("#3").on("click", function(){
        localStorage.removeItem("3pm")
        location.reload()
    })

    $("#4").on("click", function(){
        localStorage.removeItem("4pm")
        location.reload()
    })

    $("#5").on("click", function(){
        localStorage.removeItem("5pm")
        location.reload()
    })
  
})












