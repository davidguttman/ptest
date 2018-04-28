var html = require('choo/html')

var styles = require('./styles')
var questions = require('./questions.json')

module.exports = function transactions (state, emit) {
  return html`
    <body class=${styles.body}>
      <div>
        <div class=${styles.main}>
          <div class='pa4'>
            <div class='f1 mb4'>Personality Type Test</div>
            ${renderQuestionList()}
            ${renderResult()}
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
      <div class='mb4'>
        <div class='f3 pa2'>${q}</div>

        <div class='flex justify-center'>
          <span
            onclick=${chooseAnswer(i, 0)}
            class=${answer === 0 ? styles.buttonAnswer : styles.button}>
            ${a}
          </span>
          <span
            onclick=${chooseAnswer(i, 1)}
            class=${answer === 1 ? styles.buttonAnswer : styles.button}>
            ${b}
          </span>
        </div>
      </div>
    `
  }

  function renderResult () {
    return html`
      <div class='mt5 pa4 ba bg-dark-gray'>
        <div class='f3 light-gray fwb mb2'>Your Personality Type:</div>
        <div class='f1 ttu white'>
          ${state.score ? state.score.type : '-'}
        </div>
      </div>
    `
  }

  function chooseAnswer (i, answer) {
    return function () {
      emit('answer', {i, answer})
    }
  }
}
