
module.exports = function store (state, emitter) {
  state.answers = state.answers || []
  // state.answers = shortCodeToAnswers('3c0pqrfy4mvx8g')
  // console.log('state.answers', state.answers)
  state.score = score(state.answers)
  // state.shortCode = answersToShortCode(state.answers)

  emitter.on('answer', function ({i, answer}) {
    state.answers[i] = answer
    state.score = score(state.answers)
    // state.shortCode = answersToShortCode(state.answers)
    // console.log('state.shortCode', state.shortCode)

    emitter.emit('render')
  })
}

function score (answers) {
  if (answers.length < 70) return null

  var scores = {e: 0, i: 0, s: 0, n: 0, t: 0, f: 0, j: 0, p: 0}
  var cols = ['ei', 'sn', 'sn', 'tf', 'tf', 'jp', 'jp']

  answers.forEach(function (a, i) {
    var col = cols[i % 7]
    var attr = col[a]
    scores[attr] += 1
  })

  var {e, i, s, n, t, f, j, p} = scores
  var type = ''
  type += e > i ? 'e' : e < i ? 'i' : 'x'
  type += s > n ? 's' : s < n ? 'n' : 'x'
  type += t > f ? 't' : t < f ? 'f' : 'x'
  type += j > p ? 'j' : j < p ? 'p' : 'x'
  scores.type = type

  return scores
}

// function answersToShortCode (answers) {
//   var bin = answers.join('')
//   console.log('bin', bin)
//   var n = parseInt(bin, 2)
//   console.log('n', n)
//   var hex = n.toString(36)
//   // 6sli7odvkw9nnk
//   return hex
// }
//
// function shortCodeToAnswers (shortCode) {
//   var n = parseInt(shortCode, 36)
//   var bin = n.toString(2)
//   var answers = bin.split('').map(parseFloat)
//   var nPad = 70 - answers.length
//   for (var i = 0; i < nPad; i++) { answers.unshift(0) }
//   return answers
// }
