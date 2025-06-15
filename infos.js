function mostra_info(numeroElemento) {
  const infoDiv = document.getElementById("Informação");
  const quadradoDiv = document.getElementById("Quadrado");

  const elemento = elementos.find((elemento) => elemento.numero === numeroElemento);

  if (elemento) {

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
  </div>      <div class="info_topico">
        <h2>${elemento.nome} (${elemento.simbolo})</h2>
      </div>
      <div class="info_topico">
        <p><strong>Número atômico:</strong> ${elemento.numero}</p>
      </div>
      <div class="info_topico">
        <p><strong>Tipo:</strong> ${elemento.tipo}</p>
      </div>
      <div class="info_topico">
        <p><strong>Massa:</strong> ${elemento.massa}</p>
      </div>
      <div class="info_topico">
        <p><strong>Configuração:</strong> ${elemento.configuracao}</p>
      </div>
      <div class="info_topico">
        <p><strong>Estado:</strong> ${elemento.estado}</p>
      </div>
      <div class="info_topico">
        <p><strong>Descoberto por:</strong> ${elemento.descobridor}</p>
      </div>
      <div class="info_topico">
        <p><strong>Descoberta:</strong> ${elemento.descoberta}</p>
      </div>
      <div class="info_topico">
        <p><strong>Usos:</strong> ${elemento.usos}</p>
      </div>
      <div class="info_topico">
        <p><strong>Wikipédia:</strong> <a href="${elemento.wikipedia}" target="_blank" rel="noopener noreferrer">Link</a></p>
      </div>
      <div class="info_topico">
        <p><strong>Nível de energia:</strong> ${elemento.niveldeenergia}</p>
      </div>
      <div class="info_topico">
        <p><strong>Densidade STP:</strong> ${elemento.densidadeSTP}</p>
      </div>
      <div class="info_topico">
        <p><strong>Densidade líquido:</strong> ${elemento.densidadeliquido}</p>
      </div>
      <div class="info_topico">
        <p><strong>Abundância no Universo:</strong> ${elemento.abundanciaUniverso}</p>
      </div>
      <div class="info_topico">
        <p><strong>Grupo:</strong> ${elemento.grupo}</p>
      </div>
      <div class="info_topico">
        <p><strong>Período:</strong> ${elemento.periodo}</p>
      </div>
      <div class="info_topico">
        <p><strong>Bloco:</strong> ${elemento.bloco}</p>
      </div>
      <div class="info_topico">
        <p><strong>Origem do nome:</strong> ${elemento.origemNome}</p>
      </div>
      <div class="info_topico">
        <p><strong>Densidade:</strong> ${elemento.densidade}</p>
      </div>
      <div class="info_topico">
        <p><strong>Radioatividade:</strong> ${elemento.radioatividade}</p>
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
