const botoesCarrossel = document.querySelectorAll('.botao'); //querySelectorAll irá buscar a class no html.
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click', ()=>{
        botaoSelecionado();
        selecionarBotaoCarrossel(botao);
        esconderImagemAtiva();
        mostrarImagemFundo(indice);
    } )
})
function mostrarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function botaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

