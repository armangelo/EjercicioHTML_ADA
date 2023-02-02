
let enlaces = document.getElementsByTagName("a");
let numEnlaces = enlaces.length;
let penultimoEnlace = enlaces[numEnlaces - 2];
let tercerParrafo = document.getElementById('third-paragraph');
let numEnlacesTercerParrafo = tercerParrafo.getElementsByTagName("a").length;

let resultados = document.createElement("p");
resultados.innerHTML = "Número de enlaces de la página: " + numEnlaces +
"<br>Dirección del penúltimo enlace: " + penultimoEnlace +
"<br>Número de enlaces del tercer párrafo: " + numEnlacesTercerParrafo;
document.body.appendChild(resultados); 