const configuracaoContent = document.getElementById("main_container");

const buttonConfig = document.getElementById("button-config");

buttonConfig.addEventListener("click", async () => {
  const resposta = await fetch("pages/configuracoes.html");

  const html = await resposta.text();

  configuracaoContent.innerHTML = html;
});
