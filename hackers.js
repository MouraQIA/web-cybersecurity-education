const esconderDescricoes = () => {
  const descricoes = document.querySelectorAll(".descricao");
  descricoes.forEach(item => item.style.display = "none");
};

const mostrarDescricao = (id) => {
  const elemento = document.getElementById(id);
  const descricao = elemento.nextElementSibling;
  if (descricao) descricao.style.display = "inline";
};

const ocultarDescricao = (id) => {
  const elemento = document.getElementById(id);
  const descricao = elemento.nextElementSibling;
  if (descricao) descricao.style.display = "none";
};

window.onload = () => {
  esconderDescricoes();

  const hackers = ["white", "black", "gray", "script", "red", "blue", "delator"];

  hackers.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("mouseover", () => mostrarDescricao(id));
      el.addEventListener("mouseout", () => ocultarDescricao(id));
    }
  });
};