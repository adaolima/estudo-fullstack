module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const BalanceUpdates = sequelize.define('BalanceUpdates', {
    amount: {
      type: DataTypes.DOUBLE,
    },
    date: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'BalanceUpdates',
    schema: process.env.DATABASE_SCHEMA,
  });

  BalanceUpdates.associate = (models) => {
    BalanceUpdates.belongsTo(models.Investments, {
      foreignKey: {
        name: 'investmentId',
        field: 'InvestmentId',
      },
      as: 'investment',
    });
  };

  return BalanceUpdates;
};

