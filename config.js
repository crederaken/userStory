/*
This is the config file for our node.js server side
*/
module.exports = {
	"database": "mongodb://root:abc123@ds043605.mongolab.com:43605/userstoryken",
	"port": process.env.PORT || 3000,
	"secretKey": "YourSecretKey"
}

