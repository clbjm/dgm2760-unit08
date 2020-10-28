const question = {
    stem: "who is buried in grant's tomb?",
    option1: "boglue",
    option2: "grant",
    option3: "grant and boglue",
    option4: "me",
    correct: 2,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        question.option1.textContent, 
        question.option2.textContent, 
        question.option3.textContent, 
        question.option4.textContent
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector(".feedback").textContent = "you are correct!"
        } else
        document.querySelector(".feedback").textContent = "try again"
    }
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))
question.display()