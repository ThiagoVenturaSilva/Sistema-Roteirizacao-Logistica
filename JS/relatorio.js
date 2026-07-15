const relatorioContent = document.getElementById("main_container");

const buttonRelatorio = document.getElementById("button-relatorio");

buttonRelatorio.addEventListener("click", async () => {
  const resposta = await fetch("pages/relatorio.html");

  const html = await resposta.text();

  mainContainer.innerHTML = html;
});
