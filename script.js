const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("questions")
const answerButtonsElement = document.getElementById("answer-buttons")
let shuffleQuestions, currentQuestionIndex

startBtn.addEventListener("click",startGame)
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame () {
    console.log('STARTED!')
    startBtn.classList.add("hide")
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove("hide")
    } else {
        startBtn.innerText = "Restart"
        startBtn.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    }   else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

//List of Questions
const questions = [
    {
        question: "How many continents are there in the world?",
        answers: [
            {text: "1", correct: false},
            {text: "35", correct: false},
            {text: "7", correct: true},
            {text: "10", correct: false}
        ]
    },
    {
        question: "What city hosted the 2012 Summer Olympics?",
        answers: [
            {text: "London, England", correct: true},
            {text: "Rio de Janeiro, Brazil", correct: false},
            {text: "Tokyo, Japan", correct: false},
            {text: "Paris, France", correct: false}
        ]
    },
    {
        question: "What does “HTTP” stand for?",
        answers: [
            {text: "HyperText Transform Proxy", correct: false},
            {text: "HyperText Transfer Protocol", correct: true},
            {text: "HyperTalk Transfer Protocol", correct: false},
            {text: "HyperText Translate Protocol", correct: false}
        ]
    },
    {
        question: "What is the symbol for potassium?",
        answers: [
            {text: "K", correct: true},
            {text: "Po", correct: false},
            {text: "Pt", correct: false},
            {text: "Ca", correct: false}
        ]
    },
    {
        question: "Which animal can be seen on the Porsche logo?",
        answers: [
            {text: "Raccoon", correct: false},
            {text: "Tiger", correct: false},
            {text: "Jaguar", correct: false},
            {text: "Horse", correct: true}
        ]
    },
    {
        question: "Which organ has four chambers?",
        answers: [
            {text: "Liver", correct: false},
            {text: "Heart", correct: true},
            {text: "Eyes", correct: false},
            {text: "Lungs", correct: false}
        ]
    },
    {
        question: "Which continent is the largest?",
        answers: [
            {text: "Europe", correct: false},
            {text: "America", correct: false},
            {text: "Asia", correct: true},
            {text: "Africa", correct: false}
        ]
    },
    {
        question: "Which popular TV show featured house Targaryen and Stark?",
        answers: [
            {text: "Game of Thrones", correct: true},
            {text: "Money Heist", correct: false},
            {text: "The Witcher", correct: false},
            {text: "Friends", correct: false}
        ]
    },
    {
        question: "What’s the fastest animal in the world?",
        answers: [
            {text: "Turtle", correct: false},
            {text: "Cheetah", correct: true},
            {text: "Rabbit", correct: false},
            {text: "Snail", correct: false}
        ]
    },
    {
        question: "Which cartoon character lives in a pineapple under the sea?",
        answers: [
            {text: "Ash Ketchum", correct: false},
            {text: "Naruto", correct: false},
            {text: "Phineas & Ferb", correct: false},
            {text: "Spongebob Squarepants", correct: true}
        ]
    },
]
