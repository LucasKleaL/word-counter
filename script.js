$(document).ready(function(){


$("#botaoConfirmar").click(function(){

    var textArea = $("#textArea").val();
    var texto = [];
    texto = textArea.split(" ");
    
    var wordNumber = texto.length;
    $("#visorContador").val(wordNumber)

});


$("#botaoIngles").click(function(){ //botao que muda o layout do site para ingles

    document.querySelector("#h1Title").innerHTML = "Word Counter"
    document.querySelector("#textDescription").innerHTML = "Write or paste your text bellow:"
    document.querySelector("#counterDescription").innerHTML = "Words number:"
    document.querySelector("#botaoShare").innerHTML = "Share"
    document.querySelector("#botaoCalculadora").innerHTML = "Calculator"
    document.querySelector("#botaoAbout").innerHTML = "About"

});

$("#botaoPortugues").click(function(){ //botao que muda o layout do site para portugues

    document.querySelector("#h1Title").innerHTML = "Contador de Palavras"
    document.querySelector("#textDescription").innerHTML = "Escreva ou cole seu texto abaixo:"
    document.querySelector("#counterDescription").innerHTML = "Número de palavras:"
    document.querySelector("#botaoShare").innerHTML = "Compartilhar"
    document.querySelector("#botaoCalculadora").innerHTML = "Calculadora"
    document.querySelector("#botaoAbout").innerHTML = "Sobre"

});

$("#botaoEspanhol").click(function(){ //botao que muda o layout do site para espanhol

    document.querySelector("#h1Title").innerHTML = "Contador de palabras"
    document.querySelector("#textDescription").innerHTML = "Escriba o pegue su texto a continuación:"
    document.querySelector("#counterDescription").innerHTML = "Número de palabras:"
    document.querySelector("#botaoShare").innerHTML = "Compartir"
    document.querySelector("#botaoCalculadora").innerHTML = "Calculadora"
    document.querySelector("#botaoAbout").innerHTML = "Acerca"

});


$("#botaoShare").click(function(){

    var texto = document.getElementById("linkSite");
    texto.select();
    document.execCommand("copy")
    alert("Link copied to clipboard")

});

});