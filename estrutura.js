function mostra_info(numeroElemento) {
  const infoDiv = document.getElementById("Informação");
  const quadradoDiv = document.getElementById("Quadrado");

  const elemento = elementos.find(el => el.numero === String(numeroElemento));
  const estrutura = estruturas.find(e => e.numero === String(numeroElemento));

  if (elemento && estrutura) {
    infoDiv.removeAttribute("hidden");

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
  <div style="font-size: 29px; line-height: 1;">${elemento.simbolo} <sup>${elemento.numero}</sup></div>
  <div style="font-size: 16px; line-height: 1.2;">${elemento.nome}</div>
</div>

<div id="info_topico">
  <h2>${elemento.nome} (${elemento.simbolo})</h2>
</div>
<div id="info_topico"><p><strong>Raio Calculado:</strong> ${estrutura.raioCalculado}</p></div>
<div id="info_topico"><p><strong>Raio Covalente:</strong> ${estrutura.raioCovalente}</p></div>
<div id="info_topico"><p><strong>Raio Van Der Waals:</strong> ${estrutura.raioVanDerWaals}</p></div>
<div id="info_topico"><p><strong>Raio Iônico:</strong> ${estrutura.raioIonico}</p></div>
<div id="info_topico"><p><strong>Dureza Brinell:</strong> ${estrutura.durezaBrinell}</p></div>
<div id="info_topico"><p><strong>Dureza Mohs:</strong> ${estrutura.durezaMohs}</p></div>
<div id="info_topico"><p><strong>Dureza Vickers:</strong> ${estrutura.durezaVickers}</p></div>
<div id="info_topico"><p><strong>Dureza Rockwell:</strong> ${estrutura.durezaRockwell}</p></div>
<div id="info_topico"><p><strong>Módulo Bulk:</strong> ${estrutura.moduloBulk}</p></div>
<div id="info_topico"><p><strong>Módulo Young:</strong> ${estrutura.moduloYoung}</p></div>
<div id="info_topico"><p><strong>Módulo Cisalhamento:</strong> ${estrutura.moduloCisalhamento}</p></div>
<div id="info_topico"><p><strong>Estrutura Cristalina:</strong> ${estrutura.estruturaCristalina}</p></div>
<div id="info_topico"><p><strong>Número de Coordenação:</strong> ${estrutura.numeroCoordenacao}</p></div>
<div id="info_topico"><p><strong>Empacotamento Atômico:</strong> ${estrutura.empacotamentoAtômico}</p></div>
<div id="info_topico"><p><strong>Estrutura Molecular:</strong> ${estrutura.estruturaMolecular}</p></div>
<div id="info_topico"><p><strong>Ponto de Transição:</strong> ${estrutura.pontoTransicao}</p></div>
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
