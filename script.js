
window.addEventListener('load', () => {
    return master();
    // return results();
})


let gameBoard = ['', '', '', '', '', '', '', '', ''];
let players = ['X', 'O'];

const master = () => {
    
    let myIndex = 1;
    playername.innerHTML = players[0];

    function fun1() {
        playername.innerHTML = players[myIndex];
        myIndex = (myIndex+1)%(players.length);
        console.log('clicked1');
        square1.removeEventListener('click', fun1);
        gameBoard[0] = players[myIndex]
        console.log(gameBoard)
        square1.innerHTML = gameBoard [0];
    }
        document.getElementById('square1').addEventListener('click', fun1)
        
    function fun2() {
        playername.innerHTML = players[myIndex];
        myIndex = (myIndex+1)%(players.length);
        console.log('clicked2');
        square2.removeEventListener('click', fun2);
        gameBoard[1] = players[myIndex]
        console.log(gameBoard);
        square2.innerHTML = gameBoard [1];
        results.checkResults.call();
    }
        document.getElementById('square2').addEventListener('click', fun2)

    function fun3() {
        playername.innerHTML = players[myIndex];
        myIndex = (myIndex+1)%(players.length);
        console.log('clicked3');
        square3.removeEventListener('click', fun3);
        gameBoard[2] = players[myIndex]
        console.log(gameBoard)
        square3.innerHTML = gameBoard [2];
        results.checkResults.call();
    }
        document.getElementById('square3').addEventListener('click', fun3)
        
    function fun4() {
        playername.innerHTML = players[myIndex];
        myIndex = (myIndex+1)%(players.length);
        console.log('clicked4');
        square4.removeEventListener('click', fun4);
        gameBoard[3] = players[myIndex]
        console.log(gameBoard)
        square4.innerHTML = gameBoard [3];
        results.checkResults.call();
    }
        document.getElementById('square4').addEventListener('click', fun4)

    function fun5() {
        playername.innerHTML = players[myIndex];
        myIndex = (myIndex+1)%(players.length);
        console.log('clicked5');
        square5.removeEventListener('click', fun5);
        gameBoard[4] = players[myIndex]
        console.log(gameBoard)
        square5.innerHTML = gameBoard [4];
        results.checkResults.call();
    }
        document.getElementById('square5').addEventListener('click', fun5)
        
    function fun6() {
        playername.innerHTML = players[myIndex];
        myIndex = (myIndex+1)%(players.length);
        console.log('clicked6');
        square6.removeEventListener('click', fun6);
        gameBoard[5] = players[myIndex]
        console.log(gameBoard)
        square6.innerHTML = gameBoard [5];
        results.checkResults.call();
    }
        document.getElementById('square6').addEventListener('click', fun6)
    
    function fun7() {
        playername.innerHTML = players[myIndex];
        myIndex = (myIndex+1)%(players.length);
        console.log('clicked7');
        square7.removeEventListener('click', fun7);
        gameBoard[6] = players[myIndex]
        console.log(gameBoard)
        square7.innerHTML = gameBoard [6];
        results.checkResults.call();
    }
        document.getElementById('square7').addEventListener('click', fun7)
        
    function fun8() {
        playername.innerHTML = players[myIndex];
        myIndex = (myIndex+1)%(players.length);
        console.log('clicked8');
        square8.removeEventListener('click', fun8);
        gameBoard[7] = players[myIndex]
        console.log(gameBoard)
        square8.innerHTML = gameBoard [7];
        results.checkResults.call();
    }
        document.getElementById('square8').addEventListener('click', fun8)

    function fun9() {
        playername.innerHTML = players[myIndex];
        myIndex = (myIndex+1)%(players.length);
        console.log('clicked9');
        square9.removeEventListener('click', fun9);
        gameBoard[8] = players[myIndex]
        console.log(gameBoard)
        square9.innerHTML = gameBoard [8];
        results.checkResults.call();
    }
        document.getElementById('square9').addEventListener('click', fun9)
}

