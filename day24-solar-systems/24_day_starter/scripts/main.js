const button = document.querySelector('button')
const textBox=document.getElementById('mass')
const planet = document.querySelector('select')
const planetImage=document.getElementById('planet-image-js')

let earth=9.807
let jupiter=24.79
let mars=3.721
let mercury=3.7
let moon=1.62
let neptune=11.15
let pluto=0.62
let saturn=10.44
let uranus=8.87
let venus=8.87

button.addEventListener('click',weightResult)
planet.addEventListener('change',changePlanet)

function weightResult(){
    alert(textBox.value*eval(planet.value))
}
function changePlanet(){
    planetImage.src=`./images/${planet.value}.png`
}
