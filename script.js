// Questão 1: MAIOR_MENOR
function MAIOR_MENOR(a, b, c, d, e) {
    const numeros = [a, b, c, d, e];
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);

    document.getElementById('resultado1').innerText = `Maior valor: ${maior} e menor valor: ${menor}`;
}

function descobrirMaiorEMenor() {
    const a = parseInt(document.getElementById('num_a').value);
    const b = parseInt(document.getElementById('num_b').value);
    const c = parseInt(document.getElementById('num_c').value);
    const d = parseInt(document.getElementById('num_d').value);
    const e = parseInt(document.getElementById('num_e').value);
    MAIOR_MENOR(a, b, c, d, e);
}

// Questão 2: VOGAL
function VOGAL(c) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    const resultado = vogais.includes(c) ? 1 : 0;
    document.getElementById('resultado2').innerText = `Resultado: ${resultado}`;
}

function verificarVogal() {
    const c = document.getElementById('caractere').value;
    VOGAL(c.toLowerCase());
}

// Questão 3: LIMITES
function LIMITES(li, ls) {

    let soma = 0;
    let pares = [];

    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            pares.push(i);
            soma += i;
        }
    }

    document.getElementById('resultado3').innerText = `Números pares: ${pares.join(', ')} \n Soma: ${soma}`;
}

function calcularLimites() {
    const li = parseInt(document.getElementById('limiteInferior').value);
    const ls = parseInt(document.getElementById('limiteSuperior').value);
    LIMITES(li, ls);
}

// Questão 4: ORDEM
function ORDEM(a, b, c) {
    const valores = [a, b, c];
    valores.sort()
    document.getElementById('resultado4').innerText = `Valores ordenados: ${valores.join(', ')}`;
}

function ordenarValores() {
    const a = parseInt(document.getElementById('valor1').value);
    const b = parseInt(document.getElementById('valor2').value);
    const c = parseInt(document.getElementById('valor3').value);
    ORDEM(a, b, c);
    
}

// Questão 5: POSITIVO_NEGATIVO
function POSITIVO_NEGATIVO(x) {
    const resultado = x >= 0;
    document.getElementById('resultado5').innerText = `O número é ${resultado ? 'positivo' : 'negativo'}.`;
}

function verificarPositivoNegativo() {
    const x = parseInt(document.getElementById('valorPosNeg').value);
    POSITIVO_NEGATIVO(x);
}

// Questão 6: PAR_IMPAR
function PAR_IMPAR(x) {
    const resultado = x % 2 === 0;

    document.getElementById('resultado6').innerText = `O número é ${resultado ? 'par' : 'ímpar'}.`;
}

function verificarParImpar() {
    const x = parseInt(document.getElementById('valorParImpar').value);
    PAR_IMPAR(x);
}
