var alertas = [];
// var alertas2 = [];

function obterdados(idSensor) {
    fetch(`/medidas/tempo-real/${idSensor}`)
        .then(resposta => {

            if (resposta.ok) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idSensor);
                });
            } else {

                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, idSensor) {
    var temp = resposta[0].temperatura;
    var temp2 = resposta[0].temperatura * 0.1;

    console.log(idSensor === resposta[0].fk_aquario)

    var grauDeAviso = '';
    


    var limites = {
        criticoMin: -26,
        emergenciaMin: -24,
        alertaMin: -20,
        ideal: -15,
        alertaMax: -15,
        emergenciaMax: -13,
        criticoMax: -10
    };
    var limites2 = {
        criticoMin2: -8,
        emergenciaMin2: -6,
        alertaMin2: -4,
        ideal2: 7,
        alertaMax2: 9,
        emergenciaMax2: 12,
        criticoMax2: 15
    };


    var classe_temperatura = 'cor-alerta';
    var classe_temperatura2 = 'cor-alerta2';


    if (temp >= limites.criticoMax) {
        classe_temperatura = 'cor-alerta perigo-frio';
        grauDeAviso = 'perigo quente'
        grauDeAvisoCor = 'cor-alerta perigo-frio'
        exibirAlerta(temp, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp >= limites.emergenciaMax) {
        classe_temperatura = 'cor-alerta alerta-frio';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta alerta-frio'
        exibirAlerta(temp, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp >= limites.alertaMax) {
        classe_temperatura = 'cor-alerta alerta-quente';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta alerta-quente'
        exibirAlerta(temp, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.ideal  && temp >= limites.alertaMin) {
        classe_temperatura = 'cor-alerta ideal';
        removerAlerta(idSensor);
    }
    else if (temp <= limites.alertaMin && temp >= limites.emergenciaMin) {
        classe_temperatura = 'cor-alerta alerta-quente';
        grauDeAviso = 'alerta frio'
        grauDeAvisoCor = 'cor-alerta alerta-quente'
        exibirAlerta(temp, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.emergenciaMin && temp >= limites.criticoMin) {
        classe_temperatura = 'cor-alerta alerta-frio';
        grauDeAviso = 'alerta frio'
        grauDeAvisoCor = 'cor-alerta alerta-frio'
        exibirAlerta(temp, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.criticoMin) {
        classe_temperatura = 'cor-alerta perigo-frio';
        grauDeAviso = 'perigo frio'
        grauDeAvisoCor = 'cor-alerta perigo-frio'
        exibirAlerta(temp, idSensor, grauDeAviso, grauDeAvisoCor)
    }

    // validações da Câmara
     if (temp2 >= limites2.criticoMax2) {
        classe_temperatura2 = 'cor-alerta2 perigo-frio';
        grauDeAviso = 'perigo quente'
        grauDeAvisoCor = 'cor-alerta2 perigo-frio'
        exibirAlerta(temp2, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp2 >= limites2.emergenciaMax2) {
        classe_temperatura2 = 'cor-alerta2 alerta-frio';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta2 alerta-frio'
        exibirAlerta(temp2, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp2 >= limites2.alertaMax2 ) {
        classe_temperatura2 = 'cor-alerta2 alerta-quente';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta2 alerta-quente'
        exibirAlerta(temp2, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp2 <= limites2.ideal2 && temp2 >= limites2.alertaMin2) {
        classe_temperatura2 = 'cor-alerta2 ideal';
        removerAlerta(idSensor);
    }
    else if (temp2 <= limites2.alertaMin2 && temp2 >= limites2.emergenciaMin2) {
        classe_temperatura2 = 'cor-alerta2 alerta-quente';
        grauDeAviso = 'alerta frio'
        grauDeAvisoCor = 'cor-alerta2 alerta-quente'
        exibirAlerta(temp2, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp2 <= limites2.emergenciaMin2 && temp2 >= limites2.criticoMin2) {
        classe_temperatura2 = 'cor-alerta2 alerta-frio';
        grauDeAviso = 'alerta frio'
        grauDeAvisoCor = 'cor-alerta2 alerta-frio'
        exibirAlerta(temp2, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp2 <= limites2.criticoMin2) {
        classe_temperatura2 = 'cor-alerta2 perigo-frio';
        grauDeAviso = 'perigo frio'
        grauDeAvisoCor = 'cor-alerta2 perigo-frio'
        exibirAlerta(temp2, idSensor, grauDeAviso, grauDeAvisoCor)
    }





    var card;

    temp_aquario_1.innerHTML = `${temp2.toFixed(2)} °C`;
    card = card_1;

    temp_aquario_2.innerHTML = temp + "°C";
    card = card_2;

    // temp_aquario_3.innerHTML = Number(temp * 0.4.toFixed(2)) + "°C";
    // card = card_3;

    // temp_aquario_4.innerHTML = Number(temp * 0.4.toFixed(2)) + "°C";
    // card = card_4;
    temp_aquario_2.className = classe_temperatura;
    temp_aquario_1.className = classe_temperatura2;
}

function exibirAlerta(temp, idSensor, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idSensor == idSensor);

    if (indice >= 0) {
        alertas[indice] = { idSensor, temp, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idSensor, temp, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();

    // Dentro da div com classe grauDeAvisoCor há um caractere "invisível", 
    // que pode ser inserido clicando com o seu teclado em alt+255 ou pelo código adicionado acima.
}


function removerAlerta(idSensor) {
    alertas = alertas.filter(item => item.idSensor != idSensor);
    exibirCards();
}
function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ idSensor, temp, grauDeAviso, grauDeAvisoCor}) {
    return `<div class="mensagem-alarme">
    <div class="informacao">
    <div class="${grauDeAvisoCor}">&#12644;</div> 
     <h3>Câmara ${idSensor} está em estado de ${grauDeAviso}!</h3>
    <small>Temperatura ${temp}.</small>   
    </div>
    <div class="alarme-sino"></div>
    </div>` 
};
