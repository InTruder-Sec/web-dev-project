function displayWindow(v) {
    if (v==1) {
        document.getElementById("window").style.zIndex = "1";
        setTimeout("changeOpacity()", 100);
        document.getElementById("wrapper").style.opacity = "0.5";
        document.getElementById("addNote").value = "0";
        document.getElementById("addNote").style.rotate = "45deg";
    } else {
        document.getElementById("window").style.opacity = '0';
        document.getElementById("window").style.zIndex = "-1";
        document.getElementById("wrapper").style.opacity = "1";
        document.getElementById("addNote").value = "1";
        document.getElementById("addNote").style.rotate = "0deg";
    }
}

function changeOpacity() {
    document.getElementById("window").style.opacity = '1';
}