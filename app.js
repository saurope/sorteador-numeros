
function sortear() {

    let quantidade_num = parseInt(document.getElementById("quantidade").value);
    let numero_inicial = parseInt(document.getElementById("de").value);
    let numero_final = parseInt(document.getElementById("ate").value);

    let num_sorteados = [];
    let numero;
    
    if (numero_inicial > numero_final) {
        alert("O número inicial deve ser maior que o número final!");
        reiniciarMantendoBotoes();
    }
    else {
        if (quantidade_num > (numero_final-numero_inicial + 1)){
            for (let i = 0; i < quantidade_num; i++){

                numero = num_aleatorio(numero_inicial, numero_final);

                while (num_sorteados.includes(numero)) {
                    numero = num_aleatorio(numero_inicial, numero_final);
                }
                
                num_sorteados.push(numero);

            }

            let resultado = document.getElementById('resultado');
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${num_sorteados}</label>`
            alterarStatusBotaoReiniciar();
            alterarStatusBotaoSortear();
        }
        else{
            alert("A quantidade de números sorteados deve ser maior ou igual ao intervalo de número");
        }
    }
}

function num_aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar(){
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add("container__botao");
    }
    else {
        botao.classList.remove("container__botao");
        botao.classList.add('container__botao-desabilitado');
    }
}

function alterarStatusBotaoSortear(){
    let botao = document.getElementById("btn-sortear");
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add("container__botao");
    }
    else {
        botao.classList.remove("container__botao");
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotaoReiniciar();
    alterarStatusBotaoSortear();
}

function reiniciarMantendoBotoes(){
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
}