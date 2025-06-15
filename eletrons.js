function mostra_info(numeroElemento) {
    const elemento = elemento.find((elemento) => elemento.numero === numeroElemento);

    if (elemento) {
        for (const chave in elemento) {
            if (chave !== "numero") {
                const el = document.getElementById(chave);
                if (el) {
                    el.innerHTML = elemento[chave];
                }
            }
        }
    }
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
