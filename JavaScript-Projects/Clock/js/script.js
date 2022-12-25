// Start of clock code

function getTime() {
    const stat = new Date();
    let s = "AM"
    let hrs = stat.getHours();
    if (hrs>=12) {
        hrs = hrs - 12;
        hrs = "0" + hrs;
        s = "PM" 
    }
    let min = stat.getMinutes();
    if (min<10) {
        min = "0" + min;
    }
    let sec = stat.getSeconds();
    if (sec<10) {
        sec = "0" + sec;
    }
    let display = hrs + " : " + min + " : " + sec;
    document.getElementById("displayTime").innerHTML = display;
    document.getElementById("stat").innerHTML = s;
}

getTime();
getDate();
setInterval('getTime()', 1000 );

function getDate() {
    const stat = new Date();
    let q = stat.getDay();
    let day;
    console.log(q);
    switch (q) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break
        case 4:
            day = "Thrusday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 0:
            day = "Sunday";
            break;
    }
    let date;
    date = stat.getDate();
    let month = stat.getMonth();
    console.log(month);
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            mnth = "September";
            break; 
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    let newDate = day + " " + date + " " + month;
    document.getElementById("date").innerHTML = newDate;
}

// End of clock 

// Start of Stopwatch code

// End of Stopwatch code

// Start of change pannel

function changeClock() {
    document.getElementById("displayClock").style.backgroundColor = "rgb(134, 134, 134)";
    document.getElementById("displayStop").style.backgroundColor = "white";
    document.getElementById("displayTimer").style.backgroundColor = "white";
    document.getElementById("backgroundClock").style.opacity = '1';
    document.getElementById("backgroundTimer").style.opacity = '0';
    document.getElementById("backgroundStop").style.opacity = '0';
}

function changeStop() {
    document.getElementById("displayClock").style.backgroundColor = "white";
    document.getElementById("displayStop").style.backgroundColor = "rgb(134, 134, 134)";
    document.getElementById("displayTimer").style.backgroundColor = "white";
    document.getElementById("backgroundClock").style.opacity = '0';
    document.getElementById("backgroundTimer").style.opacity = '0';
    document.getElementById("backgroundStop").style.opacity = '1';
}

function changeTimer() {
    document.getElementById("displayClock").style.backgroundColor = "white";
    document.getElementById("displayStop").style.backgroundColor = "white";
    document.getElementById("displayTimer").style.backgroundColor = "rgb(134, 134, 134)";
    document.getElementById("backgroundClock").style.opacity = '0';
    document.getElementById("backgroundTimer").style.opacity = '1';
    document.getElementById("backgroundStop").style.opacity = '0';
}