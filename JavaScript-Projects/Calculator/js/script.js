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

function calc() {
    values.push(current);
    console.log(values);
    let leng = values.length;
    var c;
    let v = 0;
    let v2;
    for (let t=0; t<leng; t++) {
        console.log(values[t]);
        if (t%2==0) {
            
            c = parseInt(values[t]);
        } else {
            switch (values[t]) {
                case '+':
                    console.log(c)
                    v += c;
                    break;
                case '-':
                    v = v - c;
                    break
            }
        }
    }
    document.getElementById('display').placeholder = "j";
}