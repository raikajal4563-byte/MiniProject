let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ["yellow", "red", "blue", "green"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelup();
    }
});

function gameflash(btn) {//show white color
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {//show light green color
    btn.classList.add("userflash");

    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
    
}
 let max=0;
function checkAns(idx){
    // console.log("curr level: ",level);
    // let idx=level-1;
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
        console.log("same value");
    }
    //  if(level>max){
    //       max=level;
    //     }
    else{
        if(level>max){
          max=level;
        }
      
        h2.innerHTML=`Game Over! tour score was ${level}<br> Highest score: ${max}`

        document.querySelector("body").style.background="red";
        setTimeout(function (){
            document.querySelector("body").style.background="white";

        },1500);
        
    
        
        reset();
    }
    // let max=0;
    // function gameOver(){
    //     if(level>max){

    //     }
    //     h2.innerHTML=`Game Over! tour score was ${level}<br> Highest score: ${max}`

    // }
}
function btnPress(){
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor)
    checkAns(userSeq.length-1);
    
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
