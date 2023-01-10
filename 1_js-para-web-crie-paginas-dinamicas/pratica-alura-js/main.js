/*oque preciso para fazer o som tocar na pagina*/

//primeiro ---- criar uma funcao para tocar o som
function som(idElemento){
    document.querySelector(idElemento).play();
    //para tocar o som
}

// variavel que nao muda
const listaDeBotao = document.querySelectorAll('.tecla');

listaDeBotao[0].onclick = som;

// um laço for para percorrer a lista de sons
for (let cont = 0; cont < listaDeBotao.length; cont++){
    const tecla = listaDeBotao[cont];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`
    tecla.onclick = function(){
        som(idAudio);
    };
}