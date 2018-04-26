var css = require('sheetify')

css('tachyons')

module.exports = {
  body: 'sans-serif tc h-100',
  button: `f5 no-underline black bg-animate hover-bg-black hover-white
    inline-flex items-center pa2 ba border-box mr4 pointer`,
  buttonAnswer: `f5 no-underline white bg-black inline-flex items-center pa2 ba border-box mr4 pointer`,
  main: 'fl w-100'
}
