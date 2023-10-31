import { Sequelize } from "sequelize";

//old conection
/* const sequelize =  new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'crud',
}); */


//refactor 
const sequelize = new Sequelize('crud', 'root', 'r00tclust3r', {
  host: '136.166.92.45',
  port: 3305,
  dialect: 'mysql',
});
sequelize.sync().then(() => {
  console.log('Tables synchronized successfully');
}).catch(error => {
  console.log('Error syncing tables: ', error);
});
export default sequelize;