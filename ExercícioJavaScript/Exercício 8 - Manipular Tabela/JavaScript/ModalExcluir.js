const fundoModalExcluir = document.getElementById('modalFundoExcluir')
const excluirModal = document.getElementById('modalExcluir')
const sim = document.getElementById('sim')
const nao = document.getElementById('nao')




const modalExcluir = () => {
    excluirModal.classList.toggle("esconder");
    fundoModalExcluir.classList.toggle("esconder");
  };
  
  [fundoModalExcluir,sim,nao].forEach((el) => {
    el.addEventListener("click", () => modalExcluir());
  });