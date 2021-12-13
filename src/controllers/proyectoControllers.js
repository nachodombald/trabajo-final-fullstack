const databaseConnection = require('../../config/database');

const renderHome = (req,res)=>{

    databaseConnection.query('SELECT * FROM productos',(error,data)=>{
        if(error){
            console.log(error);
        }
        else{
            res.render("pages/index.ejs",{data});
        }
})};

const renderContacto = (req,res)=>{
    res.render("pages/contacto.ejs");
};

const consulta =(req,res)=>{
    const {correo,mensaje}= req.body;
    console.log(correo);
    console.log(mensaje);
         databaseConnection.query('INSERT INTO contactos(correo,mensaje) VALUES(?,?)',[correo,mensaje],(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/contacto')
        }
    })};

module.exports={renderHome,renderContacto,consulta};