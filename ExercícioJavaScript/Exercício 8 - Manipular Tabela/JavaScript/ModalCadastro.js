var btnAdcionar = document.getElementById('btnAdicionar')
const btnFechar = document.getElementById('btnModalFechar')
const btnCadastrar = document.getElementById('btnModalCadastrar')
const modal = document.getElementById('modal')
const fundoModal = document.getElementById('telaCadastro')



const toggleModal = () => {
    modal.classList.toggle("hide");
    fundoModal.classList.toggle("hide");
  };
  
  [btnAdcionar, btnFechar,btnCadastrar, fundoModal].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });