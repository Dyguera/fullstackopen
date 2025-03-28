const matriz = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  // Desestruturação para pegar o array 1, 2 

  let [primeiro] = matriz;
  console.log(primeiro)

  //Mudando o valor de primeiro e vendo se o valor da matriz muda
  primeiro = 2; 
  console.log(primeiro)
  console.log(matriz[0])

  // Desestruturando para pegar só o valor 2 

  let [[first,second]] = matriz
  console.log(second)

  

  const obj = { a: 1, b: { c: 25 } };
const {
  a,
  b: { c: d },
} = obj;

console.log(obj.b)

const pessoa = { nome: 'João', idade: 30, endereco: {rua: 'exemplo', numero: 52} };
const { nome, idade } = pessoa;

const {endereco: {numero: numeroEndereco}} = pessoa;
console.log(numeroEndereco)


//Monte um exemplode  rest ... e desestruturação adicional 

const arrayGrande = [1,2,3,5,6,7,8,9,10,11,23,25,316,2123,213214565,1235468]; 

let [primeirim, segundim, ...[primeiroDoResto]] = arrayGrande
console.log(primeiroDoResto)

const newObject = {
    name:"Teste" 
}

let {newName} = newObject 
console.log(newName)
