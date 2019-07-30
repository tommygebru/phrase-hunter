/***************************************
   C L A S S   P H R A S E
***************************************/
let Phrase = class Phrase {constructor(phrase){this.phrase = phrase;}//constructor

addPhraseToDisplay(){//display to board using #phrase div with an inner ul element, no li elements yet
const arr = ["PooDLe", "muTT", "TeRRieR", "BaSeNJi", "BeaGLe"];
let rand = Math.floor(Math.random() * arr.length);
let keys = arr[rand].toLowerCase().split(""); console.log(keys);
for(let i=0; i<keys.length; i++){
let key = keys[i];
let item = `<li class="show letter ${key}">${key}</li>`; console.log(item);
document.querySelector("#phrase ul").append(item); console.log(i, key);
}//for loop
}//method

checkLetter(){//checks to see if the letter selected >> matches a letter in the phrase.
}//method

showMatchedLetter(){//reveals the letter(s) on the board that matches the player's selection.
//SO if checkLetter is true >> show the letter//To reveal the matching letter(s), select all of the letter DOM elements
//that have a CSS class name that matches the selected letter and replace//each selected element's hide CSS class with the show CSS class.
//SO because multiple letters chosen is possible >>//create a loop to "select" each letter and replace each hide class with show class
}//method
}//END class

let btnReset = document.getElementById("btn__reset");
btnReset.addEventListener("click", ()=>{
event.target.parentNode.remove();
});
const test = new Phrase();
test.addPhraseToDisplay();
