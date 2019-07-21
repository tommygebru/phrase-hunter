
/***************************************
   C L A S S   G A M E
***************************************/

let Game = class Game{
  constructor(missed, phrases, activePhrase){
    this.missed = missed
    //this is a counter - initial value 0
    this.phrases = //array of 5 phrase objects
    this.activePhrase = active
  }//constructor

  startGame(){
    //hides the start screen overlay
    //calls getRandomPhrase method
    //sets activephrase to the chosen phrase
    //calls addPhraseToDisplay to add active/chosen phrase to the board
  }//method

  getRandomPhrase(){
    //returns randomly chooses phrase
  }//method

  handleInteraction(){
    //Disables the visual button indicator for the chosen letter
    //A choice has been made!
    //if wrong choice - add the "wrong" css class
    //call removeLife() method
    //if correct - add the "chosen" css class
    //call showMatchedLetter() method
    //call checkForWin() method
    //if it returns true - call the gameOver() emthod
  }//method

  removeLife(){
    //change liveHeart image to lostHeart
    //++ to the missed property of the Game class!
    //if missed = 5
    //call gameOver() method
  }//method

  checkForWin(){
    //if all letters from activePhrase property are chosen
    //call gameOver() method
  }//method

  gameOver(){
    //display the start screen
    //add "win" or "lose" css classes, to the "start" css class
    //update h1 DOM you lost - play again?
    //update h1 DOM you won - play again!
  }///method


}//END class
