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
    // if (currentPlayer==1) {
    //   setTimeout("changePlayer2()", 8000);
    // } else {
    //   setTimeout("changePlayer1()", 8000);
    // }
    // setTimeout("stopClick()", 8500);
  }
}

// Player Move script code
var playerOneSum = 1;
var playerTwoSum = 1;



function movePlayer() {
  var arr = [["-35", "368"], ['55', '368'], ['145', '368'], ['240', '368'], ['330', '368'], ['422', '368'], ['513', '368'], ['604', '368'],['695', '368'], ['789', '368'], ['789', '298'], ['695', '298'], ['604', '298'], ['513', '298'], ['422', '298'], ['330', '298'], ['240', 298], [145, 298], [55, 298], ['-35', 298], ["-35", "230"], ['55', '230'], ['145', '230'], ['240', '230'], ['330', '230'], ['422', '230'], ['513', '230'], ['604', '230'],['695', '230'], ['789', '230'], ['789', '158'], ['695', '158'], ['604', '158'], ['513', '158'], ['422', '158'], ['330', '158'], ['240', 158], [145, 158], [55, 158], ['-35', 158], ["-35", "92"], ['55', '92'], ['145', '92'], ['240', '92'], ['330', '92'], ['422', '92'], ['513', '92'], ['604', '92'],['695', '92'], ['789', '92'], ['789', '22'], ['695', '22'], ['604', '22'], ['513', '22'], ['422', '22'], ['330', '22'], ['240', 22], [145, 22], [55, 22], ['-35', 22], ["-35", "-45"], ['55', '-45'], ['145', '-45'], ['240', '-45'], ['330', '-45'], ['422', '-45'], ['513', '-45'], ['604', '-45'],['695', '-45'], ['789', '-45'], ['789', '-113'], ['695', '-113'], ['604', '-113'], ['513', '-113'], ['422', '-113'], ['330', '-113'], ['240', -113], [145, -113], [55, -113], ['-35', -113], ["-35", "-183"], ['55', '-183'], ['145', '-183'], ['240', '-183'], ['330', '-183'], ['422', '-183'], ['513', '-183'], ['604', '-183'],['695', '-183'], ['789', '-183'], ['789', '-248'], ['695', '-248'], ['604', '-248'], ['513', '-248'], ['422', '-248'], ['330', '-248'], ['240', -248], [145, -248], [55, -248], ['-35', -248]];

  
  if (currentPlayer==1) {
    if (playerOneSum + randNo<=100){
      playerOneSum = playerOneSum + randNo;
      console.log("playerOne sum " + playerOneSum);
      if (currentPlayer==1) {
        setTimeout("changePlayer2()", 2000);
      } else {
        setTimeout("changePlayer1()", 2000);
      }
      setTimeout("stopClick()", 2500);
    if (playerOneSum!=100) {
      let temp = parseInt(playerOneSum) - 1;
      let moveX = arr[temp][0] + "px";
      let moveY = arr[temp][1] + "px";
      document.getElementById("playerDice1").style.marginLeft = moveX;
      document.getElementById("playerDice1").style.marginTop = moveY;
      if (currentPlayer==1) {
        setTimeout("changePlayer2()", 2000);
      } else {
        setTimeout("changePlayer1()", 2000);
      }
      setTimeout("stopClick()", 2500);
    } else {
      let moveX = arr[temp][0] + "px";
      let moveY = arr[temp][1] + "px";
      document.getElementById("playerDice1").style.marginLeft = moveX;
      document.getElementById("playerDice1").style.marginTop = moveY;
      setTimeout("playerOneWon()", 1000);
      if (currentPlayer==1) {
        setTimeout("changePlayer2()", 2000);
      } else {
        setTimeout("changePlayer1()", 2000);
      }
      setTimeout("stopClick()", 2500);
    }
    }
    
  } else {
    if (playerTwoSum + randNo<=100) {
      playerTwoSum = playerTwoSum + randNo;
      if (currentPlayer==1) {
        setTimeout("changePlayer2()", 2000);
      } else {
        setTimeout("changePlayer1()", 2000);
      }
      setTimeout("stopClick()", 2500);
      if (playerTwoSum!=100) {
        console.log("playerTwo sum" + playerTwoSum);
        let temp = parseInt(playerTwoSum) - 1;
        let moveX = arr[temp][0] + "px";
        let moveY = arr[temp][1] + "px";
        document.getElementById("playerDice2").style.marginLeft = moveX;
        document.getElementById("playerDice2").style.marginTop = moveY;
        if (currentPlayer==1) {
          setTimeout("changePlayer2()", 2000);
        } else {
          setTimeout("changePlayer1()", 2000);
        }
        setTimeout("stopClick()", 2500);
      } else {
        console.log("playerTwo sum" + playerTwoSum);
        let temp = parseInt(playerTwoSum) - 1;
        let moveX = arr[temp][0] + "px";
        let moveY = arr[temp][1] + "px";
        document.getElementById("playerDice2").style.marginLeft = moveX;
        document.getElementById("playerDice2").style.marginTop = moveY;
        setTimeout("playerTwoWon()", 1000);
        if (currentPlayer==1) {
          setTimeout("changePlayer2()", 2000);
        } else {
          setTimeout("changePlayer1()", 2000);
        }
        setTimeout("stopClick()", 2500);
    }
    }
  }
}

// End of player move script code

function playerOneWon() {
  alert("Player One Won");
}

function playerTwoWon() {
  alert("Player Two Won");
}


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

