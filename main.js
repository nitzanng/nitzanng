"use strict"

//emojis
var mine = '💣';
var win = '😄';
var lost = '🥴';
var flag = '🏁';

var gBoard = [];
var gTimer = 0;
var gEndTime;
var gStartTime;
var gIntervalId;
var gDifficulty = 4;
var gItems;
var gCell = []

var level = {
    easy: { size: 4, mines: 2 },
    medium: { size: 5, mines: 12 },
    hard: { size: 8, mines: 30 }
};

function initGame() {
    gBoard = buildBoard(gDifficulty);
    calculateMinesNeighbors();
    renderBoard();
}

function buildBoard() {
    var board = [];
    for (var i = 0; i < gDifficulty; i++) {
        board[i] = [];
        for (var j = 0; j < gDifficulty; j++) {
            //board[i][j] = { value: '' };
            board[i][j] = {value: '', isShown: false, isMarked: false}
        }
    }
    board[1][2] = { value: mine };
    board[2][3] = { value: mine };

    calculateMinesNeighbors()
    return board;
}

function calculateMinesNeighbors() {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[i].length; j++) {
            var count = 0;
            if (gBoard[i][j].value === mine){
                continue;
            }
            if (j !== 0) {
                // בודקים משמאל
                if (gBoard[i][j - 1].value === mine) {
                console.log('left');
                    count++;
                }
            }
            if (i !== 0) {
                // בודקים למעלה
                if (gBoard[i-1][j].value === mine) {
                    console.log('up');
                    count++;
                }
            }
            if (j !== gBoard[i].length - 1) {
                // בודקים מימין
                if (gBoard[i][j+1].value === mine) {
                    console.log('right');
                    count++;
                }
            }
            if (i !== gBoard.length - 1) {
                // בודקים למטה
                if (gBoard[i+1][j].value === mine) {
                    console.log('down');
                    count++;
                }
            }
            
            if (j !== 0 && i !== 0) {
                //   בודקים אלכסון שמואל למעלה
                if (gBoard[i-1][j - 1].value === mine) {
                    console.log('leftup');
                    count++;
                }
            }
            if (i !== gBoard.length -1 && j !== 0) {
                // בודקים אלכסון שמואל למטה
                if (gBoard[i+1][j-1].value === mine) {
                    console.log('leftdown');
                    count++;
                }
            }
            if (j !== gBoard[i].length - 1 && i !== 0) {
                // בודקים אלכסון ימין למעלה
                if (gBoard[i-1][j+1].value === mine) {
                    console.log('rightup');
                    count++;
                }
            }
            if (i !== gBoard.length -1 && j !== gBoard[i].length - 1) {
                // בודקים אלכסון ימין למטה
                if (gBoard[i+1][j+1].value === mine) {
                    console.log('rightdown');
                    count++;
                }
            }

            gBoard[i][j].value = count;
        }
    }
}


function renderBoard() {
    var strHTML = '';
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < gBoard[0].length; j++) {
            strHTML += `<td onclick="cellClicked(${i},${j})">${gBoard[i][j].value}</td>`;
        }
        strHTML += '</tr>';
    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
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

function cellClicked(elCell, i, j) {
    console.log(elCell);
    elCell.isShown = true;
    gBoard[i][j].isShown = true;
    // gBoard[i-1][j-1].isShown = true;
    // gBoard[i-1][j-1].isShown = true;
    // gBoard[i-1][j-1].isShown = true;
    // gBoard[i-1][j-1].isShown = true;
    // gBoard[i-1][j-1].isShown = true;
    // gBoard[i-1][j-1].isShown = true;
    // gBoard[i-1][j-1].isShown = true;

    if (elCell === gNextNum) {
        elCell.classList.add('red')
        gNextNum++
    }
    if (gCell === 1) timer();   
    }




        // function setBomb(firstClickI,firstClickJ) {
        //     var BombCreatedCount = 0; 

        //     // while (BombCreatedCount < ) {

        //     }
        // }

        // //to stop timer
        // if (gNextNum === 17) {
        //     clearInterval(gIntervalId)

        // }