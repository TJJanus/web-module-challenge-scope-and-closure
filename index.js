// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter 1 has the variable 'count' defined within the function.  counter2 has the variable count defined outside the function.  
 * 2. Which of the two uses a closure? How can you tell?
 * counter 1 code is using closure here because 'const counter 1 = counterMaker(); is calling the function outside of its scope.  const counter1 has access to the counterMaker function because of scope.   
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Scenario 2 would be useful if we wanted to use a global variable.  Meaning that count is available not only to the counter2 function.  Counter1 would be preferable if we wanted to only use count =0; inside of the function and nowhere else on the page.  
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(min, max){

    return Math.round(Math.random() * max - min ) + min

}
console.log(inning(0,2));
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb,numberOfInnings){

  var obj = {
  Home: 11,
  Away: 5,
};
return obj;
}

console.log(finalScore(inning,9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


const gameScore = function scoreboard(cb,cb2,numInnings) {
  return numInnings(cb,cb2);
}

const inningNumber = function(cb, cb2){
  return `1st inning: ${cb} - ${cb2}`;
}

const inningNumber2 = function(cb, cb2){
  return `2nd inning: ${cb} - ${cb2}`;
}

const inningNumber3 = function(cb, cb2){
  return `3rd inning: ${cb} - ${cb2}`;
}

const inningNumber4 = function(cb, cb2){
  return `4th inning: ${cb} - ${cb2}`;
}

const inningNumber5 = function(cb, cb2){
  return `5th inning: ${cb} - ${cb2}`;
}

const inningNumber6 = function(cb, cb2){
  return `6th inning: ${cb} - ${cb2}`;
}

const inningNumber7 = function(cb, cb2){
  return `7th inning: ${cb} - ${cb2}`;
}

const inningNumber8 = function(cb, cb2){
  return `8th inning: ${cb} - ${cb2}`;
}

const inningNumber9 = function(cb, cb2){
  return `9th inning: ${cb} - ${cb2}`;
}

const inningNumber10 = function(cb, cb2){
  return `Final Score: ${cb} - ${cb2}`;
}

console.log(gameScore(1,2,inningNumber));
console.log(gameScore(2,3,inningNumber2));
console.log(gameScore(1,3,inningNumber3));
console.log(gameScore(2,5,inningNumber4));
console.log(gameScore(1,8,inningNumber5));
console.log(gameScore(7,2,inningNumber6));
console.log(gameScore(9,3,inningNumber7));
console.log(gameScore(3,7,inningNumber8));
console.log(gameScore(3,0,inningNumber9));
console.log(gameScore(29,33,inningNumber10));