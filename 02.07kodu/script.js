
//kodutöö et kell tagurpidi töötaks alates 02.07.2020

var countDownDate = new Date("Jan 1, 2021 12:00:00").getTime();

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("timeRemaining").innerHTML = days + ":Päeva<br> " + hours + ":Tundi<br>"
    + minutes + ":Minutit<br>" + seconds + ":Sekundit<br> ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timeRemaining").innerHTML = "EXPIRED";
    }
  }, 1000);