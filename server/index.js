const express = require ("express");
const app = express();
const cors = require ("cors");
const port = 9001;
const db = require ("./querries");
var bodyParser = require("body-parser");

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

//Routes 

//Create a new Amn POST
app.post ('/create/:type', db.addAmn)

//Get all Amn GET
app.get ('/viewAmn/:type', db.allAmn)

//Update Amn POST
//app.post ('/updateAmn/:amnId', db.updateAmn)

//Delete Amn DELTE
//app.delete ('/deleteAmn/:amnId', db.deleteAmn)

app.listen (port, () => 
    console.log (`Server has started on port ${port}.`)
)