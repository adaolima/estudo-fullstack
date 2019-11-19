module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const SequelizeMeta = sequelize.define('SequelizeMeta', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }, {
    tableName: 'SequelizeMeta',
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  SequelizeMeta.associate = (models) => {
  };

  return SequelizeMeta;
};

