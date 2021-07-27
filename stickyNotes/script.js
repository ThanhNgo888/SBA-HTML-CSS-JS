//getting accecss to container 2, container 3, checkIcon, x-icon
var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");

//creating variable
var i = 0;

//add event listener to the icons
xIcon.addEventListener("click", function(){
    typeNote();
})
checkIcon.addEventListener("click", function(){
    createNote();
})

//creating functions
function typeNote(){}
function createNote(){}
function margin(){
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return random_margin[Math.floor(Math.random) * random_margin.length];
}
function rotate(){}
function color(){}
