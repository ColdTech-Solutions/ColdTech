var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {

        instrucaoSql = `select 
                        temperatura,
                        dataHora,
                        fkSensor,
                        DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico
                    from medicao 
                    where fkSensor = ${idSensor}
                    order by idMedicao desc limit ${limite_linhas}`;
 

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {
    instrucaoSql = `select 
    temperatura,
    dataHora,
    fkSensor,
    DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico
from medicao 
where fkSensor = ${idSensor}
order by idMedicao desc limit 1`;
    


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
