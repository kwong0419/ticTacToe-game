// Create a class called Board. It doesn't take any arguments
// in the constructor create a 3x3 matrix with nums 1 - 9.
// movesRemaining starting at 9
// winner set to undefined

// Create a MOVES Object, that has all the combos of rows and columns.
// this.MOVES = {
//     1: [0, 0]
// }

class Board {
    constructor() {
        this.board = [
            [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ] 
        ];
        this.movesRemaining = 9;
        this.winner = undefined;
        this.MOVES = {      // object MOVES gives you access to board 
            1: [0, 0],
            2: [0, 1],
            3: [0, 2],
            4: [1, 0],
            5: [1, 1],
            6: [1, 2],
            7: [2, 0],
            8: [2, 1],
            9: [2, 2]
        }
    }
    
    isValidMove(move){
        if(!this.MOVES[move]){
            return false;
        }
        let [row, col] = this.MOVES[move];
        // let row = this.MOVES[move][0];      // Same decl as above line
        // let col = this.MOVES[move][1];      // same decl
        return typeof this.board[row][col] !== "string";
    }

    placeMark(sym, move){
        // should place symbol on board AT move
        // should decrement movesRemaining
        let [row, col] = this.MOVES[move];
        this.board[row][col] = sym;
        this.movesRemaining -= 1;
    }

    findWinner() {
        // update winner to the sym that wins if there is a winner.
        // if there is no winner and moves are at 0, make winner = tie
        this.isHorizontal()
        this.isVertical()
        this.isDiagonal()
        if(this.movesRemaining === 0 && !this.winner){  // checks if there is no more moves and there is no winner
            this.winner = "TIE!";
        }

    }

    isHorizontal(board = this.board){ // take in a board but default to this.board if none is given. Return the sym of the winner if there is one else return undefined
        board.forEach(row => {
            if(row.every(el => el === row[0])){
                this.winner = row[0];
            }
        })
        return this.winner;
    }

    transpose(){
        let dup = [];
        this.board.forEach((row, i) => {
            dup[i] = [];
            row.forEach((_, j) => {
                dup[i][j] = this.board[j][i];
            })
        })
        return dup;
    }
    
    isVertical(board = this.board){
        let transposed = this.transpose();
        return this.isHorizontal(transposed);
    }

    isDiagonal(){
        // if(this.board[0][0] === this.board[1][1] === this.board[2][2]){          // viable option
        // }
        let leftDown = [];
        let rightUp = [];
        for (let i = 0; i < this.board.length; i++){
            leftDown.push(this.board[i][i]);            // pushes [0,0] [1,1] [2,2] into leftDown array
            rightUp.push(this.board[this.board.length - i - 1][i]);            // pushes [2,0] [1,1] [0,2]
        }
        if(leftDown.every(el => el === leftDown[0])) {
            return this.winner = leftDown[0];
        }
        if(rightUp.every(el => el === rightUp[0])){
            return this.winner = rightUp[0];
        }
    }

     // Board needs to check if game has winner and someone has won
    isGameOver(){
        this.findWinner();
        if(!this.winner && this.movesRemaining > 0){
            return false;
        } else {
            return true;
        }
    }

    displayBoard(){
        this.board.forEach( (row, i) => {           // forEach row, 
            console.log(row.join(" | "));
            if (i !== this.board.length - 1){
                console.log("----------")
            }
        })
    }
       
}

let board = new Board ();
// console.log(board.isValidMove("5"));
// console.log(board.isValidMove("0"));
// console.log(board.isValidMove("a"));
// console.log(board.isValidMove("9"))

// Write a function that takes in a move and returns if this move is Valid.
// Use your this.MOVES to help you. Think about types hint hint


// horizontal test -------------
// board.placeMark("X", 4);
// board.placeMark("X", 5);
// board.placeMark("X", 6);
// console.log(board.board)
// console.log(board.isHorizontal());

// vertical test ---------------
// board.placeMark("O",1);
// board.placeMark("O",4);
// board.placeMark("O",7);
// console.log(board.isVertical());

// Diag test -------------------
// board.placeMark("X", 3);
// board.placeMark("X", 5);
// board.placeMark("X", 7);
// console.log(board.isDiagonal());

// displayBoard test -----------
// board.displayBoard();




module.exports = Board;


