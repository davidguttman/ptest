
module.exports = function store (state, emitter) {
  state.answers = state.answers || []

  emitter.on('answer', function ({i, answer}) {
    state.answers[i] = answer
    emitter.emit('render')
  })
}
