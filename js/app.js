'use strict';
var numCorrect = 0;
alert('Welcome! Play my guessing game');

var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started!');


var answerOne = prompt('Do I have more than 3 pets?').toLowerCase();
if (answerOne === 'no'|| answerOne === 'n'){
    alert('Correct, I only have 2 pets');
    console.log('The user got question 1 correct');
    numCorrect++;
} else {
    alert('Wrong, I only have 2 pets');
    console.log('The user got question 1 wrong');
}

var answerTwo = prompt('Do I like to play cards?').toLowerCase();
if (answerTwo === 'yes' || answerTwo === 'y'){
    alert('Correct, I love card games');
    console.log('The user got question 2 correct');
    numCorrect++;
} else {
    alert('Wrong, I love card games');
    console.log('The user got question 2 wrong');
    
}

var answerThree = prompt('Do I like cheese').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y'){
    alert('Correct, I love cheese');
    console.log('The user got question 3 correct');
    numCorrect++;
} else {
    alert('You couldn\'t be more wrong, I love cheese');
    console.log('The user got question 3 wrong');
}

var answerFour = prompt('Do I have a cat named \'Ned\'?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y'){
    alert('Correct, I have a cat named Ned');
    console.log('The user got question 4 correct');
    numCorrect++;

} else {
    alert('Wrong, I have a cat named Ned');
    console.log('The user got question 4 wrong');
}
var answerFive = prompt('Do I eat other people?').toLowerCase();
if (answerFive === 'no'|| answerFive === 'n'){
    alert('Despite what others say, you\'re correct. I do NOT eat other people');
    console.log('The user got question 5 correct');
    numCorrect++;

} else {
    alert('You\'re incorrect, and that\'s very hurtful :(');
    console.log('The user got question 5 wrong');
}

alert('You got ' + numCorrect + ' answers correct!');