function checkAnswer(questionNumber) {
    // Get the user's selected answers for the question
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="q' + questionNumber + '"]:checked')).map(input => input.value);
  
    // Get the correct answers for the question from the correctAnswers object
    const correctAnswers = correctAnswers[questionNumber];
  
    // Check if the selected answers match the correct answers
    const isCorrect = arraysEqual(selectedAnswers, correctAnswers);
  
    // Display the result to the user
    const resultContainer = document.getElementById('results');
    if (isCorrect) {
      resultContainer.innerHTML = 'Correct!';
    } else {
      resultContainer.innerHTML = 'Incorrect. Please try again.';
    }
  }
  
  // Utility function to check if two arrays are equal
  function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }
  