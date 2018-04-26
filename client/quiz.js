var html = require('choo/html')

var styles = require('./styles')
var questions = require('./questions.json')

module.exports = function transactions (state, emit) {
  return html`
    <body class=${styles.body}>
      <div>
        <div class=${styles.main}>
          <div class='pa4'>
            ${renderQuestionList()}
          </div>
        </div>
      </div>

    </body>
  `

  function renderQuestionList () {
    return html`
      <div>
        ${questions.map(renderQuestion)}
      </div>
    `
  }

  function renderQuestion (question, i) {
    var [q, a, b] = question
    var answer = state.answers[i]

    return html`
      <div class='pa4'>
        <div class='f3 pa4'>${q}</div>
        <button
          onclick=${chooseAnswer(i, 0)}
          class=${answer === 0 ? styles.buttonAnswer : styles.button}>
          ${a}
        </button>
        <button
          onclick=${chooseAnswer(i, 1)}
          class=${answer === 1 ? styles.buttonAnswer : styles.button}>
          ${b}
        </button>
      </div>
    `
  }

  function chooseAnswer (i, answer) {
    return function () {
      emit('answer', {i, answer})
    }
  }
}
