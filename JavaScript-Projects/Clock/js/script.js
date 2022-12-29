// Start of clock code

function getTime() {
    const stat = new Date();
    let s = "AM"
    let hrs = stat.getHours();
    if (hrs>=12) {
        hrs = hrs - 12;
        if (hrs < 10) {
            hrs = "0" + hrs;
        }
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
            month = "September";
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

let sec = 0;
let min = 0;
let hrs = 0;
let newSec = 0;
let newMin = 0;
let newHrs = 0;


function timeIncrease() {
    if (sec<10) {
        newSec = "0" + sec;
    } else {
        newSec = sec;
    }
    if (min<10) {
        newMin = "0" + min;
    } else {
        newMin = min;
    }
    if (hrs<10) {
        newHrs = "0" + hrs;
    } else {
        newHrs = hrs;
    }
    swformat = newHrs + " : " + newMin + " : " + newSec;
    document.getElementById("stoptime").innerText = swformat;
    if (sec<59) {
        sec = sec + 1;
    } else {
        if (min<59) {
            min = min + 1;
            sec = 0;
        } else {
            hrs = hrs + 1;
            min = 0;
            sec = 0;
        }
    }
    
}

function swStart() {
    if (sec==0 && min==0 && hrs==0) {
        intervalId = setInterval('timeIncrease()', 1000);
        document.getElementById("stopSVG").style.opacity = 1;
        document.getElementById("playSvg").style.opacity = 0;
    } else {
        clearInterval(intervalId);
        document.getElementById("stopSVG").style.opacity = 0;
        document.getElementById("playSvg").style.opacity = 1;
        sec = 0;
        min = 0;
        hrs = 0;
    }
}


// End of Stopwatch code

//Start of Timer code

document.getElementById("hrsInput").value = "00";
document.getElementById("minInput").value = "00";
document.getElementById("secInput").value = "00";


function hrsIncrease() {
    let val = document.getElementById("hrsInput").value;
    if (val=="") {
        val = parseInt("1");
    } else {
        val = parseInt(val) + 1;
    }
    if (val<10) {
        val = "0" + val;
    }
    document.getElementById("hrsInput").value = val;
}

function hrsDecrease() {
    let val = document.getElementById("hrsInput").value;
    
    if (val>0) {
        val = val - 1;
    }
    if (val<10) {
        val = "0" + val;
    }
    document.getElementById("hrsInput").value = val;
}

function minIncrease() {
    let minVal = document.getElementById("minInput").value;
    if (parseInt(minVal)<59) {
        minVal = parseInt(minVal) + 1;
    } else {
        minVal = "00";
    }

    if (minVal<10) {
        minVal = "0" + minVal;
    }

    document.getElementById("minInput").value = minVal;
}

function minDecrease() {
    let minVal = document.getElementById("minInput").value;
    
    if (minVal>0) {
        minVal = minVal - 1;
    } else {
        minVal = 59;
    }
    if (minVal<10) {
        minVal = "0" + minVal;
    }
    document.getElementById("minInput").value = minVal;
}

function secIncrease() {
    let secVal = document.getElementById("secInput").value;
    if (parseInt(secVal)<59) {
        secVal = parseInt(secVal) + 1;
    } else {
        secVal = "00";
    }

    if (secVal<10) {
        secVal = "0" + secVal;
    }

    document.getElementById("secInput").value = secVal;
}

function secDecrease() {
    let secVal = document.getElementById("secInput").value;
    
    if (secVal>0) {
        secVal = secVal - 1;
    } else {
        secVal = 59;
    }
    if (secVal<10) {
        secVal = "0" + secVal;
    }
    document.getElementById("secInput").value = secVal;
}
let  newInter;
function tStart() {
    let nsecVal = document.getElementById("secInput").value;
    let nminVal = document.getElementById("minInput").value;
    let nhrsVal = document.getElementById("hrsInput").value;
    if (nsecVal == 0 && nminVal==0 && nhrsVal==0) {
        alert("Please Input valid time interval");
    } else {
        document.getElementById("changeButton").style.opacity = 0;
        document.getElementById("changeButton2").style.opacity = 0;
        document.getElementById("changeButton3").style.opacity = 0;
        document.getElementById("changeButton4").style.opacity = 0;
        document.getElementById("changeButton5").style.opacity = 0;
        document.getElementById("changeButton6").style.opacity = 0;
        document.getElementById("playSvg2").style.opacity = 1;
        document.getElementById("stopstart").disabled = true;
        newInter = setInterval("decreaseTime()", 1000);
    }
}

function decreaseTime() {
    let s = document.getElementById("secInput").value;
    let m = document.getElementById("minInput").value;
    let h = document.getElementById("hrsInput").value;
    
    if (h==0 && m==0 && s==0) {
        alert("Time Up")
        clearInterval(newInter);
        document.getElementById("changeButton").style.opacity = 1;
        document.getElementById("changeButton2").style.opacity = 1;
        document.getElementById("changeButton3").style.opacity = 1;
        document.getElementById("changeButton4").style.opacity = 1;
        document.getElementById("changeButton5").style.opacity = 1;
        document.getElementById("changeButton6").style.opacity = 1;
        document.getElementById("playSvg2").style.opacity = 1;
        document.getElementById("stopstart").disabled = false;
        
    } else {
        if (s==0) {
            s = 59;
            if (m==0) {
                m = 59;
                if (h!=0) {
                    h = h-1;
                }            
            } else {
                m = m -1;
            }
        } else {
            s = s - 1;
        }

        if (s<10) {
            s = "0" + s;
        }
        if (m<10) {
            m = "0" + m;
        }
        
        document.getElementById("secInput").value = s;
        document.getElementById("minInput").value = m;
        document.getElementById("hrsInput").value = h;
    }
}






//End of Timer code


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

// End of change pannel