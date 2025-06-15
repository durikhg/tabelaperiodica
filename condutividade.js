function mostra_info(numeroElemento) {
  const infoDiv = document.getElementById("Informação");
  const quadradoDiv = document.getElementById("Quadrado");

  const elemento = elementos.find(el => el.numero === String(numeroElemento));
  const condutividade = condutividades.find(c => c.numero === String(numeroElemento));

  if (elemento && condutividade) {
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
<div id="info_topico">
  <p><strong>Condutividade Térmica:</strong> ${condutividade.condutividadeTermica}</p>
</div>
<div id="info_topico">
  <p><strong>Condutividade Elétrica:</strong> ${condutividade.condutividadeEletrica}</p>
</div>
<div id="info_topico">
  <p><strong>Resistividade Elétrica:</strong> ${condutividade.resistividadeEletrica}</p>
</div>
<div id="info_topico">
  <p><strong>Comportamento Condutor:</strong> ${condutividade.comportamentoCondutor}</p>
</div>
<div id="info_topico">
  <p><strong>Comportamento Supercondutor:</strong> ${condutividade.comportamentoSupercondutor}</p>
</div>
<div id="info_topico">
  <p><strong>Resistividade Térmica:</strong> ${condutividade.resistividadeTermica}</p>
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
