//=== verifica se é igual !== verifica se é diferente

const numero1 = 10;
const numero2 = 5;
const operacao = "*";

if (operacao === "+"){
    resultado = numero1 + numero2;

}else if (operacao === "-"){
    resultado = numero1 - numero2;

}else if (operacao === "*"){
    resultado = numero1 * numero2;

}else if (operacao === "/"){
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
    } else {
        console.log("Erro: divisão por zero não é permitida!");
    }

}else {
    console.log("operação inválida!");
}

if (resultado !== undefined) {
    console.log(`Resultado:${resultado}`);
}