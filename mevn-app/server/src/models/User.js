const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
	const SALT_FACTOR = 8

	if(!user.changed('password')) {
		return;
	}
	console.log("hashPassword")
	return bcrypt
		.genSaltAsync(SALT_FACTOR)
		.then(salt => bcrypt.hashAsync(user.password, salt, null))
		.then(hash => {
			user.setDataValue('password', hash)
		})
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
		id: { 
			type: DataTypes.INTEGER, 
			primaryKey: true, 
			autoIncrement: true, 
			field: 'id' 
		},	  	
		email: {
	  	  type: DataTypes.STRING, 
	  	  unique: true
	  	},
	  	password: DataTypes.STRING,
	  	firstName: DataTypes.STRING,
	  	lastName: DataTypes.STRING,
	  	jobDescription: DataTypes.STRING,
		gains: DataTypes.INTEGER,
		costs: DataTypes.INTEGER,
		balance: DataTypes.INTEGER,
		isAdmin: DataTypes.INTEGER,
		youAgree: DataTypes.INTEGER
	  }, 
	  {
	  	hooks: {
	  		//beforeCreate: hashPassword
	  		//beforeUpdate: hashPassword, 
	  		beforeSave: hashPassword 
	    }
      })

  User.prototype.comparePassword = function (password) {

  	//bcrypt.compareSync("winwinwin", this.password, function(err, res) {
  		
  		if(bcrypt.compareSync(password, this.password)){
  			console.log("Match")
  		}else{
  			console.log("don't match")
  		}
  		
  	//})
  	console.log("password: "+ password + " this.password: " + this.password)
  	return bcrypt.compareSync(password, this.password)
  }

  return User
} 