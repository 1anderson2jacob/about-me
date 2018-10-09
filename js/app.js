'use strict';
var numCorrect = 0;
alert('Welcome! Play my guessing game');

var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started!');


var answerOne = prompt('Do I have more than 3 pets?').toLowerCase();

if (answerOne === 'no'|| answerOne === 'n'){
    alert('Correct, I only have 2 pets');
    console.log('The user got Question 1 correct');
    numCorrect++;
} else {
    alert('Wrong, I only have 2 pets');
    console.log('The user got Question 1 wrong');
    //tell them
    //console.log the result
}

var answerTwo = prompt('Do I like to play cards?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y'){

} else {

}

var answerThree = prompt('').toLowerCase();
if (){

} else {

}

var answerFour = prompt('').toLowerCase();
if (){

} else {
    
}
var answerFive = prompt('').toLowerCase();
if (){

} else {
    
}

alert('You got ' + numCorrect + ' answers correct!');