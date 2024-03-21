//Haz un encriptador de texto

const campoTextoEntrada = document.querySelector("#textoEncriptar");
const campoMensajeSalida = document.querySelector("#textoEncriptado");

console.log(campoTextoEntrada, campoMensajeSalida);

const matrizVocalesReemplazo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
    ["b", "bau"],
    ["c", "ciel"],
    ["d", "dobl"],
    ["f", "figu"],
    ["g", "guau"],
    ["h", "homb"],
    ["j", "juic"],
    ["k", "kolu"],
    ["l", "llor"],
    ["m", "mai"],
    ["n", "namb"],
    ["p", "pip"],
    ["q", "quim"],
    ["r", "raz"],
    ["s", "silb"],
    ["t", "taco"],
    ["v", "vaca"],
    ["w", "worm"],   
    ["x", "exis"],
    ["y", "yoze"],
    ["z", "zomb"],
];

function botEncriptar(){
    const escritoUsuario = encriptar(campoTextoEntrada.value);
    campoMensajeSalida.value = escritoUsuario;
    campoTextoEntrada.value = ""; // <-- Esta línea elimina el texto del campo
}

function botDesencriptar(){
    const escritoUsuario = desencriptar(campoTextoEntrada.value);
    campoMensajeSalida.value = escritoUsuario;
}

function botLimpiar() {
    campoTextoEntrada.value = "";// <-- Esta línea elimina el texto del campo
    campoMensajeSalida.value = ""; // <-- Esta línea elimina el texto del campo
}

function encriptar(fraseUsuario){

    for(let i = 0; i < matrizVocalesReemplazo.length; i++){
        if(fraseUsuario.includes(matrizVocalesReemplazo[i][0])){
            fraseUsuario = fraseUsuario.replaceAll(
                matrizVocalesReemplazo[i][0],
                matrizVocalesReemplazo[i][1]
            );
        }
    }
return fraseUsuario;
}

function botCopiar() {
    const escritoUsuario = campoMensajeSalida.value;
    navigator.clipboard.writeText(escritoUsuario)
      .then(function() {
        //alert("¡Texto copiado al portapapeles!");
        campoMensajeSalida.value = ""; // <-- Esta línea elimina el texto del campo
      }, function(error) {
        alert("Error al copiar:", error);
      });
  }

  function desencriptar(fraseUsuario){
    for(let i = matrizVocalesReemplazo.length - 1; i >= 0; i--){
        if(fraseUsuario.includes(matrizVocalesReemplazo[i][1])){
            fraseUsuario = fraseUsuario.replaceAll(
                matrizVocalesReemplazo[i][1],
                matrizVocalesReemplazo[i][0]
            );
        }
    }
return fraseUsuario;
}

  function botLimpiar(){
    campoTextoEntrada.value = ""; // <-- Esta línea elimina el texto del campo
    campoMensajeSalida.value = ""; // <-- Esta línea elimina el texto del campo
}

var textarea = document.getElementById('textoEncriptar'); /* Aquí se obtiene el elemento textarea por su id *//* Aquí debes poner el id de tu elemento */
textarea.addEventListener('focus', function() { /* Se agrega un evento 'focus' al textarea */
  this.style.backgroundImage = 'none'; // Oculta la imagen de fondo cuando el textarea está en foco
});
textarea.addEventListener('input', function() { /* Se agrega un evento 'input' al textarea */
  if (this.value == '') { //Si el textarea está vacío...
    this.style.backgroundImage = 'url("")'; // Muestra la imagen de fondo // Aquí debes poner la ruta de tu imagen de fondo
  }
});

var textarea2 = document.getElementById('textoEncriptado'); /* Aquí se obtiene el elemento textarea por su id *//* Aquí debes poner el id de tu elemento */
textarea2.addEventListener('focus', function() { /* Se agrega un evento 'focus' al textarea */
  this.style.backgroundImage = 'none'; // Oculta la imagen de fondo cuando el textarea está en foco
});
textarea.addEventListener('input', function() { /* Se agrega un evento 'input' al textarea */
  if (this.value == '') { //Si el textarea está vacío...
    this.style.backgroundImage = 'url("")'; // Muestra la imagen de fondo // Aquí debes poner la ruta de tu imagen de fondo
  }
});



