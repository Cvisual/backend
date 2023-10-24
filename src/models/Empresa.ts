import { DataTypes, Model, Sequelize } from "sequelize";

const sequelize =  new Sequelize('mysql://root:password@localhost:3306/crud');

class Empresa extends Model {
  public id!: Number;
  public nombre!: String;
  public descripcion!: String;
  public historia!: String;
  public fecha!: Date;
}

Empresa.init({
  id: {
    type: DataTypes.INTEGER,
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