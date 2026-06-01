document.addEventListener("DOMContentLoaded", function () {
  var mensagens = obterMensagens();
  var tabelaCorpo = document.querySelector("#mensagensTabela tbody");
  var semMensagens = document.getElementById("semMensagens");
  var tabela = document.getElementById("mensagensTabela");

  function mostrarSemMensagens() {
    semMensagens.style.display = "block";
    tabela.style.display = "none";
  }

  function esconderSemMensagens() {
    semMensagens.style.display = "none";
    tabela.style.display = "table";
  }

  if (!mensagens || mensagens.length === 0) {
    mostrarSemMensagens();
    return;
  }

  esconderSemMensagens();

  // mostra a mensagem mais recente primeiro
  mensagens = mensagens.slice().reverse();

  mensagens.forEach(function (mensagem) {
    var linha = document.createElement("tr");
    linha.classList.add("bold-row");

    var conteudo =
      "<td>" + escaparHtml(mensagem.nome) + "</td>" +
      "<td>" + escaparHtml(mensagem.email) + "</td>" +
      "<td>" + escaparHtml(mensagem.mensagem) + "</td>" +
      "<td>" +
      "<button class=\"action-button view-button\">Visualizar</button> " +
      "<button class=\"action-button delete-button\">Apagar</button>" +
      "</td>";

    linha.innerHTML = conteudo;
    tabelaCorpo.appendChild(linha);

    var botaoVisualizar = linha.querySelector(".view-button");
    var botaoApagar = linha.querySelector(".delete-button");

    botaoVisualizar.addEventListener("click", function () {
      linha.classList.remove("bold-row");
      linha.classList.add("viewed-row");
      botaoVisualizar.textContent = "Visualizado";
      botaoVisualizar.disabled = true;
    });

    botaoApagar.addEventListener("click", function () {
      linha.remove();
      if (tabelaCorpo.children.length === 0) {
        mostrarSemMensagens();
      }
    });
  });
});

function escaparHtml(texto) {
  if (texto === null || texto === undefined) {
    return "";
  }

  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
