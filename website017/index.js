// DIFERENÇAS ENTRE REST E SPREAD
// SPREAD : ESPALHAR ( DECOMPÕE ELEMENTOS DE ARRAY OU OBJETOS)
// REST : JUNTA OS ELEMENTOS QUE SOBRAM

// REST COM ARRAYS

const numeros = ['1', '2', '3', '4', '5']
const maisnumeros = [...numeros, "6", "7"]

console.log(maisnumeros)

// REST COM OBJETOS

const pessoa = { nome: 'João', idade: 25, cidade: 'São Paulo' };
const { nome, ...resto } = pessoa; // O `rest` junta as propriedades que sobraram
console.log(nome);  // 'João'
console.log(resto); // { idade: 25, cidade: 'São Paulo' }
