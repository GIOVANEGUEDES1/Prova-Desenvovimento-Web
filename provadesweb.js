
let sc_giovane_modoHeroi = false;



function sc_giovane_transformar(){
  
    const nome = document.getElementById("sc_giovane_nome");
/* =========================================
   VARIÁVEL DE CONTROLE
========================================= */

/* 
   Essa variável guarda o estado atual da página.
   false = modo normal
   true = modo herói
*/
let sc_giovane_modoHeroi = false;



/* =========================================
   FUNÇÃO PRINCIPAL
========================================= */

/* 
   Essa função é chamada quando o botão é clicado.
   Ela alterna entre:
   - modo normal
   - modo herói
*/
function sc_giovane_transformar(){
  

    /* =========================================
       PEGANDO ELEMENTOS DO HTML
    ========================================= */

    /* Elemento do nome */
    const nome = document.getElementById("sc_giovane_nome");

    /* Elemento da descrição */
    const descricao = document.getElementById("sc_giovane_descricao");

    /* Elemento da idade */
    const idade = document.getElementById("sc_giovane_idade");

    /* Elemento do time */
    const time = document.getElementById("sc_giovane_time");

    /* Elemento da comida favorita */
    const comida = document.getElementById("sc_giovane_comida");

    /* Elemento do hobby */
    const hobby = document.getElementById("sc_giovane_hobby");

    /* Elemento do filme favorito */
    const filme = document.getElementById("sc_giovane_filme");

    /* Elemento da foto */
    const foto = document.getElementById("sc_giovane_foto");

    /* Botão de transformar */
    const botao = document.getElementById("sc_giovane_btn_transformar");

    /* Seleciona todos os cards */
    const cards = document.querySelectorAll(".sc_giovane_card");


    /* =========================================
       VERIFICA SE ESTÁ NO MODO NORMAL
    ========================================= */

    /*
       Se a variável for false,
       significa que está no modo normal.
    */
    if(sc_giovane_modoHeroi === false){


        /* =========================================
           ALTERANDO OS DADOS PARA MODO HERÓI
        ========================================= */

        /* Troca o nome */
        nome.innerHTML = "Homem-Aranha";

        /* Troca a descrição */
        descricao.innerHTML =
        "Herói da Marvel com força sobre-humana, sentidos aguçados e habilidade de escalar paredes.";

        /* Troca a idade */
        idade.innerHTML = "26 anos";

        /* Troca o time */
        time.innerHTML = "Vingadores";

        /* Troca a comida favorita */
        comida.innerHTML = "Comida Japonesa";

        /* Troca o hobby */
        hobby.innerHTML = "Salvar Nova York";

        /* Troca o filme favorito */
        filme.innerHTML = "Spider-Man: No Aranhaverso";

        /* Troca a imagem */
        foto.src = "heroi.jpg";

        /* Troca o texto do botão */
        botao.innerHTML = "Voltar";


        /* =========================================
           ADICIONANDO CLASSES CSS
        ========================================= */

        /* 
           Adiciona uma classe no body
           para mudar o fundo da página
        */
        document.body.classList.add("sc_giovane_heroi");


        /* 
           Percorre todos os cards
           e adiciona a classe de herói
        */
        cards.forEach(function(card){

            card.classList.add("sc_giovane_card_heroi");

        });


        /* =========================================
           ALTERA O ESTADO PARA HERÓI
        ========================================= */

        sc_giovane_modoHeroi = true;


    }else{


        /* =========================================
           VOLTANDO AO MODO NORMAL
        ========================================= */

        /* Restaura o nome */
        nome.innerHTML = "Giovane";

        /* Restaura a descrição */
        descricao.innerHTML =
        "Sou estudante de desenvolvimento web e gosto de tecnologia, jogos e futebol.";

        /* Restaura a idade */
        idade.innerHTML = "26 anos";

        /* Restaura o time */
        time.innerHTML = "Corinthians";

        /* Restaura a comida favorita */
        comida.innerHTML = "Churrasco";

        /* Restaura o hobby */
        hobby.innerHTML = "Jogar videogame";

        /* Restaura o filme favorito */
        filme.innerHTML = "Interestelar";

        /* Restaura a foto original */
        foto.src = "eu.jpeg";

        /* Restaura o texto do botão */
        botao.innerHTML = "Transformar!";


        /* =========================================
           REMOVENDO CLASSES CSS
        ========================================= */

        /* Remove o modo herói do body */
        document.body.classList.remove("sc_giovane_heroi");


        /* Remove o estilo herói de todos os cards */
        cards.forEach(function(card){

            card.classList.remove("sc_giovane_card_heroi");

        });


        /* =========================================
           ALTERA O ESTADO PARA NORMAL
        ========================================= */

        sc_giovane_modoHeroi = false;
    }

}
    const descricao = document.getElementById("sc_giovane_descricao");

    const idade = document.getElementById("sc_giovane_idade");

    const time = document.getElementById("sc_giovane_time");

    const comida = document.getElementById("sc_giovane_comida");

    const hobby = document.getElementById("sc_giovane_hobby");

    const filme = document.getElementById("sc_giovane_filme");

    const foto = document.getElementById("sc_giovane_foto");

    const botao = document.getElementById("sc_giovane_btn_transformar");

    const cards = document.querySelectorAll(".sc_giovane_card");


    if(sc_giovane_modoHeroi === false){

        nome.innerHTML = "Homem-Aranha";

        descricao.innerHTML =
        "Herói da Marvel com força sobre-humana, sentidos aguçados e habilidade de escalar paredes.";

        idade.innerHTML = "26 anos";

        time.innerHTML = "Vingadores";

        comida.innerHTML = "Comida Japonesa";

        hobby.innerHTML = "Salvar Nova York";

        filme.innerHTML = "Spider-Man: No Aranhaverso";

        foto.src = "heroi.jpg";

        botao.innerHTML = "Voltar";

        document.body.classList.add("sc_giovane_heroi");

        cards.forEach(function(card){

            card.classList.add("sc_giovane_card_heroi");

        });

        sc_giovane_modoHeroi = true;

    }else{

        nome.innerHTML = "Giovane";

        descricao.innerHTML =
        "Sou estudante de desenvolvimento web e gosto de tecnologia, jogos e futebol.";

        idade.innerHTML = "26 anos";

        time.innerHTML = "Corinthians";

        comida.innerHTML = "Churrasco";

        hobby.innerHTML = "Jogar videogame";

        filme.innerHTML = "Interestelar";

        foto.src = "eu.jpeg";

        botao.innerHTML = "Transformar!";

        document.body.classList.remove("sc_giovane_heroi");

        cards.forEach(function(card){

            card.classList.remove("sc_giovane_card_heroi");

        });

        sc_giovane_modoHeroi = false;
    }

}
