const imgs = document.getElementById("car");
const img = document.querySelectorAll("#car img");

let idx = 0;

function carrossel(){
    idx++;
    
    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform =`translateX(${-idx * 700}px)`;

}

setInterval(carrossel,4000);

window.onscroll = function () {
    exibirOcultarBotao();
};

function exibirOcultarBotao() {
    var btnTopo = document.getElementById("btnTopo");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
}

// Função para rolar a página de volta ao topo
function voltarAoInicio() {
    document.body.scrollTop = 0; // Para navegadores da web
    document.documentElement.scrollTop = 0; // Para o Internet Explorer, Edge e outros navegadores
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}