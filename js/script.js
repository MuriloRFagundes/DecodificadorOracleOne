// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function criptografar(texto){
    return texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
};

function descriptografar(texto){
    return texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
};

function verificar(texto){
    var especiais = /[^a-z\s]/;
    
    if (especiais.test(texto)) {
        alert("O texto deve conter apenas letras minusculas e sem caracteres especiais")
        return false;
    }

    return true;
};

function executar(escolha) {
    var texto = document.querySelector("#entrada").value.toLowerCase();
    var resultado;

    if (!verificar(texto)) {
        return;   
    }

    if (escolha === "cripto") {
        resultado = criptografar(texto);
    } else if(escolha === "descripto") {
        resultado = descriptografar(texto);
    } else {
        resultado = "invalido";
    }


    document.getElementById("textoPronto").innerText = resultado;
};





document.querySelector("#criptografar").addEventListener("click", function(){
    executar("cripto");
});

document.querySelector("#descriptografar").addEventListener("click", function(){
    executar("descripto");
});
