const mysql = require("mysql2");
const databaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'blackcat',
});

databaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('Conectado OK a DB');
    }
});

module.exports = databaseConnection;