// Warm up! Create a class called HumanPlayer that takes the arguments name and sym. Give the class a method called getMove that asks the user (use readline-sync) to enter there move, and returns that answer.

const readline = require('readline-sync');

class HumanPlayer {
    constructor(name, sym){
        this.name = name;
        this.sym = sym;
    }

    getMove(){
        return readline.question("Enter your move: ");
    }
}

// What else (class objects) that we could use to finish creating a TIC-TAC-TOE game
// a BOARD.
// a GAME - the rules and gameplay of the game.
/*-------- What do we need for these three classes?
* ** HumanPlayer:
* - getMove
* - symbol (sym)
*
* ** Board:
* - placeMark (sym, location)
* - isValidMove
* - findWinner
* - isGameOver
* 
* ** Game:
* - takeTurn
* - switchCurrentPlayer
* - Play() - initialize game
* - while(!gameOver) -> currPlayer.takeTurn() , switchCurrentPlayer()
*
*/

module.exports = HumanPlayer;