const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const UsersController = require('./controllers/UsersController')

module.exports = (app) => {
  app.post('/register', 
  	AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login', 
  	AuthenticationController.login)

  app.get('/songs', 
  	SongsController.getAllSongs)
  app.post('/songs', 
  	SongsController.post)

  app.get('/users', 
  	UsersController.getAllUsers)
  app.get('/users/:userId', 
    UsersController.show)
  app.post('/users', 
  	UsersController.post)
  app.put('/users/:userId', 
    UsersController.post)
}