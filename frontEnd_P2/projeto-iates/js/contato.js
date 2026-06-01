// 1° IMPLEMENTAÇÃO - MENSAGEM

var form = document.getElementById("formContato");

if (form) 
    form.addEventListener("submit", function(event) {

        event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagemTexto = document.getElementById("msg").value;

    // validação

    if(nome == "" || email == "" || mensagemTexto == "") {

        alert("Preencha todos os campos");
        return;

    }

    // objeto

    var mensagem = {

        nome: nome,
        email: email,
        mensagem: mensagemTexto

    };

    console.log(mensagem);

    inserirMensagem(mensagem);

    // limpa os campos após o envio
    form.reset();

});