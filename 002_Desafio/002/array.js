// inserindo itens 
/*const num = [7, 8, 9]

num.push(10, 11, 12) 
num.unshift(1, 2, 3)
num.splice(3, 0, 4, 5, 6 )

console.log(num)*/

/*const movies = [
   {id: 1, movieName: 'Dejavu'},
   {id: 2, movieName: 'Back to the future'},
   {id: 3, movieName: 'The Matrix'}
]

console.log(movies)*/

/*const num =  [5, 6, 7, 8]
// const final= num.pop() // remove o ultimo numero//
//const final= num.shift() //remove o primeiro numero
const final= num.splice(2, 1) // remove partes, apartir da posição do index (2) e quantos itens a partir da possição dois será retirado (1)

console.log(num)
console.log(final)*/
/*
//FRORMAS DE ZERAR O ARRAY
let num = [5, 6, 7, 8]
//num = []
//h = 0
num.splice(0, num.lengt)

console.log(num)*/

/*
// JUNTANDO ARRAYS (CONCAT)

let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c']

//let all = numbers.concat(letters) // contatenando todos intens dos arrays

let all = numbers.concat(letters)
let half = all.slice(3,5) //contatenando partes a partir do index)



console.log(all)
console.log(half) */

/* // USANDO JOIN IN ARRAYS

let clients = ['Kelly', 'Paulo', 'Maria']

console.log(clients)

let clientsJoin = clients.join('a') // adiciona qq coisas no final de cada elemento da array

console.log(clientsJoin)*/

/*
//REVERTENDO A ARRAY

let clients = ['Kelly', 'Paulo', 'Maria']
//clients.sort() // ordena a lista por ordem alfabetica
clients.reverse() // orderm inversa dado no array

console.log(clients) */


//VERIFICAR ELEMENTOS NA ARRAY metodo EVERY

/*const tempLondon = [18, 13, 8, 2, -10] 

const tempPositive = tempLondon.every(function(value){
   return value >= 0
})

console.log(tempPositive)*/

//VERIFICAR ELEMENTOS NA ARRAY metodo FILTER

const tempLondon = [18, 13, 8, 2, -10] 

const tempPositive = tempLondon.filter(value => value >= 0) // forma mais simples de fazer uma funçao


console.log(tempPositive)
