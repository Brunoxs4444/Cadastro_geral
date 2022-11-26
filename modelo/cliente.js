const res = require('express/lib/response');
const conexao = require('../conexao.js');

class Cliente{
    add(cliente){
        const sql = 'INSERT INTO cliente SET ?';
        
        conexao.query(sql, cliente, (erro, resultado) => {
            if(erro) {
                console.log(erro); 
            } else {
                console.log(resultado);
            }
        });
    }

deleta(id,res){
    const sql = 'DELETE FROM cliente WHERE id=?';
    conexao.query(sql, id, (erro, resultados) => {
        if(erro){
            res.status(400).json(erro);
        }
    });
  }

edita(id,nome,telefone,res){
    const sql = 'UPDATE FROM cliente Nome= ? telefone = ? WHERE id=?';
    conexao.query(sql,id,nome,telefone, (erro, resultados) => {
        if(erro){
            //res.status(400).json(erro);
        }
    });
}
}

module.exports = new Cliente;