let elementosSelecionados = [];

const elementos = {
    1: { simbolo: "H", nome: "Hidrogênio" },
    2: { simbolo: "He", nome: "Hélio" },
    3: { simbolo: "Li", nome: "Lítio" },
    6: { simbolo: "C", nome: "Carbono" },
    8: { simbolo: "O", nome: "Oxigênio" },
    11: { simbolo: "Na", nome: "Sódio" },
    17: { simbolo: "Cl", nome: "Cloro" },
};

const misturasPossiveis = {
    "H+O": "Água (H₂O)",
    "Na+Cl": "Cloreto de sódio (sal de cozinha)",
    "C+O": "Dióxido de carbono (CO₂)",
    "H+O+C": "Ácido fórmico (HCOOH)",
};

function limpa_elementos() {
    elementosSelecionados = [];
    atualizarJuncao(); 
    document.getElementById("resultadoMistura").textContent = "";
}

function mostra_info(id) {
    const elemento = elementos[id];
    if (!elemento) return;

    // Evita duplicação
    if (!elementosSelecionados.find(e => e.simbolo === elemento.simbolo)) {
        if (elementosSelecionados.length >= 4) {
            elementosSelecionados = []; // Zera se passar de 4
        }
        elementosSelecionados.push(elemento);
    }

    atualizarJuncao();
    mostrarMisturasRelacionadas();
}

function atualizarJuncao() {
    const nomes = elementosSelecionados.map(e => e.nome);
    document.getElementById("selecionados").textContent = nomes.join(" + ");
}

function mostrarMisturasRelacionadas() {
    const selecionados = elementosSelecionados.map(e => e.simbolo);
    const resultados = [];

    for (const chave in misturasPossiveis) {
        const compostos = chave.split("+");

        const contemTodos = selecionados.every(simbolo => compostos.includes(simbolo));

        if (contemTodos) {
            resultados.push(misturasPossiveis[chave]);
        }
    }

    document.getElementById("misturas").textContent =
        resultados.length > 0 ? resultados.join(" | ") : "Nenhuma mistura encontrada.";
}

document.addEventListener("DOMContentLoaded", function () {
  const cells = document.querySelectorAll("td");
  let selectedCell = null;

  cells.forEach(cell => {
    cell.addEventListener("click", function () {
      if (this.id === "Nada") return;

      if (selectedCell) {
        selectedCell.classList.remove("selected");
      }
      this.classList.add("selected");
      selectedCell = this;
    });
  });
});

