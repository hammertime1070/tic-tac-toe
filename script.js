const gameBoard = (function(){
    // private variables and functions
    const rows = 3;
    const columns = 3;
    const board = [];
    for (let i = 0; i < rows; i++) {
        board[i] = []
        for (let j = 0; j < columns; j++) {
            board[i].push(square)
        }
    }
    // public variables and functions
    const getBoard = () => board;
    const makeMove = (x, y, player) => {
        board[x][y].markSquare(player)
    }

    return {
        // declare public variables and functions
        getBoard,
        makeMove
    }
})();


const square = () => {
    // class variables and functions
    let value = ""
    const markSquare = (player) => {
        value = player.mark
    };

    const getMark = () => value;

    return{
        markSquare,
        getMark
    } // return all class variables and functions
}


const displayController = (function(){
    // private variables and functions

    // public variables and functions
 
    return {
        // declare public variables and functions
        
    }
})();


const gameController = (function(){
    // private variables and functions
    const board = gameBoard();
    const display = displayController();
    const playerOne = player();
    const playerTwo = player();
    const switchTurn = () => {
        if (activePlayer === playerOne) {
            activePlayer = playerTwo
        }
        else {activePlayer = playerOne}
    }
    let activePlayer = playerOne
    // public variables and functions
    const getActivePlayer = () => activePlayer;
    const playMove = (position) => {
        console.log(`Active Player ${getActivePlayer.name}`)
        board.makeMove(x, y, getActivePlayer().mark)
    }
    return {
        //declare public variables and functions
        getActivePlayer,
        playMove
    }
})();

const player = (name, mark) => {
    // class variables and functions
    const name = name
    const mark = mark
    return{name, mark} // return all class variables and functions
}

