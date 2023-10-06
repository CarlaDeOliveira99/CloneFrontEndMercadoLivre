var btnAdcionar = document.getElementById('btnAdicionar')
const btnFechar = document.getElementById('btnModalFechar')
const btnCadastrar = document.getElementById('btnModalCadastrar')
const alterar = document.getElementById('alterar')
const modal = document.getElementById('modal')
const fundoModal = document.getElementById('modalFundo')



const toggleModal = () => {
  modal.classList.toggle("hide");
  fundoModal.classList.toggle("hide");
};

[btnAdcionar, btnFechar, btnCadastrar, alterar, fundoModal].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});


