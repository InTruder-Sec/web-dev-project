
let moveBtns = document.getElementById("moveBtns");
let startBtn = document.getElementById("startBtn");
let snakeImg = document.getElementById("snakeImg");
let blockMainDiv = document.getElementById("blockMainDiv");
let i;
let t;
let moveUp = false;
let moveDown = false;
let moveRight = true;
let moveLeft = false;
let head = 24;
let tail = 21;
let arr = [21, 22, 23, 24];
let ltail;
let temp;
let wallBurst = false;
let snakeBurst = false;
let gameInterval;
let newRandom;
let foodPosition = false;
let isFood = false;
const restartBtn = document.getElementById("gameOver");
let currentScore = 0;
let highestScore = 0;

document.onkeydown = checkKey;




function startGame() {
    startBtn.style.opacity = 0;
    setTimeout("changeAxis()", 1000);
    moveBtns.style.opacity = 1;
    snakeImg.style.opacity = 0;
    setTimeout("removeIMG()", 700);
    setTimeout("buildBlocks()", 800);
    setTimeout("displaySnake()", 7500);
    
}

function changeAxis() {
    startBtn.style.zIndex = -1;
    moveBtns.style.zIndex = 1;
    console.log("Done");
}

function removeIMG() {
    snakeImg.style.display = "none";
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const buildBlocks = async () => {
    t = 0;
    for (i=1; i<=100; i++) {
        await delay(50);
        if (t===0) {
            if (i%2===0) {
                let content = '<div class="block" id="block' + i + '" value="' + i + '"><div class="snakeBlock" id="sBlock' + i + '"></div></div>'
                blockMainDiv.innerHTML += content;
            } else {
                let content = '<div class="block2" id="block' + i + '"value="' + i + '"><div class="snakeBlock" id="sBlock' + i + '"></div></div>'
                blockMainDiv.innerHTML += content;
            }
            if (i%10===0) {
                t = 1;
            }
        } else {
            if (i%2===0) {
                let content = '<div class="block2" id="block' + i + '" value="' + i + '"><div class="snakeBlock" id="sBlock' + i + '"></div></div>'
                blockMainDiv.innerHTML += content;
            } else {
                let content = '<div class="block" id="block' + i + '"value="' + i + '"><div class="snakeBlock" id="sBlock' + i + '"></div></div>'
                blockMainDiv.innerHTML += content;
            }
            if (i%10===0) {
                t = 0;
            }
        }
    } 
}


const displaySnake = async () => {
    gameInterval = setInterval("moveSnake()", 800);
}


const moveSnake = () => {
    if (isFood == false) {
        bringFood();
    }
    if (moveUp == true) {
        checkWall();
        checkSnake();
        if (wallBurst==false && snakeBurst==false) {
            head = head - 10;
            arr.push(head);
            ltail = "sBlock" + newRandom
            if (head==newRandom) {
                document.getElementById(ltail).style.backgroundColor = "#0a8d9c";
                document.getElementById(ltail).style.borderRadius = "0px";
                document.getElementById(ltail).style.height = "39px";
                document.getElementById(ltail).style.width = "39px";
                document.getElementById(ltail).style.marginTop = "0px";
                document.getElementById(ltail).style.marginLeft = "0px";
                currentScore = currentScore + 1;
                updateScore();
                isFood = false
            } else {
                tail = arr.shift();
                ltail = "sBlock" + tail;
                document.getElementById(ltail).style.opacity = 0;
            }
            arr.forEach((element) => {
                ltail = "sBlock" + element;
                document.getElementById(ltail).style.opacity = 1;
            })
        } else {
            clearInterval(gameInterval);
            checkHighest();
            restartBtn.style.opacity = 1;
        }
        
    } else if(moveDown == true) {
        checkWall();
        checkSnake();
        if (wallBurst == false && snakeBurst==false) {
            head = head + 10;
            arr.push(head);
            ltail = "sBlock" + newRandom;
            if (head==newRandom) {
                document.getElementById(ltail).style.backgroundColor = "#0a8d9c";
                document.getElementById(ltail).style.borderRadius = "0px";
                document.getElementById(ltail).style.height = "39px";
                document.getElementById(ltail).style.width = "39px";
                document.getElementById(ltail).style.marginTop = "0px";
                document.getElementById(ltail).style.marginLeft = "0px";
                currentScore = currentScore + 1;
                updateScore();
                isFood = false
            } else {
                tail = arr.shift();
                ltail = "sBlock" + tail;
                document.getElementById(ltail).style.opacity = 0;
            }
            arr.forEach((element) => {
                ltail = "sBlock" + element;
                document.getElementById(ltail).style.opacity = 1;
            })
        } else {
            clearInterval(gameInterval);
            checkHighest();
            restartBtn.style.opacity = 1;

        }
        
    } else if(moveLeft == true) {
        checkWall();
        checkSnake();
        if (wallBurst == false && snakeBurst==false) {
            head = head - 1;
            arr.push(head);
            ltail = "sBlock" + newRandom;
            if (head==newRandom) {
                document.getElementById(ltail).style.backgroundColor = "#0a8d9c";
                document.getElementById(ltail).style.borderRadius = "0px";
                document.getElementById(ltail).style.height = "39px";
                document.getElementById(ltail).style.width = "39px";
                document.getElementById(ltail).style.marginTop = "0px";
                document.getElementById(ltail).style.marginLeft = "0px";
                currentScore = currentScore + 1;
                updateScore();
                isFood = false
            } else {
                tail = arr.shift();
                ltail = "sBlock" + tail;
                document.getElementById(ltail).style.opacity = 0;
            }
            arr.forEach((element) => {
                ltail = "sBlock" + element;
                document.getElementById(ltail).style.opacity = 1;
            })
        } else {
            clearInterval(gameInterval);
            checkHighest();
            restartBtn.style.opacity = 1;

        }
        
    } else {
        checkWall();
        checkSnake();
        if (wallBurst == false && snakeBurst==false) {
            head = head + 1;
            arr.push(head);
            ltail = "sBlock" + newRandom;
            if (head==newRandom) {
                document.getElementById(ltail).style.backgroundColor = "#0a8d9c";
                document.getElementById(ltail).style.borderRadius = "0px";
                document.getElementById(ltail).style.height = "39px";
                document.getElementById(ltail).style.width = "39px";
                document.getElementById(ltail).style.marginTop = "0px";
                document.getElementById(ltail).style.marginLeft = "0px";
                currentScore = currentScore + 1;
                updateScore();
                isFood = false
            } else {
                tail = arr.shift();
                ltail = "sBlock" + tail;
                document.getElementById(ltail).style.opacity = 0;
            }
            arr.forEach((element) => {
                ltail = "sBlock" + element;
                document.getElementById(ltail).style.opacity = 1;
            })
        } else {
            clearInterval(gameInterval);
            checkHighest();
            restartBtn.style.opacity = 1;
            
        }
        
    }
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        changeUp();
    }
    else if (e.keyCode == '40') {
        changeDown();
    }
    else if (e.keyCode == '37') {
       changeLeft();
    }
    else if (e.keyCode == '39') {
       changeRight();
    }

}

