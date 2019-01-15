var Sequelize = require("sequelize");
var config = require(__dirname + "../config/")[env];

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

customer_requests.findall({});