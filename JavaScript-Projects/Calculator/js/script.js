let display = "";
let current = "";
var values = [];

function valueC(num) {
    display += num;
    current += num;
    document.getElementById('display').placeholder = display;
    return 0;
}

function addOpp(opp) {
    display += opp;
    values.push(current);
    values.push("+");
    current = "";
    document.getElementById('display').placeholder = display;
    console.log(values);
}

function subOpp(opp) {
    display += opp;
    values.push(current);
    values.push("-");
    current = "";
    document.getElementById('display').placeholder = display;
    console.log(values);    
}

function mulOpp(opp) {
    display += opp;
    values.push(current);
    values.push("*");
    current = "";
    document.getElementById('display').placeholder = display;
    console.log(values);    
}

function divOpp(opp) {
    display += opp;
    values.push(current);
    values.push("/");
    current = "";
    document.getElementById('display').placeholder = display;
    console.log(values);    
}

function perOpp(opp) {
    display += opp;
    values.push(current);
    values.push("%");
    current = "";
    document.getElementById('display').placeholder = display;
    console.log(values);    
}

function valclear() {
    display = "";
    current = "";
    values = [];
    document.getElementById('display').placeholder = "0";
}

function del() {
    console.log(current);
    current = current.substring(0, current.length -1);
    display = display.substring(0, display.length -1);
    document.getElementById('display').placeholder = display;
}

function calc() {
    values.push(current);
    console.log(values);
    let leng = values.length -1;
    var c;
    let v = parseFloat(values[0]);
    let v2;
    for (let t=1; t<leng; t++) {
        if (t%2!=0) {
            switch (values[t]) {
                case '+':
                    v = v + parseFloat(values[t+1]);
                    break;
                case '-':
                    v = v - parseFloat(values[t+1]);
                    break;
                case '*':
                    v = v * parseFloat(values[t+1]);
                    break;
                case "/":
                    v = v / parseFloat(values[t+1]);
                    break;
                case "%":
                    v = ((v/parseFloat(values[t+1]))*100);
            }
        }
    }
    document.getElementById('display').placeholder = v;
    values = [];
    display = "";
    current = "";
}