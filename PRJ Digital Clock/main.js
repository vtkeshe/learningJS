setInterval(function() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var period = "AM";

    if (hour >= 12) {
        period = "PM";
    
    } if (hour >12) {
          hour = hour -12;     
    } if (sec <10) {
        sec = "0" + sec;
    } if (min <10 ) {
        min = "o" + min;
    } 

    var el = document.getElementById("clock");
    el.textContent = hour + ":" + min + ":" + sec + ' ' + period;
}, 1000);





