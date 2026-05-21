// Variável que controla se está no modo herói
// false = modo normal
// true = modo herói

let sc_giovane_modoHeroi = false;



// Função executada ao clicar no botão
function sc_giovane_transformar(){

    // Pega o elemento do nome pelo ID
    const nome = document.getElementById("sc_giovane_nome");

    // Pega a descrição
    const descricao = document.getElementById("sc_giovane_descricao");

    // Pega a idade
    const idade = document.getElementById("sc_giovane_idade");

    // Pega o time
    const time = document.getElementById("sc_giovane_time");

    // Pega a comida favorita
    const comida = document.getElementById("sc_giovane_comida");

    // Pega o hobby
    const hobby = document.getElementById("sc_giovane_hobby");

    // Pega o filme favorito
    const filme = document.getElementById("sc_giovane_filme");

    // Pega a imagem
    const foto = document.getElementById("sc_giovane_foto");

    // Pega o botão
    const botao = document.getElementById("sc_giovane_btn_transformar");

    // Seleciona TODOS os cards com essa classe
    const cards = document.querySelectorAll(".sc_giovane_card");


    // Verifica se NÃO está no modo herói
    if(sc_giovane_modoHeroi === false){

        // Troca o nome
        nome.innerHTML = "Homem-Aranha";

        // Troca a descrição
        descricao.innerHTML =
        "Herói da Marvel com força sobre-humana, sentidos aguçados e habilidade de escalar paredes.";

        // Troca a idade
        idade.innerHTML = "26 anos";

        // Troca o time
        time.innerHTML = "Vingadores";

        // Troca a comida
        comida.innerHTML = "Comida Japonesa";

        // Troca o hobby
        hobby.innerHTML = "Salvar Nova York";

        // Troca o filme
        filme.innerHTML = "Spider-Man: No Aranhaverso";

        // Troca a imagem
        foto.src = "heroi.jpg";

        // Troca o texto do botão
        botao.innerHTML = "Voltar";

        // Adiciona uma classe CSS no body
        document.body.classList.add("sc_giovane_heroi");

        // Percorre todos os cards
        cards.forEach(function(card){

            // Adiciona classe de herói em cada card
            card.classList.add("sc_giovane_card_heroi");

        });

        // Ativa o modo herói
        sc_giovane_modoHeroi = true;

    }else{

        // Volta o nome original
        nome.innerHTML = "Giovane";

        // Volta a descrição original
        descricao.innerHTML =
        "Sou estudante de desenvolvimento web e gosto de tecnologia, jogos e futebol.";

        // Volta idade
        idade.innerHTML = "26 anos";

        // Volta time
        time.innerHTML = "Corinthians";

        // Volta comida
        comida.innerHTML = "Churrasco";

        // Volta hobby
        hobby.innerHTML = "Jogar videogame";

        // Volta filme
        filme.innerHTML = "Interestelar";

        // Volta imagem original
        foto.src = "eu.jpeg";

        // Volta texto do botão
        botao.innerHTML = "Transformar!";

        // Remove classe do body
        document.body.classList.remove("sc_giovane_heroi");

        // Percorre todos os cards
        cards.forEach(function(card){

            // Remove classe de herói
            card.classList.remove("sc_giovane_card_heroi");

        });

        // Desativa modo herói
        sc_giovane_modoHeroi = false;
    }

}
