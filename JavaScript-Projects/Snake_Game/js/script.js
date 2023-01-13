
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
                document.getElementById(ltail).style.backgroundColor = "#2DCDDF";
                document.getElementById(ltail).style.borderRadius = "0px";
                document.getElementById(ltail).style.height = "40px";
                document.getElementById(ltail).style.width = "40px";
                document.getElementById(ltail).style.marginTop = "0px";
                document.getElementById(ltail).style.marginLeft = "0px";
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
            alert("Game Over");
        }
        
    } else if(moveDown == true) {
        checkWall();
        checkSnake();
        if (wallBurst == false && snakeBurst==false) {
            head = head + 10;
            arr.push(head);
            ltail = "sBlock" + newRandom;
            if (head==newRandom) {
                document.getElementById(ltail).style.backgroundColor = "#2DCDDF";
                document.getElementById(ltail).style.borderRadius = "0px";
                document.getElementById(ltail).style.height = "40px";
                document.getElementById(ltail).style.width = "40px";
                document.getElementById(ltail).style.marginTop = "0px";
                document.getElementById(ltail).style.marginLeft = "0px";
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
            alert("Game Over");
        }
        
    } else if(moveLeft == true) {
        checkWall();
        checkSnake();
        if (wallBurst == false && snakeBurst==false) {
            head = head - 1;
            arr.push(head);
            ltail = "sBlock" + newRandom;
            if (head==newRandom) {
                document.getElementById(ltail).style.backgroundColor = "#2DCDDF";
                document.getElementById(ltail).style.borderRadius = "0px";
                document.getElementById(ltail).style.height = "40px";
                document.getElementById(ltail).style.width = "40px";
                document.getElementById(ltail).style.marginTop = "0px";
                document.getElementById(ltail).style.marginLeft = "0px";
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
            alert("Game Over");
        }
        
    } else {
        checkWall();
        checkSnake();
        if (wallBurst == false && snakeBurst==false) {
            head = head + 1;
            arr.push(head);
            ltail = "sBlock" + newRandom;
            if (head==newRandom) {
                document.getElementById(ltail).style.backgroundColor = "#2DCDDF";
                document.getElementById(ltail).style.borderRadius = "0px";
                document.getElementById(ltail).style.height = "40px";
                document.getElementById(ltail).style.width = "40px";
                document.getElementById(ltail).style.marginTop = "0px";
                document.getElementById(ltail).style.marginLeft = "0px";
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
            alert("Game Over");
        }
        
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
    document.getElementById(temp).style.backgroundColor = "green";
    document.getElementById(temp).style.borderRadius = "15px";
    document.getElementById(temp).style.height = "30px";
    document.getElementById(temp).style.marginTop = "5px";
    document.getElementById(temp).style.marginLeft = "5px";
    document.getElementById(temp).style.width = "30px";
    isFood = true;
}





