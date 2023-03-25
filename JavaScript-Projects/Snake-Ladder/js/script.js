var cube = document.getElementById("cube");
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
  document.getElementById("chanceShow").style.opacity = "1";
}

function makeBtnDisable() {
  document.getElementById("startButton").style.zIndex = "-1";
}

var curruntRotate = 0;
var lastnum = 1;
var currentPlayer = 1;
var cubeRolling = 0;

let randNo;

cube.onclick = function () {
  randNo = generateRandom();
  if (cubeRolling == 0) {
    console.log(randNo);
    cubeRolling = 1;
    if (curruntRotate == 0) {
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
      cube.style.transform = "rotateX(0deg) rotateY(0deg)";
      cube.style.transform =
        "rotateX(" + rotatingxUnit + "deg) rotateY(" + rotatingyUnit + "deg)";
      setTimeout("movePlayer()", 5500);
      curruntRotate = 1;
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
      cube.style.transform = "rotateX(0deg) rotateY(0deg)";
      cube.style.transform =
        "rotateX(" + rotatingxUnit + "deg) rotateY(" + rotatingyUnit + "deg)";
      setTimeout("movePlayer()", 5500);
    }
  }
};

// Player Move script code
var playerOneSum = 1;
var playerTwoSum = 1;

function movePlayer() {
  // player Coordinates
  var arr = [
    ["-130", "355"],
    ["-39", "355"],
    ["52", "355"],
    ["143", "355"],
    ["234", "355"],
    ["325", "355"],
    ["416", "355"],
    ["507", "355"],
    ["598", "355"],
    ["689", "355"],
    ["689", "285"],
    ["598", "285"],
    ["507", "285"],
    ["416", "285"],
    ["325", "285"],
    ["234", "285"],
    ["143", 285],
    [52, 285],
    [55, 285],
    ["-130", 285],
    ["-130", "215"],
    ["-39", "215"],
    ["52", "215"],
    ["143", "215"],
    ["234", "215"],
    ["325", "215"],
    ["416", "215"],
    ["507", "215"],
    ["598", "215"],
    ["689", "215"],
    ["689", "145"],
    ["598", "145"],
    ["507", "145"],
    ["416", "145"],
    ["325", "145"],
    ["234", "145"],
    ["143", 145],
    [52, 145],
    [55, 145],
    ["-130", 145],
    ["-130", "75"],
    ["-39", "75"],
    ["52", "75"],
    ["143", "75"],
    ["234", "75"],
    ["325", "75"],
    ["416", "75"],
    ["507", "75"],
    ["598", "75"],
    ["689", "75"],
    ["689", "10"],
    ["598", "10"],
    ["507", "10"],
    ["416", "10"],
    ["325", "10"],
    ["234", "10"],
    ["143", 10],
    [52, 10],
    [55, 10],
    ["-130", 10],
    ["-130", "-60"],
    ["-39", "-60"],
    ["52", "-60"],
    ["143", "-60"],
    ["234", "-60"],
    ["325", "-60"],
    ["416", "-60"],
    ["507", "-60"],
    ["598", "-60"],
    ["689", "-60"],
    ["689", "-127"],
    ["598", "-127"],
    ["507", "-127"],
    ["416", "-127"],
    ["325", "-127"],
    ["234", "-127"],
    ["143", -127],
    [52, -127],
    [55, -127],
    ["-130", -127],
    ["-130", "-199"],
    ["-39", "-199"],
    ["52", "-199"],
    ["143", "-199"],
    ["234", "-199"],
    ["325", "-199"],
    ["416", "-199"],
    ["507", "-199"],
    ["598", "-199"],
    ["689", "-199"],
    ["689", "-266"],
    ["598", "-266"],
    ["507", "-266"],
    ["416", "-266"],
    ["325", "-266"],
    ["234", "-266"],
    ["143", -266],
    [52, -266],
    [55, -266],
    ["-130", -266],
  ];

  // check chance
  if (currentPlayer == 1) {
    if (playerOneSum + randNo <= 100) {
      playerOneSum = playerOneSum + randNo;

      // Check if the total sum has a ladder or snake

      if (playerOneSum == 5) {
        playerOneSum = 15;
      }
      if (playerOneSum == 17) {
        playerOneSum = 38;
      }
      if (playerOneSum == 22) {
        playerOneSum = 4;
      }
      if (playerOneSum == 32) {
        playerOneSum = 14;
      }
      if (playerOneSum == 34) {
        playerOneSum = 69;
      }
      if (playerOneSum == 43) {
        playerOneSum = 64;
      }
      if (playerOneSum == 54) {
        playerOneSum = 74;
      }
      if (playerOneSum == 65) {
        playerOneSum = 25;
      }
      if (playerOneSum == 81) {
        playerOneSum = 62;
      }
      if (playerOneSum == 83) {
        playerOneSum = 99;
      }
      if (playerOneSum == 97) {
        playerOneSum = 87;
      }

      if (playerOneSum != 100) {
        let temp = parseInt(playerOneSum) - 1;
        let moveX = arr[temp][0] + "px";
        let moveY = arr[temp][1] + "px";
        document.getElementById("playerDice1").style.marginLeft = moveX;
        document.getElementById("playerDice1").style.marginTop = moveY;
        // playerone moved change chance
        if (randNo != 6) {
          if (currentPlayer == 1) {
            setTimeout("changePlayer2()", 2000);
          } else {
            setTimeout("changePlayer1()", 2000);
          }
        } else {
          if (currentPlayer == 1) {
            setTimeout("changePlayer1()", 2000);
          } else {
            setTimeout("changePlayer2()", 2000);
          }
        }
        setTimeout("stopClick()", 2500);
      } else {
        // playerone sum is 100.....Player one won
        let temp = parseInt(playerOneSum) - 1;
        let moveX = arr[temp][0] + "px";
        let moveY = arr[temp][1] + "px";
        document.getElementById("playerDice1").style.marginLeft = moveX;
        document.getElementById("playerDice1").style.marginTop = moveY;
        setTimeout("playerOneWon()", 2000);
      }
    } else {
      // player score are greater than zero change chance without moving
      if (randNo != 6) {
        if (currentPlayer == 1) {
          setTimeout("changePlayer2()", 2000);
        } else {
          setTimeout("changePlayer1()", 2000);
        }
      } else {
        if (currentPlayer == 1) {
          setTimeout("changePlayer1()", 2000);
        } else {
          setTimeout("changePlayer2()", 2000);
        }
      }
      setTimeout("stopClick()", 2500);
    }
  } else {
    if (playerTwoSum + randNo <= 100) {
      playerTwoSum = playerTwoSum + randNo;

      // Check if the sum has snake or ladder
      if (playerTwoSum == 5) {
        playerTwoSum = 15;
      }
      if (playerTwoSum == 17) {
        playerTwoSum = 38;
      }
      if (playerTwoSum == 22) {
        playerTwoSum = 4;
      }
      if (playerTwoSum == 32) {
        playerTwoSum = 14;
      }
      if (playerTwoSum == 34) {
        playerTwoSum = 69;
      }
      if (playerTwoSum == 43) {
        playerTwoSum = 64;
      }
      if (playerTwoSum == 54) {
        playerOneSum = 74;
      }
      if (playerTwoSum == 65) {
        playerTwoSum = 25;
      }
      if (playerTwoSum == 81) {
        playerTwoSum = 62;
      }
      if (playerTwoSum == 83) {
        playerTwoSum = 99;
      }
      if (playerTwoSum == 97) {
        playerTwoSum = 87;
      }

      if (playerTwoSum != 100) {
        let temp = parseInt(playerTwoSum) - 1;
        let moveX = arr[temp][0] + "px";
        let moveY = arr[temp][1] + "px";
        document.getElementById("playerDice2").style.marginLeft = moveX;
        document.getElementById("playerDice2").style.marginTop = moveY;
        if (randNo != 6) {
          if (currentPlayer == 1) {
            setTimeout("changePlayer2()", 2000);
          } else {
            setTimeout("changePlayer1()", 2000);
          }
        } else {
          if (currentPlayer == 1) {
            setTimeout("changePlayer1()", 2000);
          } else {
            setTimeout("changePlayer2()", 2000);
          }
        }
        setTimeout("stopClick()", 2500);
      } else {
        // Player two sum is equal to 100 player two won
        let temp = parseInt(playerTwoSum) - 1;
        let moveX = arr[temp][0] + "px";
        let moveY = arr[temp][1] + "px";
        document.getElementById("playerDice2").style.marginLeft = moveX;
        document.getElementById("playerDice2").style.marginTop = moveY;
        setTimeout("playerTwoWon()", 2000);
      }
    } else {
      // player two sum exceeds 100 change chance without moving
      if (randNo != 6) {
        if (currentPlayer == 1) {
          setTimeout("changePlayer2()", 2000);
        } else {
          setTimeout("changePlayer1()", 2000);
        }
      } else {
        if (currentPlayer == 1) {
          setTimeout("changePlayer1()", 2000);
        } else {
          setTimeout("changePlayer2()", 2000);
        }
      }
      setTimeout("stopClick()", 2000);
    }
  }
}

// End of player move script code

function playerOneWon() {
  document.getElementById("playerWonHeader").innerHTML = "Player One Won";
  document.getElementById("playerWon").style.opacity = 1;
}

function playerTwoWon() {
  document.getElementById("playerWonHeader").innerHTML = "Player Two Won";
  document.getElementById("playerWon").style.opacity = 1;
}

function stopClick() {
  cubeRolling = 0;
}

function changePlayer2() {
  document.getElementById("player1").style.scale = "0.15";
  document.getElementById("player1").style.marginLeft = "-80px";
  document.getElementById("player2").style.scale = "0.2";
  document.getElementById("player2").style.marginLeft = "45px";
  document.getElementById("namePlayer").innerHTML = "Player-2";
  currentPlayer = 2;
}

function changePlayer1() {
  document.getElementById("player1").style.scale = "0.2";
  document.getElementById("player1").style.marginLeft = "45px";
  document.getElementById("player2").style.scale = "0.15";
  document.getElementById("player2").style.marginLeft = "200px";
  document.getElementById("namePlayer").innerHTML = "Player-1";
  currentPlayer = 1;
}

function generateRandom(min = 1, max = 7) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
}

function restartGame() {
  location.reload();
}
