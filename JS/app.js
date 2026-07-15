const data = document.getElementById("date");
const hora = document.getElementById("clock");

const atualizarHora = () => {
  data.innerHTML = new Date().toLocaleDateString("pt-BR");
  hora.innerHTML = new Date().toLocaleTimeString("pt-BR");
};

setInterval(atualizarHora, 1000);

atualizarHora();
