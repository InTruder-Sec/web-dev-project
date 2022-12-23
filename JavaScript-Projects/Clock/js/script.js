
function getTime() {
    const stat = new Date();
    let s = "AM"
    let hrs = stat.getHours();
    if (hrs>12) {
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
    switch (q) {
        case '1':
            day = "Monday";
            break;
        case '2':
            day = "Tuesday";
            break;
        case '3':
            day = "Wednesday";
            break
        case '4':
            day = "Thrusday";
            break;
        case '5':
            day = "Friday";
            break;
        case '6':
            day = "Saturday";
            break;
        case '7':
            day = "Sunday";
            break;
    }
    console.log(day);
}