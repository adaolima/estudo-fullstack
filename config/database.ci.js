  
const secret = require('./secret');

module.exports = {
  test: {
    username: 'postgres',
    password: secret.DATABASE_PASSWORD,
    database: 'mymoney_ci_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
  }
};
