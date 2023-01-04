var cube = document.getElementById('cube');
var container = document.getElementById("container");
function startGame() {
    document.getElementById("startButton").style.opacity = "0";
    setTimeout(makeBtnDisable(), 1000);
    document.getElementById("player1Name").style.opacity = "1";
    changePlayer1();
    document.getElementById("snakeLogo").style.opacity = "0";
    document.getElementById("ladderLogo").style.opacity = "0";
    document.getElementById("header").style.opacity = "0";
    container.style.opacity = "1";
    container.style.zIndex = "4";
}

function makeBtnDisable() {
    document.getElementById("startButton").style.zIndex = '-1'
}

var curruntRotate = 0;
var lastnum = 1;
var currentPlayer = 1;

cube.onclick = function() {

  if (curruntRotate==0) {
    cube.style.transform = 'rotateX(360deg) rotateY(360deg)';
    curruntRotate=1;
  } else {
    cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
    curruntRotate = 0;
  }

  if (currentPlayer=1) {
    setTimeout("changePlayer2()", 1000);
    currentPlayer=2;
  } else {
    setTimeout("changePlayer1()", 1000);
    currentPlayer=1;
  }
}

function changePlayer2() {
  document.getElementById("player1").style.scale = "0.15";
  document.getElementById("player1").style.marginLeft ="-80px";
  document.getElementById("player2").style.scale = "0.2";
  document.getElementById("player2").style.marginLeft ="50px";
}

function changePlayer1() {
  document.getElementById("player1").style.scale = "0.2";
  document.getElementById("player1").style.marginLeft ="45px";
  document.getElementById("player2").style.scale = "0.15";
  document.getElementById("player2").style.marginLeft ="200px";
}


function generateRandom(min = 1, max = 7) {
  let difference = max - min;
  let rand = Math.random(); 
  rand = Math.floor( rand * difference);
  rand = rand + min;
  return rand;
}

