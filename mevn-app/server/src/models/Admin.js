
module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
	  	bulletinHeader: DataTypes.STRING,
	  	bulletinSubheader: DataTypes.STRING,
	  	bulletinMessage: DataTypes.TEXT,
	  	backlog: DataTypes.TEXT,
	  	gains: DataTypes.INTEGER,
	  	costs: DataTypes.INTEGER,
	  	balance: DataTypes.INTEGER
      })
  return Admin
} 