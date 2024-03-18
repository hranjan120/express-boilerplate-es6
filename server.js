import './loadEnv.js';
import app from './app.js';
import initDbConnection from './src/utils/db/initDbConnection.js';

/* **********************************************
*----------------Db connection--------------
*********************************************** */
(async () => {
  await initDbConnection();
})();

/*
*-------------------------------------------------
*/
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port} producer service`);
  console.log(`App is on: ${app.get('env')} Mode`);
});

process.on('uncaughtException', (error, origin) => {
  console.log('----- Uncaught exception -----');
  console.log(error);
  console.log(origin);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('----- Unhandled Rejection at -----');
  console.log(promise);
  console.log(reason.stack);
});
