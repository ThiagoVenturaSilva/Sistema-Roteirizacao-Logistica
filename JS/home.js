const mainContainer = document.getElementById("main_container");
const buttonHome = document.getElementById("button-home");

buttonHome.addEventListener("click", async () => {
  console.log("Clique");

  const resposta = await fetch("pages/home.html");

  console.log(resposta);

  const html = await resposta.text();

  console.log(html);

  mainContainer.innerHTML = html;
});
