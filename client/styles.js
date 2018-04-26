var css = require('sheetify')

css('tachyons')

module.exports = {
  body: 'sans-serif tc h-100',
  button: `f5 no-underline black bg-animate hover-bg-black hover-white
    inline-flex items-center pa2 ba border-box pointer ma2`,
  buttonAnswer: `f5 no-underline white bg-black inline-flex items-center pa2 ba border-box ma2`,
  main: 'fl w-100'
}
