var choo = require('choo')
var persist = require('choo-persist')
var devtools = require('choo-devtools')

var store = require('./store')
var quiz = require('./quiz')

document.title = 'Quiz'

var app = choo()
app.use(devtools())
app.use(persist())
app.use(store)
app.route('/', quiz)
app.mount('body')
