module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Transactions = sequelize.define('Transactions', {
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
    tableName: 'Transactions',
    schema: process.env.DATABASE_SCHEMA,
  });

  Transactions.associate = (models) => {
    Transactions.belongsTo(models.Investments, {
      foreignKey: {
        name: 'investimentId',
        field: 'InvestimentId',
      },
      as: 'investiment',
    });
  };

  return Transactions;
};

