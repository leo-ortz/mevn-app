//express middleware function to validate e.g. email, password
const Joi = require('joi')

module.exports = {
	register (req, res, next) {
	  const schema = {
	  	email: Joi.string().email().required(),
	  	password: Joi.string().regex(
	  	  //regex for 8-32 chars a-z and numbers password
	      new RegExp('^[a-zA-Z0-9]{8,32}$')
	  	).required(),
    	//firstName: Joi.string().alphanum().min(3).max(30).required(),
    	firstName: Joi.string().alphanum().min(3).max(30),
    	lastName: Joi.string().alphanum().min(3).max(30),
    	jobDescription: Joi.string().alphanum().min(3).max(30),
    	isAdmin: Joi.number().integer().min(0).max(1),
    	youAgree: Joi.number().integer().min(1).max(1)
	  }
	  const {error, value} = Joi.validate(req.body, schema)
	  console.log("REQ BODY", value)

	  if (error) {
	  	console.log("ERROR: ", error)
	    switch (error.details[0].context.key) {
	      case 'email': 
	        res.status(400).send({
	          error: 'You must provide a valid email address'
	        })	
	        break
	      case 'password':
	        res.status(400).send({
	          error: `The password provided failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics.
              <br>
              2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `
	        })
	        break
	      case 'youAgree':
	      	res.status(400).send({
	      		error: 'You must agree to login at the start of each day.'
	      	})
	      default: 
	        res.status(400).send({
	          error: 'Invalid registration information.' + error
	        })
	    }
	  } else {
	    next()
	  }
	}
}