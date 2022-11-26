const conexao = require('../conexao.js');

class Funcionarios{
    add(funcionarios){
        const sql = 'INSERT INTO funcionarios SET ?';
        
        conexao.query(sql, funcionarios, (erro, resultado) => {
            if(erro) {
                console.log(erro); 
            } else {
                console.log(resultado);
            }
        });
    }
    deleta(id,res){
        const sql = 'DELETE FROM funcionarios WHERE id=?';
        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            }
        });
      }
}

module.exports = new Funcionarios;