module.exports = (sequelize, dataTypes) => {
  let alias = 'User';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      name: {
          type: dataTypes.STRING(255),
          allowNull: false
      },
      surname: {
          type: dataTypes.STRING(255),
          allowNull: false
      },
      dni:{
          type: dataTypes.BIGINT(10),
          allowNull:false
      },
      email: {
          type: dataTypes.STRING(255),
          allowNull: false
      },
      password:{
          type: dataTypes.STRING(255),
          allowNull: false,
      },
      role:{
        type:dataTypes.BIGINT(10),
        allowNull:false
      },
      tokens:{
        type:dataTypes.BIGINT(10),
        allowNull:false
      }
  };

  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false,
      tableName: 'users'
  }
  const User = sequelize.define(alias, cols, config); 

  return User
};