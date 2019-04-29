const {User} = require('../models')
const config = require('../config/config')

module.exports = {
  //return all users in db limit to 10
  async getAllUsers (req, res) {
    console.log('getAllUsers')
    console.log(req.body)
    try{
      const users = await User.findAll({
      })
      res.send(users)
    } catch (err) {
      res.status(500).send({
        error: 'An ERRRORRRRRRR has occured trying to fetch the users.'
      })
    }
  },
  async show (req, res) {
    try {
      const user = await User.findByPk(req.params.userId)
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'An ERRRORRRRRRR has occured trying to fetch the users.'
      })
    }
  },
  async post (req, res) {
    console.log("REQBODY:", req.body)
    try{
      const user = await User.create(req.body)
      console.log("we are here", user)
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the user.', err
      })
    }
  }, 
  async put (req, res) {
    try {
    console.log("REQBODY WE ARE HERE:", req.body)
      await User.update(req.body, {
        where: {
          id: req.params.userId
        }
      })
    console.log("REQBODY WE ARE HERE:", req.body)
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the user.'
      })
    }
  }
}