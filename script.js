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

    return {
        // declare public variables and functions
    }
})();


const square = () => {
    // class variables and functions
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

    // public variables and functions

    return {
        //declare public variables and functions
    }
})();

const player = () => {
    // class variables and functions
    return{} // return all class variables and functions
}

