$(document).ready(function(){


$("#botaoConfirmar").click(function(){

    var textArea = $("#textArea").val();
    var texto = [];
    texto = textArea.split(" ");
    
    var wordNumber = texto.length;
    $("#visorContador").val(wordNumber)
    alert(wordNumber)
});


});