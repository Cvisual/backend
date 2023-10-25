import { DataTypes, Model } from "sequelize";

import sequelize from './db';

sequelize.sync().then(() => {
  console.log('Tables synchronized successfully');
}).catch((error: any) => {
  console.log('Error syncing tables: ', error);
});

class Empresa extends Model {
  public id!: Number;
  public nombre!: String;
  public descripcion!: String;
  public historia!: String;
  public fecha!: Date;
}

Empresa.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  historia: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
},
{
  sequelize,
  tableName: 'empresas',
});

export default Empresa;