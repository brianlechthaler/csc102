

//Your age
var age = prompt("How many years old are you?:");

//Number of hours of video games played last month
var hoursPlayed = prompt("How many hours of video games do you play last month?:");
var maxCats = prompt("Enter the max number of cats one should own:");
  var lethalAnimal = prompt("Enter a dangerous animal:");
//A color
var color = prompt("Name a color:");

function getAINUM(AINUM) {
//Generate a random number between age and num of hours of games played last month
var RAND = Math.floor((Math.random() * hoursPlayed) + age);
//Add 103 to random number
var AINUM = RAND + 103;
document.write(AINUM);
}


//Concatenate everything together with spaces in between
var AINAME = color.concat(" ", lethalAnimal, " ", getAINUM);
//Print output on screen [DEBUG]
//document.write(AINAME);
