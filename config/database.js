  
const secret = require('./secret');

module.exports = {
  development: {
    username: 'mymoney_user',
    password: secret.DATABASE_PASSWORD,
    database: 'mymoney_db',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'mymoney_user',
    password: secret.DATABASE_PASSWORD,
    database: 'mymoney_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
