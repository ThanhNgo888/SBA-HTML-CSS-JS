//getting accecss to container 2, container 3, checkIcon, x-icon
var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");

//creating variable
var i = 0;
// ========================================================================
//add event listener to the icons
xIcon.addEventListener("click", function(){
    typeNote();
})
checkIcon.addEventListener("click", function(){
    createNote();
})
// ========================================================================
//creating functions
function typeNote(){}
function createNote(){}
// ========================================================================
function margin(){
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return random_margin[Math.floor(Math.random) * random_margin.length];
}
// ========================================================================
function rotate(){
    var random_rotate = ["rotate(3deg", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];
    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}
// ========================================================================
function color(){
    var random_color = ["#C2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];

    if(i > random_color.length - 1){
        i = 0;
    }
    return random_color[i++];
}
