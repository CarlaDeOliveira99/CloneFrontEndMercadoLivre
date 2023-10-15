const modalRei = document.getElementById('modalXeque')
const fundoModalRei = document.getElementById('modalFundoXeque')
const reniciarPartida = document.getElementById('btnReniciar')


const modalXeque = () => {
    modalRei.classList.toggle("hide");
    fundoModalRei.classList.toggle("hide");
};


reniciarPartida.addEventListener('click', function reniciarPartida() {
    window.location.reload()
})