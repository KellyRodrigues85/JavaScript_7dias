// Hoisting : move a funçao para cima, dessa forma pode se chamar primeiro o elemento antes de desrever a função
// function Delaration

/*
function movie (){
    console.log ('The matrix')
    
}
movie()

// FUNCTION EXPRESSION (sem nome)

 const car = function(){
    console.log('Tesla')
 }
car()
*/

// ARGUMENTS= é o que esta sendo executado na funcão no caso abaixo (a, b)

 /*
function price (){
    let total = 0
    for(let value of arguments)// FOR LOOPING
    total += value 
    return total
}

console.log(price(10, 20, 30, 40))
*/

// cONFIGURANDO PARAMENTOS DEFAULT

function loanCar(loan, rate = 2.9, years = 5 ){
    return (loan * rate / 100* years)+ loan
}

console.log(loanCar(20000))