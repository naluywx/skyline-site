function mostrar(id) {
  document.querySelectorAll(".aba").forEach(sec => {
    sec.classList.remove("ativa");
  });

  document.getElementById(id).classList.add("ativa");
}