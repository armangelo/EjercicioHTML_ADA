// Evento para el botón de guardar
document.getElementById("MyBtn").addEventListener("click", function() {
    alert("Datos guardados");
}
  // Evento para el input del nombre
  var nameInput = document.getElementById("Nombre");
  nameInput.addEventListener("focus", function() {
    nameInput.style.backgroundColor = "lightblue";
  });
  nameInput.addEventListener("blur", function() {
    nameInput.style.backgroundColor = "white";
  });
  
  // Evento para el segundo input
  var secondInput = document.getElementById("letra");
  secondInput.addEventListener("input", function() {
    var letter = secondInput.value.charAt(0);
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      secondInput.style.color = "red";
    } else {
      secondInput.style.color = "green";
    }
  });
  