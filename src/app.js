//import { openDb } from './configdb.js';
//import { createTable } from '../controles/registros.js';
import { createRegistrotb,insertRegistro } from './controles/registros.js';

import express from 'express';
//import path, { parse } from 'path'
var cors = require('cors');
const app = express();

//const path = require('path');
//const router = express.Router();


/*
router.get('/',function(req,res){
    res.sendFile(path.join('./index.html'));
    //__dirname : It will resolve to your project folder.
});
*/


createRegistrotb();

app.get('/', function(req, res){
    //res.sendFile('index.html', { root: '.'})
    res.json({'API' : 'ok'})

});


app.post('/registro', function(req, res){

    console.log("req: "+JSON.stringify(req.query))
    console.log("res: "+JSON.stringify(res.query))
    
    insertRegistro(req.query)
    res.json({
        "Status Code":200
        
    })
});

app.use(cors())

app.listen(3000, () =>{
    let data = new Date();
    console.log("API iniciada na porta 3000 em: " + data);
})
