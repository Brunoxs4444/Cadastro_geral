create database senaipw1;
show databases;
use senaipw1;

create table cliente(
	id INT NOT NULL AUTO_INCREMENT,
	Nome VARCHAR(50),
	telefone BIGINT,
    
    PRIMARY KEY (id)
 );
SELECT * FROM cliente;
show tables;
describe clientes;

create table funcionarios(
	id Int not null auto_increment,
	nome varchar(50),
	telefone bigint,
	cpf bigint(12),
	primary key(id)
);
SELECT * FROM funcionarios;
show tables;
describe funcionarios;


create table casas(
	id Int not null auto_increment,
	nome varchar(50),
	telefone bigint,
    endereco varchar(100),
    valor numeric(9,2),
	primary key(id)
);

SELECT * FROM casas;
show tables;
describe casas;


create table reservas(
	id Int not null auto_increment,
    id_cliente Int not null,
    id_funcionario Int not null,
	nome varchar(50),
	telefone bigint,
    endereco varchar(100),
    dias int,
    data_entrada date,
    valor numeric(9,2),
    data_saida date,
    PRIMARY KEY (id)
    
);
SELECT * FROM reservas;
show tables;
describe reservas;
