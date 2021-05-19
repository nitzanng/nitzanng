"use strict"

//emojis
var mine = '💣';
var win = '😄';
var lost ='🥴';
var flag = '🏁';

var gBoard = [];
var gNextNum = 1
var gTimer = 0;
var gEndTime;
var gStartTime;
var gIntervalId;
var gDifficulty = 4;
var gItems;
var gCell = []

var level = {
    easy: {size: 4, mines: 2}
//     // medium: {size: 5, mines: 2}
//     // hard: {size: 6, mines: 2}
//     currLevel: {size: 4, mines: 2}
};

function initGame() {
    // gItems = crtNums(gDifficulty);
    gBoard = buildBoard(gDifficulty);
    renderBoard();

}

function buildBoard() {
    var board = [1, 2, 3,]
    for (var i = 0; i < gDifficulty; i++) {
        for (var j = 0; j < gDifficulty.length; j++) {
            board[i][j] = gCell;
        }
        // var mine = { i: 1, j: 2 };
        // var mine = { i: 1, j: 3 };
    } 
    return board;
}
function renderBoard() {
   
    var strHTML = '';
    for (var i = 0; i < gDifficulty; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < gDifficulty; j++) {
            strHTML += `<td onclick="cellClicked(this)">1</td>`;
        }
        strHTML += '</tr>';
    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
    
    console.log(elBoard);

}

// // Count mines around each cell and set the cell's minesAroundCount.
// function setMinesNegsCount(){
//     while (setMinesNegsCount) {
//         var i = getRandomInt(1, 3);
//         var j = getRandomInt(1, 2); 
//         var currCell = gBoard[i][j];
//     }
// }


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

    // function cellClicked(clickedNum, elCell) {
    //     console.log(clickedNum);
    //     if (clickedNum === gNextNum) {
    //         elCell.classList.add('red')
    //         gNextNum++
    //     }
    //     if (clickedNum === gCell) timer();
    // }

    

        // function setBomb(firstClickI,firstClickJ) {
        //     var BombCreatedCount = 0; 
        
        //     // while (BombCreatedCount < ) {

        //     }
        // }
    
        // //to stop timer
        // if (gNextNum === 17) {
        //     clearInterval(gIntervalId)
            
        // }