-- criação das tabelas
create table aluno (
    id int not null,
    ra int not null,
    pNome VARCHAR(45) not null,
    sNome VARCHAR(45) not null,
    email VARCHAR(45),
    telefone VARChAR(15),
    mobile VARCHAR(15),
    data_entrada DATE
);

create table professor (
    id int not null, 
    rp int not null,
    pNome VARCHAR(45) not null,
    sNome VARCHAR(45) not null,
    email VARCHAR(45),
    telefone VARCHAR(15),
    mobile VARCHAR(15)
);

create table materia (
    id int not null, 
    id_curso int not null,
    id_professor int not null,
    materia VARCHAR(45)
);

create table curso (
    id int not null, 
    nome VARCHAR(45) not null,
    descricao VARCHAR(45),
    id_semestre int not null
);

create table prova (
    id int not null, 
    id_tipo_prova int not null,
    nome VARCHAR(45),
    data_aplicacao DATE
);

create table tipo_prova (
    id int not null, 
    gabarito char not null,
    nome VARCHAR(45)
);

create table professor_prova (
  id_professor int not null,
  id_prova int not null
);

create table prova_aluno (
    id_prova int not null,
    id_aluno int not null,
    id_curso int not null,
    acertoGeral int not null,
    acertoEspec int not null,
    percentGeral float not null,
    percentEspec float not null,
    notaProva float not null
);