
let moveBtns = document.getElementById("moveBtns");
let startBtn = document.getElementById("startBtn");
let snakeImg = document.getElementById("snakeImg");

function startGame() {
    startBtn.style.opacity = 0;
    setTimeout("changeAxis()", 1000);
    moveBtns.style.opacity = 1;
    snakeImg.style.opacity = 0;
    buildBlocks();
}

function changeAxis() {
    startBtn.style.zIndex = -1;
    moveBtns.style.zIndex = 1;
    console.log("Done");
}

function buildBlocks() {
    console.log("Work in progress");
}