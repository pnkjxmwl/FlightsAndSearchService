const express= require('express')
const {PORT} =require('./config/serverConfig');
const bodyParser = require('body-parser');

const ApiRoutes= require('./routes/index')
const db= require('./models/index')
const {City,Airport} =require('./models/index')
const setupAndStartServer= async()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes)

    app.listen(PORT,async ()=>{
 
        console.log(`server started at ${PORT}`)
        if(process.env.SYNC_DB){
          db.sequelize.sync({alter:true});
          //synchorization is to be done whenever we add a new association 
          // to use some functions like city.getAirports()
        }
      
    })
}

setupAndStartServer();