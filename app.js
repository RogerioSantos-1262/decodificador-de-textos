const textArea = document.querySelector(".texto");
const resultado = document.querySelector(".resultado");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function botaoEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    resultado.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    // console.table (matrizCodigo);
stringEncriptada = stringEncriptada.toLowerCase();

for (let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
}
return stringEncriptada;
}

const copiarResultado = document.querySelector (".resultado__para__copiar");

copiarResultado.addEventListener("click", function() {
    resultado.select();
    document.execCommand('copy');
    resultado.value = "";
    })

function botaoDescriptar() {
    const textoDescriptado = desencriptar(textArea.value);
    resultado.value = textoDescriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    // console.table (matrizCodigo);
stringDesencriptada = stringDesencriptada.toLowerCase();

for (let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
}
return stringDesencriptada;
}


