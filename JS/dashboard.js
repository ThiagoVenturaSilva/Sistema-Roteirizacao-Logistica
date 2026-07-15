//variavél do conteúdo

const dashContent = document.getElementById("main_container");

//variavél do botão

const buttonDash = document.getElementById("button-dashboard");

// addEventListener + função assincrona + arrowfunction

buttonDash.addEventListener("click", async () => {
  // cria variavel da resposta e adiciona o caminho do conteúdo do HTML

  const resposta = await fetch("pages/dashboard.html");

  // esperamos a resposta em texto

  const html = await resposta.text();

  mainContainer.innerHTML = html;
});
