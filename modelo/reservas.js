
const conexao = require('../conexao.js');

class Reservas{
    add(reservas){
        const sql = 'INSERT INTO reservas SET ?';
        
        conexao.query(sql, reservas, (erro, resultado) => {
            if(erro) {
                console.log(erro); 
            } else {
                console.log(resultado);
            }
        });
    }
    deleta(id,res){
        const sql = 'DELETE FROM reservas WHERE id=?';
        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            }
        });
      }
}

module.exports = new Reservas;