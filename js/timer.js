
// 5 minutes
var startTime = 300000;
// 1 minute
// var startTime = 66000;


// Update the count down every 1 second
var x = setInterval(function() {
    startTime = startTime - 1000;
    
    // Find the distance between now an the count down date
    var distance = startTime;
    
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var formattedSeconds = ("0" + seconds).slice(-2);
    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML =
    minutes + ":" + formattedSeconds;
    
    if (minutes < 1) {
        $("#timer").css("color","red");
    }

<<<<<<< HEAD
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
=======
    if (seconds === 0) {
        $("#timer").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
        
        // alert("You lose, dundundun!");
    }
>>>>>>> master
}, 1000);