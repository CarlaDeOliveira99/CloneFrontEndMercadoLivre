const modal = document.getElementById('modal')
const fundoModal = document.getElementById('modalFundo')


window.addEventListener('load', function carregar() {

    toggleModal()

})


const toggleModal = () => {
    modal.classList.toggle("hide");
    fundoModal.classList.toggle("hide");
};









