const conexao = require('../conexao.js');

class Casas{
    add(casas){
        const sql = 'INSERT INTO Casas SET ?';
        
        conexao.query(sql, casas, (erro, resultado) => {
            if(erro) {
                console.log(erro); 
            } else {
                console.log(resultado);
            }
        });
    }
    deleta(id,res){
        const sql = 'DELETE FROM casas WHERE id=?';
        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            }
        });
      }
}

module.exports = new Casas;