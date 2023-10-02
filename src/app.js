//import { openDb } from './configdb.js';
//import { createTable } from '../controles/registros.js';
import { createRegistrotb,insertRegistro,allregistros,idRegistros, matriculaRegistros} from './controles/registros.js';

import express from 'express';
//import path, { parse } from 'path'
//var cors = require('cors')
const app = express();

//const path = require('path');
//const router = express.Router();


/*
router.get('/',function(req,res){
    res.sendFile(path.join('./index.html'));
    //__dirname : It will resolve to your project folder.
});
*/

//app.use(cors());


createRegistrotb();

app.get('/api/registro', async function(req, res){
    //res.sendFile('index.html', { root: '.'})
    //res.json({'API' : 'ok'})
    let registros = await allregistros();
    console.log(registros)
    res.json(registros)

});



app.get('/api/registro/id/:id', async function(req, res){
    const idRegistro = parseInt(req.params.id);
    let registro = await idRegistros(idRegistro)
    res.json(registro)
});

app.get('/api/registro/mt/:matricula', async function(req, res){
    const idRegistro = parseInt(req.params.matricula);
    let registro = await matriculaRegistros(idRegistro)
    res.json(registro)
});


app.post('/api/registro', function(req, res){

    console.log("body: "+req.body)
    
    console.log("req: "+JSON.stringify(req.query))
    console.log("res: "+JSON.stringify(res.query))
    
    insertRegistro(req.query)
    res.json({
        "Status Code":200, 'Requisição' : req.query
        
    })
    
});



app.listen(3000, () =>{
    let data = new Date();
    console.log("API iniciada na porta 3000 em: " + data);
})
