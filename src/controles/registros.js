//import { openDb } from "../src/configdb";

/*
export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS tb_registros (id INTEGER PRIMARY KEY,matricula INTEGER,data DATE,ocorrencia TEXT)');
    })
}*/

/*
export async function insertREG(registro){
    openDb().then(db=>{
        db.run('INSERT INTO tb_registros (matricula,data,ocorrencia) VALUES (?,?,?) ', [registro.matricula,registro.data,registro.ocorrencia]);
    })
}
*/


import {openDb} from '../configdb.js'

export async function createRegistrotb(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS tb_registros (id INTEGER PRIMARY KEY, matricula INTEGER, data DATE, ocorrencia TEXT)');
    })
}

export async function insertRegistro(registro){
    openDb().then(db=>{
        console.log("Inserir :" + JSON.stringify(registro))
        db.run('INSERT INTO tb_registros (matricula, data, ocorrencia) VALUES (?,?,?);', [registro.matricula, registro.data, registro.ocorrencia])
    })
}

export async function allregistros(){
    return openDb().then(db=>{
        return db.all('SELECT * FROM tb_registros')
        .then(res => res)
       
    })
}

export async function idRegistros(id){
    return openDb().then(db=>{
        return db.all('SELECT * FROM tb_registros WHERE id=?',[id])
    })
}

export async function matriculaRegistros(mt){
    return openDb().then(db=>{
        return db.all('SELECT * FROM tb_registros WHERE matricula=?',[mt])
    })
}