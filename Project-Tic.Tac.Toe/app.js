let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-game");
let newBtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".para");

// winning array 

let trueO=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
// reset game function

const resetGame=()=>{
    trueO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// function clicked block

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(trueO){
            box.innerText="O";
            trueO=false;
        }
        else{
            box.innerText="X";
            trueO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

// winner checkwinner finctions

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);

            }
        }
    }
}

// winner show function

const showWinner=(Winner)=>{
    msg.innerText=`Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// box enab;e or disbale function

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);