const express = require('express');
const bodyParser = require('body-parser');
const conexao = require('./conexao.js');
const Cliente = require('./modelo/cliente');
const Funcionarios = require('./modelo/funcionarios');
const Reservas = require('./modelo/reservas');
const Casas = require('./modelo/casas');
const path = require("path");

// const consign = require('consign);

const app = express();

 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './view');

app.use(express.static(path.join(__dirname + "/public")));



conexao.connect(erro => {
    if(erro){
        console.log(erro);
     }else{
        console.log('Conectado com sucesso');
        app.listen(3000, () => console.log('servidor rodando na porta 3000'));

    }
    
})

//app.listen(3000, () => console.log('servidor rodando na porta 3000'));
app.get('/', function(req, res){
    res.render(__dirname+'/view/adm.ejs');
    
});

app.get('/principal' , (req, res) => {
    res.render(__dirname+'/view/principal.ejs');
  
});


app.get('/adm', function(req, res){ 
    conexao.query('SELECT * FROM cliente', function(erro, resultado){
    res.render('adm', {data: resultado});
    });
}); //res.sendFile(__dirname +'/view/adm.ejs'));

app.get('/funcionarios', (req, res) => { 
    conexao.query('SELECT * FROM funcionarios', function(erro, resultado){
        res.render('funcionarios', {data: resultado});
        });
});

app.get('/casas', (req, res) => { 
    conexao.query('SELECT * FROM casas', function(erro, resultado){
        res.render('casas', {data: resultado});
        });
});

app.get('/reservas', (req, res) => { 
    conexao.query('SELECT * FROM reservas', function(erro, resultado){
        res.render('reservas', {data: resultado});
        });
}); 


//app.get('/teste', (req, res) => res.send('Servidor rodando em desenvolvimento'));

app.post('/atendimento', (req, res) => {
    console.log(req.body);
    res.send('Estamos na rota de atendimento');
});

//AQUI ONDE COMEÇA CLIENTES
app.post('/cliente/cadastrar', (req, res) => {
    const cliente = req.body;

    try{
        Cliente.add(cliente);
        res.redirect('/adm')

    }catch(e){
        res.send('Erro: ' +e);
    }
});

//AQUI ONDE COMEÇA CASAS

app.post('/casas/cadastrar', (req, res) => {
    const casas = req.body;

    try{
        Casas.add(casas);
        /*conexao.query('SELECT * FROM casas', function(erro, resultado){
            
            res.render('casas', {data: resultado});
        });*/
        res.redirect('/casas')

    }catch(e){
        res.send('Erro: ' +e);
    }
});

//AQUI ONDE COMEÇA FUNCIONÁRIOS

app.post('/funcionarios/cadastrar', (req, res) => {
    const funcionarios = req.body;

    try{
        Funcionarios.add(funcionarios);
        res.redirect('/funcionarios')

    }catch(e){
        res.send('Erro: ' +e);
    }
});


//AQUI ONDE COMEÇA RESERVAS
app.post('/reservas/cadastrar', (req, res) => {
    const reservas = req.body;
try{
        Reservas.add(reservas);
        res.redirect('/reservas')

    }catch(e){
        res.send('Erro: ' +e);
    }
});

/*-----------------------BOTAO DELETAR COMEÇA AQUI ---------------------------------------*/
app.post('/cliente/deletar', (req,res) => {
    const id = parseInt(req.body.id);
    try{
        Cliente.deleta(id,res)
        conexao.query('SELECT * FROM cliente', function(erro,resultado){
            res.render('adm', {data: resultado});
        });
    }catch(e){
        res.render('Erro: ' +e );
    }
});

app.post('/casas/deletar', (req,res) => {
    const id = parseInt(req.body.id);
    try{
        Casas.deleta(id,res)
        conexao.query('SELECT * FROM casas', function(erro,resultado){
            res.render('casas', {data: resultado});
        });
    }catch(e){
        res.render('Erro: ' +e );
    }
});

app.post('/reservas/deletar', (req,res) => {
    const id = parseInt(req.body.id);
    try{
        Reservas.deleta(id,res)
        conexao.query('SELECT * FROM reservas', function(erro,resultado){
            res.render('reservas', {data: resultado});
        });
    }catch(e){
        res.render('Erro: ' +e );
    }
});

app.post('/funcionarios/deletar', (req,res) => {
    const id = parseInt(req.body.id);
    try{
        Funcionarios.deleta(id,res)
        conexao.query('SELECT * FROM funcionarios', function(erro,resultado){
            res.render('funcionarios', {data: resultado});
        });
    }catch(e){
        res.render('Erro: ' +e );
    }
});


app.post('/cliente/editar', (req,res) => {
    const id = parseInt(req.body.id);
    const Nome = String(req.body.Nome);
    const telefone = parseInt(req.body.telefone);
    
    try{
        Cliente.edita(id, Nome,telefone,res)
        conexao.query('SELECT * FROM cliente', function(erro,resultado){
            res.render('adm', {data: resultado});
        });
        res.redirect('/clientes');
    }catch(e){
        res.send('Erro: ' +e );
    }
});
