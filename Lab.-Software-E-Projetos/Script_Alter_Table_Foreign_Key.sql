-- criação de foreign key
ALTER TABLE materia ADD FOREIGN KEY (id_curso) REFERENCES curso (id);

ALTER TABLE materia ADD FOREIGN KEY (id_professor) REFERENCES professor (id);

ALTER TABLE prova ADD FOREIGN KEY (id_tipo_prova) REFERENCES tipo_prova (id);

ALTER TABLE professor_prova ADD FOREIGN KEY (id_professor) REFERENCES professor (id);

ALTER TABLE professor_prova ADD FOREIGN KEY (id_prova) REFERENCES prova (id);

ALTER TABLE prova_aluno ADD FOREIGN KEY (id_prova) REFERENCES prova (id);

ALTER TABLE prova_aluno ADD FOREIGN KEY (id_aluno) REFERENCES aluno (id);

ALTER TABLE prova_aluno ADD FOREIGN KEY (id_curso) REFERENCES curso (id);