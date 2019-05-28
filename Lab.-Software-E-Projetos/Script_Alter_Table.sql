/* 
-------------------------------------------------------------------
|| Versão do Script: v1.00                                       ||
|| Criador: Igor Pompeo                                          || 
|| Objetivo: Script para alteração das tabelas                   ||
-------------------------------------------------------------------
*/

-- Alteração dos datatypes das colunas da tabela Alunos
ALTER TABLE Alunos
ALTER COLUMN RA INT NOT NULL

ALTER TABLE Alunos
ALTER COLUMN Nome VARCHAR(100) NOT NULL

ALTER TABLE Alunos
ALTER COLUMN Unidade VARCHAR(100) NOT NULL

ALTER TABLE Alunos
ALTER COLUMN Semestre INT NOT NULL

ALTER TABLE Alunos
ALTER COLUMN Turma VARCHAR(10) NOT NULL

-- Alteração dos datatypes das colunas da tabela Prova
ALTER TABLE Prova
ALTER COLUMN RA INT NOT NULL

ALTER TABLE Prova
ALTER COLUMN Gabarito VARCHAR(1) NOT NULL

ALTER TABLE Prova
ALTER COLUMN AcertosConhecEspecificos INT NOT NULL

ALTER TABLE Prova
ALTER COLUMN PercenConhecEspecificos VARCHAR(5) NOT NULL

ALTER TABLE Prova
ALTER COLUMN AcertosFundaGerais INT NOT NULL

ALTER TABLE Prova
ALTER COLUMN PercenFundaGerais VARCHAR(5) NOT NULL

ALTER TABLE Prova
ALTER COLUMN NotasTeste FLOAT NOT NULL

ALTER TABLE Prova
ALTER COLUMN PercenTotal VARCHAR(5) NOT NULL

ALTER TABLE Prova
ALTER COLUMN ClassGeral INT NOT NULL

ALTER TABLE Prova
ALTER COLUMN ClassUnidade INT NOT NULL

-- Alteração dos datatypes das colunas da tabela Professores
ALTER TABLE Professores
ALTER COLUMN RA INT NOT NULL

ALTER TABLE Professores
ALTER COLUMN Nome VARCHAR(100) NOT NULL

ALTER TABLE Professores
ALTER COLUMN Unidade VARCHAR(100) NOT NULL

ALTER TABLE Professores
ALTER COLUMN CodCurso VARCHAR(15) NOT NULL

ALTER TABLE Professores
ALTER COLUMN CodMateria VARCHAR(15) NOT NULL

-- Alteração dos datatypes das colunas da tabela Cursos
ALTER TABLE Cursos
ALTER COLUMN CodCurso VARCHAR(15) NOT NULL

ALTER TABLE Cursos
ALTER COLUMN CodMateria VARCHAR(15) NOT NULL

-- Alteração dos datatypes das colunas da tabela Materias
ALTER TABLE Materias
ALTER COLUMN CodMateria VARCHAR(15) NOT NULL

ALTER TABLE Materias
ALTER COLUMN NomeMateria VARCHAR(40) NOT NULL

ALTER TABLE Materias
ALTER COLUMN NotaN1 FLOAT NOT NULL

ALTER TABLE Materias
ALTER COLUMN NotaN2 FLOAT NOT NULL

ALTER TABLE Materias
ALTER COLUMN NotaTesteProgresso FLOAT NOT NULL
GO