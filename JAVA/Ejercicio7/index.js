function sumarPares(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
        suma += array[i];
      }
    }
    return suma;
  }
  
  var numeros = [1, 2, 3, 4, 5];
  console.log(sumarPares(numeros)); // 6
  