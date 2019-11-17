
const { sequelize } = require('../../src/models');

/*   
  Before run each test
  It is use sync function to clear the tables 
*/  
beforeEach(async () => {  
  await sequelize.sync({ force: true });  
});

/*   
  After run all the tests
  It is close the connection to database  
*/  
after(() => {  
  sequelize.close();  
});