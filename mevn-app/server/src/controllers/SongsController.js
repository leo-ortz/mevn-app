const {Song} = require('../models')
const config = require('../config/config')

module.exports = {
  //return all songs in db limit to 10
  async getAllSongs (req, res) {
    try{
      const songs = await Song.findAll()
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs.'
      })
    }
  },
  async post (req, res) {
    console.log(req.body)
    try{
      const song = await Song.create(req.body)
      console.log("we are here", song)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the song.'
      })
    }
  }
}