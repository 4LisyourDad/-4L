// Quiz data
const quizData = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "London",
            c: "Rome"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: {
            a: "Harper Lee",
            b: "Stephen King",
            c: "J.K. Rowling"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is the richest Man in the World?",
        answers: {
            a: "Charles",
            b: "Elon Musk",
            c: "Lebron james"
        },
        correctAnswer: "b"
    },
    {
        question: "The Best African Country is what?",
        answers: {
            a: "Nigeria",
            b: "Ghana",
            c: "South Africa"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is the worlds greatest Software Engineer?",
        answers: {
            a: "Charles Babbage",
            b: "Okoro Charles",
            c: "Charles Dickson"
        },
        correctAnswer: "b"
    },
    // Add more questions here
];

// Display quiz questions
function displayQuiz() {
    const quizElement = document.getElementById('quiz');
    let output = '';
    quizData.forEach((question, index) => {
        output += `<div class="question">`;
        output += `<div>${index + 1}. ${question.question}</div>`;
        for (const option in question.answers) {
            output += `<label><input type="radio" name="question${index}" value="${option}"> ${question.answers[option]}</label><br>`;
        }
        output += `</div>`;
    });
    quizElement.innerHTML = output;
}

// Timer
let timeLeft = 60;
const timerElement = document.getElementById('time');
const timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        alert("Time's up! Submit your answers.");
        submitQuiz();
    }
}, 1000);

// Submit quiz
function submitQuiz() {
    clearInterval(timerInterval);
    function checkAnswer() {
        const userAnswer = prompt('Your answer:').trim().toLowerCase();
        if (userAnswer === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }
    alert("Quiz Has been Submitted!!!");
}
// Display quiz when the page loads
window.onload = function() {
    displayQuiz();
};
