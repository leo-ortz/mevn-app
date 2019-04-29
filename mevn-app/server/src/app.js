console.log('WIN.WIN.WIN.WIN.WIN.Success! The server started!WIN.WIN.WIN.WIN.WIN.')

// require node modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

// build express app server
const app = express()
// logging
app.use(morgan('combined'))
// easily parse any json requests
app.use(bodyParser.json())
// enabling cors
app.use(cors())

// get requeset
/*
app.get('/status', (req, res) => {
  res.send({
    message: 'hello love'
  })
})
// post request rest service
app.post('/register', (req, res) => {
  res.send({
    message: 'Hello your user was registered! have fun!'
  })
})
*/
require('./routes')(app)

sequelize.sync()
//sequelize.sync({force: true})
  .then(() => {
    var listener = app.listen(config.port)
    console.log('WIN.WIN.WIN.WIN.WIN. Server started on port ' + listener.address().port + ' WIN.WIN.WIN.WIN.WIN.')
  })
/*
var listener = app.listen(process.env.PORT || 8081, function(){
  console.log('Listening on port ' + listener.address().port)
})
*/

//DANGER: USING BELOW COMMAND WILL DROP ENTIRE DATABASE
//sequelize.sync({force: true})
