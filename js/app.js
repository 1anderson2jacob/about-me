'use strict';

var numCorrect = 0;
alert('Welcome! Play my guessing game');

var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started!');

var gameQs = [];
gameQs.push(['Do I have more than 3 pets?','n']);
gameQs.push(['Do I like to play cards?','y']);
gameQs.push(['Do I like cheese','y']);
gameQs.push(['Do I have a cat named \'Ned\'?','y']);
gameQs.push(['Do I eat other people?','n']);

var rightAnswers = [];
rightAnswers.push('Correct, I only have 2 pets');
rightAnswers.push('Correct, I love card games');
rightAnswers.push('Correct, I love cheese');
rightAnswers.push('Correct, I have a cat named Ned');
rightAnswers.push('Despite what others say, you\'re correct. I do NOT eat other people');

var wrongAnswers = [];
wrongAnswers.push('Wrong, I only have 2 pets');
wrongAnswers.push('Wrong, I love card games');
wrongAnswers.push('You couldn\'t be more wrong, I love cheese');
wrongAnswers.push('Wrong, I have a cat named Ned');
wrongAnswers.push('You\'re incorrect, and that\'s very hurtful :(');
var o = 0;

for (var i = 0; i < gameQs.length; i++) {

  var answer = prompt(gameQs[i][0]).toLowerCase();
  o = i + 1;
  if (gameQs[i][1] === 'y') { //questions whose correct answer is yes

    if (answer === 'yes' || answer === 'y') { //user answered correctly
      alert(rightAnswers[i]);
      console.log('The user got question ' + o + ' correct');
      numCorrect++;
    } else { // user answered incorrectly
      alert(wrongAnswers[i]);
      console.log('The user got question ' + o + ' incorrect');
    }

  } else { //questions whose correct answer is no

    if (answer === 'no' || answer === 'n') { //user answered correctly
      alert(rightAnswers[i]);
      console.log('The user got question ' + o + ' correct');
      numCorrect++;
    } else { // user answered incorrectly
      alert(wrongAnswers[i]);
      console.log('The user got question ' + o + ' incorrect');
    }
  }
}

var numGuesses = 4;

while(numGuesses > 0) { // question 6
  answer = parseInt(prompt('How old am I?'));
  if (answer === 27) {
    alert('Correct, I am 27 years old');
    numCorrect++;
    numGuesses = 0; // end loop
    console.log('The user got question 6 correct');
  } else if (answer < 27) {
    numGuesses--;
    alert('Incorrect, your answer is too low, you have ' + numGuesses + ' guesses left')
    console.log('The user got question 6 incorrect');
  } else {
    numGuesses--;
    alert('Incorrect, your answer is too high, you have ' + numGuesses + ' guesses left')
    console.log('The user got question 6 incorrect');
  }
}

var states = ['california','oregon','idaho'];
numGuesses = 6;

while(numGuesses > 0) { //question 7
  answer = prompt('What states have I been to other than Washington?').toLowerCase();
  if (answer === states[0] || answer === states[1] || answer === states[2]) {
    alert('Correct! I\'ve been to ' + answer);
    numCorrect++
    numGuesses = 0; // end loop
    console.log('The user got question 7 correct');
  } else {
    numGuesses--;
    alert('Wrong! I\'ve never been to ' + answer + ', you have ' + numGuesses + ' guesses left');
    console.log('The user got question 7 incorrect');
  }
}

alert('You got ' + numCorrect + ' answers correct!');

