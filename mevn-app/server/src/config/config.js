module.exports = {
	//overwrite as needed
	port: process.env.PORT || 8081,
	db: {
	  database: process.env.DB_NAME || 'jxrapp',
	  user: process.env.DB_USER || 'jxrapp',
	  password: process.env.DB_PASS || 'jxrapp',
	  options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost', 
        storage: './jxrapp.sqlite'
	  }
	}, 
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
}