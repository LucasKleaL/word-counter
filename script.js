$(document).ready(function(){


$("#botaoConfirmar").click(function(){

    var textArea = $("#textArea").val();
    var texto = [];
    texto = textArea.split(" ");
    
    var wordNumber = texto.length;
    $("#visorContador").val(wordNumber)
    alert(texto)
});

$("#botaoMenuLateral").click(function(){

    var menuAtivado = parseInt(1);
    var menuDesativado = parseInt(0);

    if(menuAtivado === 1){
        menuAtivado = 0;
        menuDesativado = 1;

        $("#menuLateral").removeClass("menu-lateral").addClass("menu-lateral-desativado")

    }
    else if(menuDesativado === 1){
        menuAtivado = 1;
        menuDesativado = 0;

        $("#menuLateral").removeClass("menu-lateral-desativado").addClass("menu-lateral-ativado")
    }

});

});