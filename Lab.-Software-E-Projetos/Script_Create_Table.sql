/* 
-------------------------------------------------------------------
|| Versão do Script: v1.02                                       ||
|| Criador: Igor Pompeo                                          || 
|| Objetivo: Script de criação de tabelas                        ||
|| Alteração: Renomeado a tabela ProvaTesteProgresso para Prova  ||
-------------------------------------------------------------------
*/

CREATE TABLE Alunos (
    RA INT NOT NULL,
    Nome VARCHAR(100) NOT NULL,
    Unidade VARCHAR(100) NOT NULL,
    Semestre INT NOT NULL,
    Turma VARCHAR(10) NOT NULL
)
GO

CREATE TABLE Prova (
    RA INT NOT NULL,
    Gabarito VARCHAR(1) NOT NULL,
    AcertosConhecEspecificos INT NOT NULL,
    PercenConhecEspecificos VARCHAR(5) NOT NULL,
    AcertosFundaGerais INT NOT NULL,
    PercenFundaGerais VARCHAR(5)  NOT NULL,
    NotasTeste FLOAT NOT NULL,
    PercenTotal VARCHAR(5) NOT NULL,
    ClassGeral INT NOT NULL,
    ClassUnidade INT NOT NULL
)
GO

CREATE TABLE Professores (
    RA INT NOT NULL,
    Nome VARCHAR(100) NOT NULL,
    Unidade VARCHAR(100) NOT NULL,
    CodCurso VARCHAR(15) NOT NULL,
    CodMateria VARCHAR(15) NOT NULL
)
GO


CREATE TABLE Cursos (
    CodCurso VARCHAR(15) NOT NULL,
    CodMateria VARCHAR(15) NOT NULL
)
GO

CREATE TABLE Materias (
    CodMateria VARCHAR(15) NOT NULL,
    NomeMateria VARCHAR(40) NOT NULL,
    NotaN1 FLOAT NOT NULL,
    NotaN2 FLOAT NOT NULL,
    NotaTesteProgresso FLOAT NOT NULL
)
GO
