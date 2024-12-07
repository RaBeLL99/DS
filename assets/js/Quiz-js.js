'use strict';

const answers = {
  q1: 'a',
  q2: 'b',
  q3: 'a',
  q4: 'b',
  q5: 'b',
  q6: 'a',
  q7: 'c',
  q8: 'c',
  q9: 'a',
  q10: 'b',
  q11: 'a',
  q12: 'a',
};

document.getElementById('submit-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const form = document.getElementById('quiz-form');
  const formData = new FormData(form);

  let score = 0;
  let correctAnswersText = ''; // This will store the correct answers as text

  // Loop through each question and check if the answer is correct
  for (const [question, correctAnswer] of Object.entries(answers)) {
    const userAnswer = formData.get(question);

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
      score++;
    }

    // Append the correct answer to the string
    correctAnswersText += `${question.toUpperCase()}: ${correctAnswer.toUpperCase()}\n`;
  }

  // Show an alert with the correct answers and the score
  alert(`Your score: ${score}/12\n\nCorrect Answers:\n${correctAnswersText}`);
});


