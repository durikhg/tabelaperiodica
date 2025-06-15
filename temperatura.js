function mostra_info(numeroElemento) {
  const infoDiv = document.getElementById("Informação");
  const quadradoDiv = document.getElementById("Quadrado");


  const elemento = elementos.find(el => el.numero === String(numeroElemento));
  const temperatura = temperaturas.find(temp => temp.numero === String(numeroElemento));

  if (elemento && temperatura) {
       infoDiv.removeAttribute("hidden")

    infoDiv.innerHTML = `
<div id="quadradodiv" style="
    background-color: ${elemento.cor};
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 6px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 40px;
    width:106px;
    margin-left:80px;
    box-sizing: border-box;
  ">
    <div style="font-size: 29px; line-height: 1;">${elemento.simbolo} <sup> ${elemento.numero} </sup> </div>
    <div style="font-size: 16px; line-height: 1.2;">${elemento.nome}</div>
  </div>      <div id="info_topico">
        <h2>${elemento.nome} (${elemento.simbolo})</h2>
      </div>
      <div id="info_topico">
        <p><strong>Número atômico:</strong> ${temperatura.numero}</p>
      </div>
      <div id="info_topico">
        <p><strong>Calor Específico:</strong> ${temperatura.calorEspecifico}</p>
      </div>
      <div id="info_topico">
        <p><strong>Calor de Vaporização:</strong> ${temperatura.calorVaporizacao}</p>
      </div>
      <div id="info_topico">
        <p><strong>Calor de Fusão:</strong> ${temperatura.calorFusao}</p>
      </div>
      <div id="info_topico">
        <p><strong>Ponto de Fusão (°C):</strong> ${temperatura.pontoFusaoCelsius}</p>
      </div>
      <div id="info_topico">
        <p><strong>Ponto de Ebulição (°C):</strong> ${temperatura.pontoEbulicaoCelsius}</p>
      </div>
      <div id="info_topico">
        <p><strong>Ponto de Fusão (°F):</strong> ${temperatura.pontoFusaoFahrenheit}</p>
      </div>
      <div id="info_topico">
        <p><strong>Ponto de Ebulição (°F):</strong> ${temperatura.pontoEbulicaoFahrenheit}</p>
      </div>
      <div id="info_topico">
        <p><strong>Ponto de Fusão (K):</strong> ${temperatura.pontoFusaoKelvin}</p>
      </div>
      <div id="info_topico">
        <p><strong>Ponto de Ebulição (K):</strong> ${temperatura.pontoEbulicaoKelvin}</p>
      </div>
      <div id="info_topico">
        <p><strong>Expansão Térmica:</strong> ${temperatura.expansaoTermica}</p>
      </div>
      <div id="info_topico">
        <p><strong>Temperatura Crítica:</strong> ${temperatura.temperaturaCritica}</p>
      </div>
      <div id="info_topico">
        <p><strong>Temperatura do Ponto Triplo:</strong> ${temperatura.temperaturaTriploponto}</p>
      </div>
   `;
  } else {
    infoDiv.innerHTML = "<p>Elemento não encontrado.</p>";
    quadradoDiv.innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const tdCells = document.querySelectorAll("td");
  const infoTopicoDivs = document.querySelectorAll(".info_topico");

  let selectedCell = null;

  // Selecionar células da tabela
  tdCells.forEach(cell => {
    cell.addEventListener("click", function () {
      if (this.id === "Nada") return;

      if (selectedCell) {
        selectedCell.classList.remove("selected");
      }
      this.classList.add("selected");
      selectedCell = this;
    });
  });

  // Selecionar divs info_topico (se necessário)
  infoTopicoDivs.forEach(div => {
    div.addEventListener("click", function () {
      if (selectedCell) {
        selectedCell.classList.remove("selected");
      }
      this.classList.add("selected");
      selectedCell = this;
    });
  });
});
