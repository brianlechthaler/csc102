  //Your first name
  var firstName = prompt("Enter your first name:");

  //1-word job title
  var jobTitle = prompt("Enter your 1-word job title:");

  //Common Piece of tech
  var gadget = prompt("Enter a common piece of tech:");

  //Least dangerous job
  var safeJob = prompt("Enter the least dangerous job:");

  //Dangerous Animal
  var lethalAnimal = prompt("Enter a dangerous animal:");

  //Title of Authority
  var titleAuth = prompt("Enter a title of authority:");

  //Max num of cats someone should own
  var maxCats = prompt("Enter the max number of cats one should own:");

  //A color
  var color = prompt("Name a color:");

  //Your age
  var age = prompt("How many years old are you?:");

  //Number of hours of video games played last month
  var hoursPlayed = prompt("How many hours of video games do you play last month?:");


function getAINUM(AINUM) {
//Generate a random number between age and num of hours of games played last month
var RAND = Math.floor((Math.random() * hoursPlayed) + age);
//Add 103 to random number
var AINUM = RAND + 103;
document.write(AINUM);
}


//Concatenate everything together with spaces in between
var AINAME = color.concat(" ", lethalAnimal, " ", AINUM);
//Print output on screen [DEBUG]
//document.write(AINAME);

//Add 180 to maxCats
var lenMathX = 180 + maxCats;
//Divide that number by 3
var lenMathY = lenMathX / 3;
//Divide that by 60 to find total number of hours
var lenMathZ = lenMathY / 60;
var LENGTH = lenMathZ + " " + "hours";
//Print output on screen [DEBUG]
//document.write(LENGTH);


//Now concatenate everything together...
plot = "Set 3000 years in the future, a down-on-his-luck ".concat(safeJob, " teams up with a robot ", lethalAnimal, " and a world-famous ", gadget, " hacker to steal the last ", gadget, " on Earth from the ", titleAuth, " of the New World Government.  This ", LENGTH, " long film stars Nick Cage as ", firstName, " ", jobTitle, " and Morgan Freeman as the voice of ", AINAME, ".");
//...and display it on screen!
document.write("Generated Movie Plot: ");
document.write(plot);
