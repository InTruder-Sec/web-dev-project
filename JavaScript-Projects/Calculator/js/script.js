var value = 0;
function add(a, b) {
    let c = a + b;
    return c;
}

function substract(a, b) {
    let c = a - b;
    return c;
} 

function multiply(a, b) {
    let c = a*b;
    return c;
}

function divide(a, b) {
    let c = a/b;
    return c;
}

function percentage(a, b) {
    let c = (a/b)*100;
    return c;
}

display = "";
initial = "";
function valueC(num) {
    initial += num;
    document.getElementById('display').placeholder = initial;
    return 0;
}

function addOpp() {
    if (value == 0) {
        value = initial;
        initial = "";
    } else {
        value = value + initial;
        alert(value);
        document.getElementById('display').placeholder = value;
    }
}
