
let moveBtns = document.getElementById("moveBtns");
let startBtn = document.getElementById("startBtn");
let snakeImg = document.getElementById("snakeImg");
let blockMainDiv = document.getElementById("blockMainDiv");
let i;

function startGame() {
    startBtn.style.opacity = 0;
    setTimeout("changeAxis()", 1000);
    moveBtns.style.opacity = 1;
    snakeImg.style.opacity = 0;
    setTimeout("removeIMG()", 700);
    setTimeout("buildBlocks()", 800);
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
    for (i=1; i<=100; i++) {
        await delay();
        if (i%2==0) {
            let content = '<div class="block" id="block' + i + '"value="' + i + '"></div>'
            blockMainDiv.innerHTML += content;
        } else {
            let content = '<div class="block2" id="block' + i + '"value="' + i + '"></div>'
            blockMainDiv.innerHTML += content;
        }
    }
}

function createDiv() {
    i = parseInt(i);
    
    
}