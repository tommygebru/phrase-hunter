/***************************************
   C L A S S   P H R A S E
***************************************/
let Phrase = class Phrase {
  constructor(phrase){
  this.phrase = phrase;
}//constructor
//becomeLowercase(){return this.phrase.toLowerCase();}//method
//get lowercase(){return this.becomeLowercase();}//get method
addPhraseToDisplay(){
const arr = ["PooDLe", "muTT", "TeRRieR", "BaSeNJi", "BeaGLe"];
let rand = Math.floor(Math.random() * arr.length);
let randLetters = arr[rand].toLowerCase();
let splitLetters = randLetters.split("");
console.log(splitLetters);
//const addListItem =
//console.log("listItems", listItems);
for(let i=0; i<splitLetters.length; i++){
let item = `<li>${splitLetters[i]}</li>`;
console.log(item);
//document.querySelector("#phrase ul").append(item);
////let listItems = document.querySelectorAll("#phrase li");////illogical
////listItem[i] = splitLetters[i];
console.log(i, splitLetters[i]);
}
//#phrase ul
//append li
//${i}
//display to board using #phrase div with an inner ul element, no li elements yet
}//method
get display(){return this.addPhraseToDisplay();}
checkLetter(){//checks to see if the letter selected >> matches a letter in the phrase.
}//method
showMatchedLetter(){//reveals the letter(s) on the board that matches the player's selection.
//SO if checkLetter is true >> show the letter//To reveal the matching letter(s), select all of the letter DOM elements
//that have a CSS class name that matches the selected letter and replace//each selected element's hide CSS class with the show CSS class.
//SO because multiple letters chosen is possible >>//create a loop to "select" each letter and replace each hide class with show class
}//method
}//END class
//const arr = ["PooDLe", "muTT", "TeieR", "BaSeNJi", "BeaGLe"];
//let rand = Math.floor(Math.random() * arr.length);
//let randSplit = arr[rand].toLowerCase().split("");
//console.log(randSplit);
const test = new Phrase("up & DOWN");
test.addPhraseToDisplay();

//console.log(test.lowercase);
//const test2 = new Phrase(randSplit);
//console.log(test2.addPhraseToDisplay());
