
function enterText(keyVal) {
    let initVal = document.getElementById("textEnter").value;
    if (keyVal == "del") {
        initVal = initVal.substring(0,initVal.length-1);
        document.getElementById("textEnter").value = initVal;
    } else {
        document.getElementById("textEnter").value += keyVal
    }
}