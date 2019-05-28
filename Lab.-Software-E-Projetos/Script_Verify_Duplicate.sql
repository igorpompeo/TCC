/* 
-------------------------------------------------------------------
|| Versão do Script: v1.00                                       ||
|| Criador: Igor Pompeo                                          || 
|| Objetivo: Script para verificar duplicidade                   ||
-------------------------------------------------------------------
*/
-- pegar valores repetidos
SELECT DISTINCT
    RA
FROM Alunos
GROUP BY RA
HAVING COUNT(RA)>1
GO
-- deletar valores duplicados
DELETE FROM 
Alunos 
WHERE RA IN 
(
	SELECT DISTINCT
    RA
FROM Alunos
GROUP BY RA
HAVING COUNT(RA)>1
)
GO