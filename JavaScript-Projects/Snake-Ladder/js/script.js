var cube = document.getElementById('cube');
var container = document.getElementById("container");
function startGame() {
    document.getElementById("startButton").style.opacity = "0";
    setTimeout(makeBtnDisable(), 1000);
    document.getElementById("namePlayer").style.opacity = "1";
    changePlayer1();
    document.getElementById("snakeLogo").style.opacity = "0";
    document.getElementById("ladderLogo").style.opacity = "0";
    document.getElementById("header").style.opacity = "0";
    container.style.opacity = "1";
    container.style.zIndex = "4";
    document.getElementById("chanceShow").style.opacity = '1';
}

function makeBtnDisable() {
    document.getElementById("startButton").style.zIndex = '-1'
}

var curruntRotate = 0;
var lastnum = 1;
var currentPlayer = 1;
var cubeRolling = 0;

let randNo;

cube.onclick = function() {
  randNo = generateRandom();
  if (cubeRolling == 0) {
    console.log(randNo);
    cubeRolling = 1;
    if (curruntRotate==0) {
      switch (randNo) {
        case 1:
          rotatingxUnit = 360;
          rotatingyUnit = 360;
          break;
        case 2:
          rotatingxUnit = 180;
          rotatingyUnit = 0;
          break;
        case 3:
          rotatingxUnit = 180;
          rotatingyUnit = 90;
          break;
        case 4:
          rotatingxUnit = 180;
          rotatingyUnit = 270;
          break;
        case 5:
          rotatingxUnit = 270;
          rotatingyUnit = 0;
          break;
        case 6:
          rotatingxUnit = 90;
          rotatingyUnit = 0;
          break;
      }
      rotatingxUnit = rotatingxUnit + 360;
      rotatingyUnit = rotatingyUnit + 360;
      cube.style.transform = 'rotateX(0deg) rotateY(0deg)'
      cube.style.transform = 'rotateX('+ rotatingxUnit +'deg) rotateY('+ rotatingyUnit +'deg)'
      setTimeout("movePlayer()", 5500);
      curruntRotate=1;
    } else {
      
      curruntRotate = 0;
      switch (randNo) {
        case 1:
          rotatingxUnit = 360;
          rotatingyUnit = 360;
          break;
        case 2:
          rotatingxUnit = 180;
          rotatingyUnit = 0;
          break;
        case 3:
          rotatingxUnit = 180;
          rotatingyUnit = 90;
          break;
        case 4:
          rotatingxUnit = 180;
          rotatingyUnit = 270;
          break;
        case 5:
          rotatingxUnit = 270;
          rotatingyUnit = 0;
          break;
        case 6:
          rotatingxUnit = 90;
          rotatingyUnit = 0;
          break;
      }

      rotatingxUnit = rotatingxUnit - 360;
      rotatingyUnit = rotatingyUnit - 360;
      cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
      cube.style.transform = 'rotateX('+ rotatingxUnit +'deg) rotateY('+ rotatingyUnit +'deg)';
      setTimeout("movePlayer()", 5500);
    }
    if (currentPlayer==1) {
      setTimeout("changePlayer2()", 8000);
    } else {
      setTimeout("changePlayer1()", 8000);
    }
    setTimeout("stopClick()", 8500);
  }
}

// Player Move script code
var playerOneSum = 1;
var playerTwoSum = 1;



function movePlayer() {
  var arr = [["-35", "368"], ['55', '368'], ['145', '368'], ['240', '368'], ['330', '368'], ['422', '368']];
  if (currentPlayer==1) {
    playerOneSum = playerOneSum + randNo;
    console.log("playerOne sum " + playerOneSum);
    playerOneSum = parseInt(playerOneSum) - 1;
    let moveX = arr[playerOneSum][0] + "px";
    let moveY = arr[playerOneSum][1] + "px";
    document.getElementById("playerDice1").style.marginLeft = moveX;
    document.getElementById("playerDice1").style.marginTop = moveY;
  } else {
    playerTwoSum = playerTwoSum + randNo;
    console.log("playerTwo sum" + playerTwoSum);
    playerTwoSum = parseInt(playerTwoSum) - 1;
    let moveX = arr[playerTwoSum][0] + "px";
    let moveY = arr[playerTwoSum][1] + "px";
    document.getElementById("playerDice2").style.marginLeft = moveX;
    document.getElementById("playerDice2").style.marginTop = moveY;
  }
  
  
}

// End of player move script code


function stopClick() {
  cubeRolling = 0;
}

function changePlayer2() {
  document.getElementById("player1").style.scale = "0.15";
  document.getElementById("player1").style.marginLeft ="-80px";
  document.getElementById("player2").style.scale = "0.2";
  document.getElementById("player2").style.marginLeft ="45px";
  document.getElementById("namePlayer").innerHTML = "Player-2";
  currentPlayer=2;

}

function changePlayer1() {
  document.getElementById("player1").style.scale = "0.2";
  document.getElementById("player1").style.marginLeft ="45px";
  document.getElementById("player2").style.scale = "0.15";
  document.getElementById("player2").style.marginLeft ="200px";
  document.getElementById("namePlayer").innerHTML = "Player-1";
  currentPlayer=1;
}


function generateRandom(min = 1, max = 7) {
  let difference = max - min;
  let rand = Math.random(); 
  rand = Math.floor( rand * difference);
  rand = rand + min;
  return rand;
}

