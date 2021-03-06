const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your full name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  // Using a for loop to iterate through the various arrays.  Having the variable i will allow me to use that to call each arrays index[i] as it increments by 1 until the loop is complete. //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(`${i+1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]} \n`);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  // Using a for loop to compare candidateAnswers to correctAnswers.  Using toLowerCase() since the assignment calls for the answers to be case insensitive.
  
  let numCorrect = 0;

  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
        numCorrect++;
    }
  }
  
  let grade = (numCorrect / 5) * 100;
  let passOrFail;
  
  if (grade >= 80) {
    passOrFail = "PASSED";
  } else {
    passOrFail = "FAILED";
  }
  
  grade = console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of 5 responses correct) <<<\n>>> Status: ${passOrFail} <<<`);

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\nHello, ${candidateName}.`);

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};