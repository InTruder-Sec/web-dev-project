let input = document.getElementById("inputBox");
let val;
const qrdiv = document.getElementById("qrcode")

input.value = "";
new QRCode(document.getElementById("qrcode"), "Enter your Text");

const wait = () => {
    setTimeout("changeQR()", 100)
}

const changeQR = () => {
    val = input.value;
    if (val == "") {
        qrdiv.innerHTML = "";
        new QRCode(document.getElementById("qrcode"), "Enter your Text"); 
    } else {
        qrdiv.innerHTML = "";
        new QRCode(document.getElementById("qrcode"), val); 
    }
       
}


