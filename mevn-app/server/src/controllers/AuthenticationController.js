const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

//sign user object to return jwt sign in token
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  console.log("jwtSignUSER", user)
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    console.log("PARAMS:", req.body)
  	try{
  	  const user = await User.create(req.body)
      const userJson = user.toJSON()

  	  res.send({
        user: userJson,
        token: jwtSignUser(userJson),
        isAdmin: userJson.isAdmin,
        message: 'Congratulations! Your user was registered! Have fun!' 
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  async login (req, res) {
    try{
      //console.log("WIN" + "REQUEST: ", req ,"RESPONSE: ", res)
      console.log("body", req.body)
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      console.log("USER", user)

      const loginjson = user.toJSON()
      console.log("LOGINJSON", loginjson)
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect.'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      console.log("isPasswordValid: " + isPasswordValid)
      if(!isPasswordValid){
        return res.status(403).send({
          error: 'The login information was incorrect.'
        })
      }

      //if all passes return jwt token 
      const userJson = user.toJSON()
      console.log(userJson)
      res.send({
        user: userJson, 
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to login.'
      })
    }
  }
}