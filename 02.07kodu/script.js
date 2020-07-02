console.log("fail");

//kodutöö et kell tagurpidi töötaks alates 02.07.2020

var year = 2020;
var month = 6;
var day = 20;
var hour = 12;
var minute = 00;
var second = 0;

var timeRemaining = document.getElementById("timeRemaining");

var date = new Date();
var yearsRemaining = year - date.getFullYear();
var secondsRemaining = second - date.getSeconds();
if (secondsRemaining < 0){
    secondsRemaining = secondsRemaining + 60;
    minutesRemaining -1;
}

timeRemaining.innerHTML = yearsRemaining + secondsRemaining;