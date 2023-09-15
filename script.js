const gameBoard = (function(){
    // private variables and functions
    const rows = 3;
    const columns = 3;
    const board = [];
    for (let i = 0; i < rows; i++) {
        board[i] = []
        for (let j = 0; j < columns; j++) {
            board[i].push(square())
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


function square() {
    // class variables and functions
    let value = "E"
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
    printBoard = (board) => {
        const mappedBoard = board.map((row) => row.map((square) => square.getMark()))
        console.log(mappedBoard)
    }
    return {
        // declare public variables and functions
        printBoard
    }
})();


const inputController = (function(){
    // private variables and functions
    // public variables and functions
    const getXMove = () => {
        const squareXPosition = prompt("X?")
        return squareXPosition
    }
    const getYMove = () => {
        const squareYPosition = prompt("Y?")
        return squareYPosition
    }
    return {
        // declare public variables and functions
        getXMove,
        getYMove
    }
})();


const gameController = (function(){
    // private variables and functions
    const board = gameBoard;
    const display = displayController;
    const input = inputController;
    const playerOne = player('Player One', 'X');
    const playerTwo = player('Player Two', 'O');
    let activePlayer = playerOne;
    const switchTurn = () => {
        if (activePlayer === playerOne) {
            activePlayer = playerTwo
        }
        else {activePlayer = playerOne}
    }
    // public variables and functions
    const getActivePlayer = () => activePlayer;
    // get user input
    const playMove = () => {
        console.log(`Active Player ${getActivePlayer().name}`)
        x = input.getXMove()
        y = input.getYMove()
        board.makeMove(x, y, getActivePlayer())
        switchTurn()
        display.printBoard(board.getBoard())
    }
    return {
        //declare public variables and functions
        getActivePlayer,
        playMove,
        getBoard: board.getBoard
    }
})();

function player(name, mark) {
    // class variables and functions
    return{name, mark} // return all class variables and functions
}


const screenController = (function(){
    // private variables and functions
    const game = gameController
    const board = game.getBoard()
    const boardDiv = document.querySelector('.board')
    const updateScreen = () => {
        let i = 0;
        let j = 0;
        boardDiv.textContent = ""
        for (const row of board) {
            console.log(board)
            const rowDiv = document.createElement("div")
            for (const square of row) {
                const squareButton = document.createElement("button")
                squareButton.classList.add("square")
                squareButton.id = `${i}${j}`
                squareButton.textContent = square.getMark()
                rowDiv.appendChild(squareButton)
                j++
            }
            boardDiv.appendChild(rowDiv)
            i++
        }

    }

    const clickHandler = (e) => {
        const selectedSquare = e.target.id
        game.playMove(selectedSquare)
        updateScreen()
    }

    boardDiv.addEventListener("click", clickHandler)
    updateScreen()

    // public variables and functions
    return {
        // declare public variables and functions
        updateScreen
    }
})();
