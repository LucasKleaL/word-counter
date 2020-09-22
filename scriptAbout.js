$(document).ready(function(){

$("#botaoIngles").click(function(){ //botao que muda o layout da página about para ingles
    
    //mudanças na página about
    document.querySelector("#aboutH1").innerHTML = "Made by Lucas Kusman Leal"
    document.querySelector("#aboutH2").innerHTML = "Student of Bachelor in Information Systems"
    document.querySelector("#aboutRights").innerHTML = "2020. All rights reserved."
    document.querySelector("#aboutDesign").innerHTML = "Did you like the website design? Contact-me!"
    document.querySelector("#aboutEmail").innerHTML = "Personal email: lucaskleal222@outlook.com"
    
});

$("#botaoPortugues").click(function(){ //botao que muda o layout da página about para portugues

    //mudanças na página about
    document.querySelector("#aboutH1").innerHTML = "Feito por Lucas Kusman Leal"
    document.querySelector("#aboutH2").innerHTML = "Estudante de Bacharelado em Sistemas de Informação"
    document.querySelector("#aboutRights").innerHTML = "2020. Todos os direitos reservados."
    document.querySelector("#aboutDesign").innerHTML = "Gostou do design do site? Entre em contato comigo!"
    document.querySelector("#aboutEmail").innerHTML = "Email pessoal: lucaskleal222@outlook.com"

});

$("#botaoEspanhol").click(function(){ //botao que muda o layout da página about para espanhol

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