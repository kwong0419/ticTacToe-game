const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");
const readline = require("readline-sync");

class Game {
    constructor(player1, player2){
        Object.assign(this,{player1,player2});      // create two player objects
        this.currentPlayer = player2;               // current player helps keep track of which player is up, eliminates redundancy
        this.board = new Board();                   // Game creates new board
    }
    
    // Game needs to be able to switch players
    switchPlayer(){
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;        // ternary for below code
        // if(this.currentPlayer === player1){
        //     this.currentPlayer = player2;
        // } else {
        //     this.currentPlayer = player1;
        // }
    }

    // Game needs to be able to distinguish which player turn it is and print what board currently looks like
    takeTurn(){
        console.clear();
        console.log(`It is your turn ${this.currentPlayer.name}`);
        console.log(`The board currently looks like: `);
        this.board.displayBoard();
    }
    
    // Game needs to be able to read in player's move 
    getMove(){
        let playerMove = false;         
        // while playerMove is NOT false -> runs infinitely until proven false!
        while(!playerMove){            
            let moveChoice = this.currentPlayer.getMove();                  // store currentPlayer's move as their choice
            // check if move is VALID on the board?
            if (this.board.isValidMove(moveChoice)){                        // if the move is valid, placeMark on board
                this.board.placeMark(this.currentPlayer.sym, moveChoice);
                playerMove = true;  //breaks while
            } else {
                console.log("Invalid move!! Try again! ");
            }
        }
    }

    // Game needs to be able to check if game is over!
    // gameOver determines if there is a winner:
    gameOver(){
        if(this.currentPlayer.sym === this.board.winner){
            console.log("GAME OVER! The winner is " + this.currentPlayer.name);
        } else{
            console.log("GAME OVER! It's a " + this.board.winner);
        }
    }

    // Game needs to be able to initiate game
    // while(!gameOver)
    // - prints the board
    // - currentPlayer takes turn
    // - while loop ()
    //      -> currentPlayer getMove
    //      -> only move on when isValidMove
    //      -> switchPlayers
    //      -> check if
    play(){
        console.clear()
        console.log("WELCOME to TIC-TAC-TOE!");
        while(!this.board.isGameOver()){        // while game isn't over what should happen?
            this.switchPlayer();
            this.takeTurn();
            this.getMove();
        }
        console.clear()
        this.gameOver();
        this.board.displayBoard();
    }

}

let player1 = readline.question("Enter player 1's name: ");
let player2 = readline.question("Enter player 2's name: ");

let game = new Game(
    new HumanPlayer(player1, "X"),
    new ComputerPlayer(player2, "O")
);

game.play();
