const { log } = require('console');
const { NOMEM } = require('dns');

var input = require('fs').readFileSync('JAVASCRIPT/index.txt', 'utf8');
var lines = input.split('\n');
const Objeto = [
{
    id: 1, 
    Nome: 'joao',
    salario: 0,
    horas: 0
},
{
    id: 2, 
    Nome: 'leonardo',
    salario: 0,
    horas: 0
},
{
    id: 3, 
    Nome: 'erico',
    salario: 0,
    horas: 0

},
{
    id: 4, 
    Nome: 'matheus',
    salario: 0,
    horas: 0
}
]

var total = 3600
var valor = 5

var fs = require('fs');
var array = fs.readFileSync('JAVASCRIPT/index.txt').toString().split("\n");
for(i in array)
{
console.log(array[i]);
};

for(index in Objeto){
  for (let u= 0; u <= index; u++) {
    Objeto[index].horas = array[u]
  }
}

for(const Objetos of Objeto) {
   console.log('salario individual = ', Objetos.salario = total/4);
   console.log('salario + horas extras = ',(Objetos.salario + (Objetos.horas*valor)));
   console.log(Objetos.horas*valor);
}

for(index in Objeto) {
    console.log(`${index} -  ${Objeto[index].Nome} - ${Objeto[index].salario} - ${Objeto[index].horas}`);
}
