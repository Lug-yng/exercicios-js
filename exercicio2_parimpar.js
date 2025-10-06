// Exercício 2 — Verificar se um número é par ou ímpar

// aqui eu defino o numero que sera testado
const numero = 8;

// e aqui  eu verifico o resto da divisão do numero por 2
if (numero % 2 === 0) { 

    //se o resto da divisão for igual a zero, então o numero é par
  console.log(`O número ${numero} é PAR.`);

  //se o resto não for zero, então o numero e impar
} else {
  console.log(`O número ${numero} é ÍMPAR.`);
}
