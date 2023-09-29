//import { openDb } from './configdb.js';
//import { createTable } from '../controles/registros.js';
import { createRegistrotb,insertRegistro } from './controles/registros.js';

import express from 'express';
const app = express();



createRegistrotb();

app.get('/', function(req, res){
    res.send('Olá mundo');

});


app.post('/registro', function(req, res){
    insertRegistro(req.query)
    //console.log(req.query)
    res.json({
        "Status Code":200
    })
});

app.listen(3000, () =>{
    let data = new Date();
    console.log("API iniciada na porta 3000 em: " + data);
})