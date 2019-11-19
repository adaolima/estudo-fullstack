module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Investments = sequelize.define('Investments', {
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
    tableName: 'Investments',
    schema: process.env.DATABASE_SCHEMA,
  });

  Investments.associate = (models) => {
    Investments.belongsTo(models.Brokers, {
      foreignKey: {
        name: 'brokerId',
        field: 'BrokerId',
      },
      as: 'broker',
    });
  };

  return Investments;
};

