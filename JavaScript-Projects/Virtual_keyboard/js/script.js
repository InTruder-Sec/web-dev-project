
var capsToggle = 0;
var shiftCase = 0;

function enterText(keyVal) {
    let initVal = document.getElementById("textEnter").value;
    if (keyVal == "del") {
        initVal = initVal.substring(0,initVal.length-1);
        document.getElementById("textEnter").value = initVal;
        if (shiftCase==1) {
            shiftCase = 0;
            capsToggle = 0;
            toggleCase();
        }
    } else if (keyVal == "enter") {
        initVal = initVal + '\n';
        document.getElementById("textEnter").value = initVal;
    } else if(keyVal == "shift") {
        if (shiftCase == 0) {
            capsToggle = 1;
            toggleCase();
            shiftCase = 1;
        } else {
            shiftCase = 0;
            capsToggle = 0;
            toggleCase();
        }
        
    } else if(keyVal == "caps") {
        if (capsToggle==0) {
            capsToggle = 1;
            document.getElementById("capsLight").style.opacity = 1;
            toggleCase();
        } else {
            capsToggle = 0;
            document.getElementById("capsLight").style.opacity = 0;
            toggleCase();
        }
    } else {
        document.getElementById("textEnter").value += keyVal;
        if (shiftCase==1) {
            shiftCase = 0;
            capsToggle = 0;
            toggleCase();
        }
    }
}

function toggleCase() {
    if (capsToggle==0) {
        document.getElementById("keyboardSmall").style.opacity = 1;
        document.getElementById("keyboardLarge").style.opacity = 0;
        document.getElementById("keyboardSmall").style.zIndex = 1;
        document.getElementById("keyboardLarge").style.zIndex = -1;
    } else {
        document.getElementById("keyboardSmall").style.opacity = 0;
        document.getElementById("keyboardLarge").style.opacity = 1;
        document.getElementById("keyboardSmall").style.zIndex = -1;
        document.getElementById("keyboardLarge").style.zIndex = 1;
    }

}