const changeUp = () => {
    if (moveDown != true){
        moveUp = true;
        moveDown = false;
        moveLeft = false;
        moveRight = false;
    }
}

const changeLeft = () => {
    if (moveRight != true) {
        moveLeft = true;
        moveDown = false;
        moveRight = false;
        moveUp = false;
    }
}

const changeRight = () => {
    if (moveLeft != true) {
        moveLeft = false;
        moveDown = false;
        moveRight = true;
        moveUp = false;
    }
}

const changeDown = () => {
    if (moveUp != true) {
        moveLeft = false;
        moveDown = true;
        moveRight = false;
        moveUp = false;
    }
}

const checkWall = () => {
    head = parseInt(head);
    if (moveRight==true && head%10==0) {
        wallBurst = true;
    } else if(moveUp==true && head<=10) {
        wallBurst = true;
    } else if (moveDown==true && head>90) {
        wallBurst = true;
    } else if (moveLeft==true && head%10==1) {
        wallBurst = true;
    } else {
        wallBurst = false;
    }
}

const checkSnake = () => {
    if (moveRight==true) {
        temp = head + 1;
        if (arr.includes(temp)==true) {
            snakeBurst = true;
        } 
    } else if (moveLeft==true) {
        temp = head - 1;
        if (arr.includes(temp)==true) {
            snakeBurst = true;
        }
    } else if (moveUp==true) {
        temp = head - 10;
        if (arr.includes(temp)==true) {
            snakeBurst = true;
        }
    } else {
        temp = head + 10;
        if (arr.includes(temp)==true) {
            snakeBurst = true;
        }
    }
}

function generateRandom(min = 1, max = 101) {
    let difference = max - min;
    let rand = Math.random(); 
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}


const bringFood = () => {
    foodPosition = false;
    while (foodPosition==false) {
        newRandom  = generateRandom();
        if (arr.includes(newRandom)==false) {
            foodPosition = true
        }
    }
    temp = "sBlock" + newRandom;
    document.getElementById(temp).style.opacity = 1;
    document.getElementById(temp).style.backgroundColor = "#00ca4e";
    document.getElementById(temp).style.borderRadius = "15px";
    document.getElementById(temp).style.height = "30px";
    document.getElementById(temp).style.marginTop = "5px";
    document.getElementById(temp).style.marginLeft = "5px";
    document.getElementById(temp).style.width = "30px";
    isFood = true;
}

const restartGame = async () => {
    arr.forEach((element) => {
        
        ltail = "sBlock" + element;
        document.getElementById(ltail).style.opacity = 0;
    })
    arr = [21, 22, 23, 24];
    head = 24;
    tail = 21;
    isFood = false;
    ltail = "sBlock" + newRandom;
    document.getElementById(ltail).style.opacity = 0;
    document.getElementById(ltail).style.backgroundColor = "#0a8d9c";
    document.getElementById(ltail).style.borderRadius = "0px";
    document.getElementById(ltail).style.height = "39px";
    document.getElementById(ltail).style.width = "39px";
    document.getElementById(ltail).style.marginTop = "0px";
    document.getElementById(ltail).style.marginLeft = "0px";
    moveUp = false;
    moveDown = false;
    moveRight = true;
    moveLeft = false;
    snakeBurst = false;
    currentScore = 0;
    document.getElementById("scoreDisplay").innerHTML = "Current: "+ currentScore +" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Highest: " + highestScore;
    wallBurst = false
    restartBtn.style.opacity = 0;
    displaySnake();
}

const updateScore = () => {
    document.getElementById("scoreDisplay").innerHTML = "Current: "+ currentScore +" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Highest: " + highestScore;
}

const checkHighest = () => {
    if (currentScore>highestScore) {
        highestScore = currentScore;
        document.getElementById("scoreDisplay").innerHTML = "Current: "+ currentScore +" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Highest: " + highestScore;
    }
}


