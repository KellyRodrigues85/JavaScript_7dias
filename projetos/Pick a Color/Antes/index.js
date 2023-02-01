const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Black']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// no click
btn.addEventListener('click', function(){
    const randowColor = getRandowColor()
    document.body.style.background = colors[randowColor]
    color.textContent = colors[randowColor]
    
})

// gerar os numeros randomicos
function getRandowColor(){
    return Math.floor(Math.random() * colors.length)
}