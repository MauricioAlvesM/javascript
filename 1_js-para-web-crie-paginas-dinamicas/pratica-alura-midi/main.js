const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');
console.log(listaDeTeclas)

for(let indice = 0; indice < listaDeTeclas.length; indice++){
    const tecla = listaDeTeclas[indice];
    tecla.onclick = function(){
        inputTel.value = inputTel.value + tecla.value;
    }

    tecla.onkeydown = function(evento){
       if(evento.code === "Enter" || evento.code ==="Space") {
        tecla.classList.add('ativa');
       }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
    
/*
O primeiro passo é criar uma referência (const listaDeTeclas) para poder receber a lista com todas as 
teclas do Alura Fone, ficando const listaDeTeclas = document.querySelectorAll('input[type=button]').

O segundo passo é criar o laço de repetição for, que vai percorrer 
a lista de teclas, por esta razão, a condição do for é indice < listaDeTeclas.length, 
ou seja, enquanto o indice for menor que o tamanho de listaDeTeclas, executa um comando.

Dentro do for, para facilitar o entendimento, crie uma referência constante const 
tecla para que a cada iteração , receba o valor correspondente da 
tecla listaDeTeclas[indice], ficando const tecla = listaDeTeclas.

Após isto, adicione no evento de ao apertar uma tecla do teclado 
onkeydown uma função anônima que recebe como parâmetro um evento. 
Dentro do escopo da função, vamos criar um if com a condição:
 se evento.code (o código do evento onkeydown) for igual a "Enter" ou for igual a "Space", 
 adicione a classe ativa no elemento tecla, ficando então assim tecla.classList.add(‘ativa’);

Como foi resolvido a adição da classe ativa a partir do clique da tecla Enter ou Space, 
é necessário remover essa classe logo após deixamos de pressionar a tecla. Para isso, 
você precisa adicionar na tecla o evento de onkeyup 
(quando o usuário solta a tecla) uma função anônima, e dentro do escopo desta função, 
vamos remover a classe ativa da classe, ficando assim: tecla.classList.remove(‘ativa’);

*/