const startBtn = document.getElementById('start-btn')
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("questions")
const answerButtonsElement = document.getElementById("answer-buttons")
let shuffleQuestions, currentQuestionIndex

startBtn.addEventListener("click",startGame)

function startGame () {
    console.log('STARTED!')
    startBtn.classList.add("hide")
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer)
}

function selectAnswer() {

}

const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            {text: "4", correct: true},
            {text: "22", correct: false}
        ]
    }
]