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
        case 7:
            day = "Sunday";
            break;
    }
    let date;
    date = stat.getDate();
    let month = stat.getMonth();
    console.log(month);
    switch (month) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break; 
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
    }
    let newDate = day + " " + date + " " + month;
    document.getElementById("date").innerHTML = newDate;
}

// End of clock 

// Start of Stopwatch code