// Declaracion de variables
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const alto = canvas.height;
const ancho = canvas.width;
const boton = document.querySelector('button');
let i = 0;
let linea = 10;
let circulo = 15;
//funcion que reinicia el canvas
function borrarCanvas() {
	ctx.clearRect(0, 0, ancho, alto);
}
//funcion que genera el movimiento
function accionCanvas() {
    borrarCanvas();
    cambiosCanvas();
    window.requestAnimationFrame(accionCanvas);
}
//funcion que hace movimientos en la figura
function cambiosCanvas(){
    if(i <= ancho){
        i += 3; 
        linea += 7;
        circulo += 1;
    } else {
        i = 0;
        linea = 10;
        circulo = 15;
    }
    figura(i);
};
//funcion que crea la figura y pone colores en el boton
function figura(i){
    ctx.fillStyle=`${colorRam()}`;
    ctx.strokeStyle=`${colorRam()}`;
    ctx.beginPath();
    ctx.lineWidth = linea;
    ctx.arc(i, 150, circulo, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    boton.style.backgroundColor = `${colorRam()}`;
}
// funcion que modifica el color de la figura
function colorRam() {
   let x=Math.floor(Math.random() * 256);
   let y=Math.floor(Math.random() * 256);
   let z=Math.floor(Math.random() * 256);
    return `rgb(${x}, ${y}, ${z})`;
}
//
boton.addEventListener('click', (event) => {
    event.preventDefault();
    window.requestAnimationFrame(accionCanvas);
});
