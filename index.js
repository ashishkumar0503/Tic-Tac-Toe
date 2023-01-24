let turn = "X";



// Function to change the turn
const changeTurn = () => {

    return turn === "X" ? "O" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 9],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
        } else if((boxTexts[e[3]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[5]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[3]].innerText !== "")){
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
        } else if((boxTexts[e[6]].innerText === boxTexts[e[7]].innerText) && (boxTexts[e[9]].innerText === boxTexts[e[7]].innerText) && (boxTexts[e[6]].innerText !== "")){
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
        } else if((boxTexts[e[0]].innerText === boxTexts[e[3]].innerText) && (boxTexts[e[6]].innerText === boxTexts[e[3]].innerText) && (boxTexts[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
        } else if((boxTexts[e[1]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[7]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[1]].innerText !== "")){
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
        } else if((boxTexts[e[2]].innerText === boxTexts[e[5]].innerText) && (boxTexts[e[8]].innerText === boxTexts[e[5]].innerText) && (boxTexts[e[2]].innerText !== "")){
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
        } else if((boxTexts[e[0]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[8]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
        } else if((boxTexts[e[2]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[6]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[2]].innerText !== "")){
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
        } else {
            document.querySelector(".info").innerText = "It's a Tie";
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener("click", () => {
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
        }
    })
});

//Reset button
reset.addEventListener("click", () => {
    let boxText = document.querySelectorAll(".boxText");
    Array.from(boxText).forEach(element => {
        element.innerText = ""
    })
})


// var turn = "cross";

// var grid = [null, null, null, null, null, null, null, null, null];

// cells.forEach(box => {
//     box.addEventListener("click", () => {
//         if(turn === 'cross'){
//             box.style.background = "url('cross.jpg') no-repeat center"
//             turn = "circle";
//         } else {
//             box.style.background = "url('circle.jpg') no-repeat center"
//             turn = "cross";
//         }  
//     })
// });