const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db/database.js");

//handling uncaught excepton
process.on("uncaughtException", (err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for handling uncaught exception`);
})


dotenv.config({
    path:"backend/config/.env"
})
connectDatabase();


//create server
const server = app.listen(process.env.PORT,() =>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})


 

//unhanled promise rejection
process.on("unhandledRejection", (err) =>{
    console.log(`Shutting down server for ${err.message}`);
    console.log(`Shutting down the sesrver due to unhanled promise rejection`);
    server.close(() =>{
        process.exit(1);
    });
});