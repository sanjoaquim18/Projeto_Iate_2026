// Implementação de validação de login

var form = document.getElementById("formLogin");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;

        if (email === "" || senha === "") {
            alert("Preencha o e-mail e a senha.");
            return;
        }

        var objLoginSenha = {
            email: email,
            senha: senha
        };

        var autorizado = validarUsuario(objLoginSenha);

        if (autorizado) {
            alert("Login realizado com sucesso!");
            form.reset();
            window.location.href = "mensagens.html";
        } else {
            alert("Usuário ou senha inválidos.");
        }
    });
}