const results = {
    checkResults: function() {
        if 
        (((gameBoard[0] == players[0]) && (gameBoard[1] == players[0]) && (gameBoard[2] == players[0])) || 
        ((gameBoard[3] == players[0]) && (gameBoard[4] == players[0]) && (gameBoard[5] == players[0])) ||
        ((gameBoard[6] == players[0]) && (gameBoard[7] == players[0]) && (gameBoard[8] == players[0])) ||
        ((gameBoard[0] == players[0]) && (gameBoard[3] == players[0]) && (gameBoard[6] == players[0])) ||
        ((gameBoard[1] == players[0]) && (gameBoard[4] == players[0]) && (gameBoard[7] == players[0])) ||
        ((gameBoard[2] == players[0]) && (gameBoard[5] == players[0]) && (gameBoard[8] == players[0])) ||
        ((gameBoard[0] == players[0]) && (gameBoard[4] == players[0]) && (gameBoard[8] == players[0])) ||
        ((gameBoard[2] == players[0]) && (gameBoard[4] == players[0]) && (gameBoard[6] == players[0]))) {
            document.getElementById('winner').innerHTML = "Player X Wins!";
            // results.stopGame.call();
            document.getElementById('overlay').style.display = "grid";
        } else if
        (((gameBoard[0] == players[1]) && (gameBoard[1] == players[1]) && (gameBoard[2] == players[1])) || 
        ((gameBoard[3] == players[1]) && (gameBoard[4] == players[1]) && (gameBoard[5] == players[1])) ||
        ((gameBoard[6] == players[1]) && (gameBoard[7] == players[1]) && (gameBoard[8] == players[1])) ||
        ((gameBoard[0] == players[1]) && (gameBoard[3] == players[1]) && (gameBoard[6] == players[1])) ||
        ((gameBoard[1] == players[1]) && (gameBoard[4] == players[1]) && (gameBoard[7] == players[1])) ||
        ((gameBoard[2] == players[1]) && (gameBoard[5] == players[1]) && (gameBoard[8] == players[1])) ||
        ((gameBoard[0] == players[1]) && (gameBoard[4] == players[1]) && (gameBoard[8] == players[1])) ||
        ((gameBoard[2] == players[1]) && (gameBoard[4] == players[1]) && (gameBoard[6] == players[1]))) {
            document.getElementById('winner').innerHTML = "Player O Wins!";
            document.getElementById('overlay').style.display = "grid";
        } else if 
        ((gameBoard[0] != '') && (gameBoard[1] != '') && (gameBoard[2] != '') &&
        (gameBoard[3] != '') && (gameBoard[4] != '') && (gameBoard[5] != '') &&
        (gameBoard[6] != '') && (gameBoard[7] != '') && (gameBoard[8] != '')) {
            document.getElementById('winner').innerHTML = "It's a tie!";
            document.getElementById('overlay').style.display = "grid";
        }
    }
}

// const reset = {
//     resetGrid: function() {
//         square1.innerHTML = '';
//         square2.innerHTML = '';
//         square3.innerHTML = '';
//         square4.innerHTML = '';
//         square5.innerHTML = '';
//         square6.innerHTML = '';
//         square7.innerHTML = '';
//         square8.innerHTML = '';
//         square9.innerHTML = '';
//         winner.innerHTML = '';
//     }
// }   





        // const squares = document.querySelectorAll('.gameboard');
        //     squares.forEach(square => {
        //         square.addEventListener('click', changePlayer);
        //         square.innerHTML = player[1];
        //     })


// const addMarker = () => {

//     function addSymbol() {
//         ;
//     }
   
//     document.getElementById('square1').addEventListener('click', addSymbol);
// }









// store gameboard in array
// have a HTML button in each cell (that corresponds to x or o)
// maybe have two (invisble) layers of buttons, and every time x or o is
// pressed the other layer or buttons appears
// each time button is pressed it corresponds to a css-property un-hiding itself
