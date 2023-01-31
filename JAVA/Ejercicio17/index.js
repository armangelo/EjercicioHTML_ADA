//Numero de enlaces de la pagina
const numEnlaces = document.getElementsByTagName("a").length;
console.log(numEnlaces)

//Direccion a la que enlaza el penultimo link
const penultimoEnlace = document.getElementsByTagName("a")[numEnlaces - 2].href;
console.log (penultimoEnlace)

//Numero de enlaces del tercer parrafo
const tercerParrafo = document.getElementById('third-paragraph');
const numEnlacesTercerParrafo = tercerParrafo.getElementsByTagName("a").length;
console.log (numEnlacesTercerParrafo)
