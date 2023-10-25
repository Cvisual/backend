import { DataTypes, Model, Sequelize } from "sequelize";
import Empresa from "./Empresa";

const sequelize =  new Sequelize('mysql://root@localhost:3306/crud');

sequelize.sync().then(() => {
  console.log('Tables synchronized successfully');
}).catch(error => {
  console.log('Error syncing tables: ', error);
});

class Galeria extends Model {
  public id!: Number;
  public empresa_id!: String;
  public imagen!: String;
  public descripcion!: String;
}

Galeria.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  empresa_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Empresa,
      key: 'id',
    }
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
{
  sequelize,
  tableName: 'galerias',
});

export default Galeria;