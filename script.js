$(document).ready(function(){


$("#botaoConfirmar").click(function(){

    var textArea = $("#textArea").val();
    var texto = [];
    texto = textArea.split(" ");
    
    var wordNumber = texto.length;

    for(var i = 0; i < texto.length; i++){
        if(texto[i] === ""){
            wordNumber -= 1;
        }
    }

    $("#visorContador").val(wordNumber)

});


$("#botaoIngles").click(function(){ //botao que muda o layout do site para ingles

    //mudanças na página principal
    document.querySelector("#h1Title").innerHTML = "Word Counter"
    document.querySelector("#textDescription").innerHTML = "Write or paste your text bellow:"
    document.querySelector("#counterDescription").innerHTML = "Words number:"
    document.querySelector("#botaoShare").innerHTML = "Share"
    document.querySelector("#botaoCalculadora").innerHTML = "Calculator"
    document.querySelector("#botaoAbout").innerHTML = "About"

    //mudanças na página about
    document.querySelector("#aboutH1").innerHTML = "Made by Lucas Kusman Leal"
    document.querySelector("#aboutH2").innerHTML = "Student of Bachelor in Information Systems"
    document.querySelector("#aboutRights").innerHTML = "2020. All rights reserved."
    document.querySelector("#aboutDesign").innerHTML = "Did you like the website design? Contact-me!"
    document.querySelector("#aboutEmail").innerHTML = "Personal email: lucaskleal222@outlook.com"

});

$("#botaoPortugues").click(function(){ //botao que muda o layout do site para portugues

    document.querySelector("#h1Title").innerHTML = "Contador de Palavras"
    document.querySelector("#textDescription").innerHTML = "Escreva ou cole seu texto abaixo:"
    document.querySelector("#counterDescription").innerHTML = "Número de palavras:"
    document.querySelector("#botaoShare").innerHTML = "Compartilhar"
    document.querySelector("#botaoCalculadora").innerHTML = "Calculadora"
    document.querySelector("#botaoAbout").innerHTML = "Sobre"

    //mudanças na página about
    document.querySelector("#aboutH1").innerHTML = "Feito por Lucas Kusman Leal"
    document.querySelector("#aboutH2").innerHTML = "Estudante de Bacharelado em Sistemas de Informação"
    document.querySelector("#aboutRights").innerHTML = "2020. Todos os direitos reservados."
    document.querySelector("#aboutDesign").innerHTML = "Gostou do design do site? Entre em contato comigo!"
    document.querySelector("#aboutEmail").innerHTML = "Email pessoal: lucaskleal222@outlook.com"

});

$("#botaoEspanhol").click(function(){ //botao que muda o layout do site para espanhol

    document.querySelector("#h1Title").innerHTML = "Contador de palabras"
    document.querySelector("#textDescription").innerHTML = "Escriba o pegue su texto a continuación:"
    document.querySelector("#counterDescription").innerHTML = "Número de palabras:"
    document.querySelector("#botaoShare").innerHTML = "Compartir"
    document.querySelector("#botaoCalculadora").innerHTML = "Calculadora"
    document.querySelector("#botaoAbout").innerHTML = "Acerca"

    //mudanças na página about
    document.querySelector("#aboutH1").innerHTML = "Hecho por Lucas Kusman Leal"
    document.querySelector("#aboutH2").innerHTML = "Estudiante de Licenciatura en Sistemas de Información"
    document.querySelector("#aboutRights").innerHTML = "2020. Todos los derechos reservados"
    document.querySelector("#aboutDesign").innerHTML = "¿Te gustó el design? Contáctame"
    document.querySelector("#aboutEmail").innerHTML = "Email personal: lucaskleal222@outlook.com"

});


$("#botaoShare").click(function(){

    var texto = document.getElementById("linkSite");
    texto.select();
    document.execCommand("copy")
    alert("Link copied to clipboard")

});

});