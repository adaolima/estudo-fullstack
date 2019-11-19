module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Brokers = sequelize.define('Brokers', {
    name: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'Brokers',
    schema: process.env.DATABASE_SCHEMA,
  });

  Brokers.associate = (models) => {
  };

  return Brokers;
};

