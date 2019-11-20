const ForestAdmin = require('forest-express-sequelize');

ForestAdmin.collection('Investments', {  
  fields: [  
    {  
      field: 'fullName',  
      type: 'String',  
      get(object) {  
        return `${object.name} (${object.Broker.name})`;  
      }  
    }  
  ]  
});