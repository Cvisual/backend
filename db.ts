import { Sequelize } from "sequelize";

const sequelize =  new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'crud',
});
sequelize.sync().then(() => {
  console.log('Tables synchronized successfully');
}).catch(error => {
  console.log('Error syncing tables: ', error);
});
export default sequelize;