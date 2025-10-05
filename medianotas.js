//const uma variavel cuja o valor não muda = constante
/* basicamente uma caixa que armazena o nome e o valor
 das notas */
const n1 = 12; 
const n2 = 17;
const n3 = 8;

/*aqui criei uma variavel que somara e guardara a soma das
 três outras variaveis  */
const soma = n1 + n2 + n3;

const media = soma / 3;
/* aqui essa variavel vai dividir por tres a soma das 
variaveis assim a variavem media guardara a media das
tres notas */

console.log("A media é:" , media.toFixed(2));
/* aqui usei toFixed para deixar as casas decimais em 2
e em media.toFixed o ponto é usado como uma virgula*/