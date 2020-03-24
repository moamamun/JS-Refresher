const correctAnswers = ['A','A','A','B']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault()                      //stop page from reloading

    let score = 0
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value]   // grabs the values of the questions

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25
        }
    })

    //show results
    scrollTo(0,0)
    result.classList.remove('d-none')

    let output = 0
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`
        if(output === score) {
            clearInterval(timer)
        } else {
            output++
        }
    }, 10)
})
