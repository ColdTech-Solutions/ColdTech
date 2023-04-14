CREATE DATABASE monitoramento;
USE monitoramento;

CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY auto_increment,
nome VARCHAR(45),
cnpj VARCHAR(18)
);

CREATE TABLE usuario(
idUsuario INT,
nome VARCHAR(45),
email VARCHAR(45),
senha CHAR(8),
cnpj VARCHAR(18),
fkEmpresa INT,
CONSTRAINT fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
CONSTRAINT pkComposta PRIMARY KEY (idUsuario, fkEmpresa)
);

CREATE TABLE sensor(
idSensor INT,
nome VARCHAR(10),
tipo VARCHAR(45),
fkEmpresa INT,
CONSTRAINT fkEmpresaaa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
fkLocalSensor INT,
CONSTRAINT fkLocalSensor FOREIGN KEY (fkLocalSensor) REFERENCES localSensor (idLocal),
CONSTRAINT pkComposta PRIMARY KEY (idSensor, fkEmpresa, fkLocalSensor)
);

CREATE TABLE localSensor(
idLocal INT,
nome VARCHAR(45),
fkEmpresa INT,
CONSTRAINT fkEmpresaa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
CONSTRAINT pkComposta PRIMARY KEY (idLocal, fkEmpresa)
);

CREATE TABLE medicao(
idMedicao INT, 
temperatura FLOAT, 
fkSensor INT, 
CONSTRAINT fkSensor FOREIGN KEY (fkSensor) REFERENCES sensor (idSensor),
dataHora DATETIME,
CONSTRAINT pkComposta PRIMARY KEY (idMedicao, fkSensor)
);


