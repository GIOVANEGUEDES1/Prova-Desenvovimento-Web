
let sc_giovane_modoHeroi = false;



function sc_giovane_transformar(){
  
    const nome = document.getElementById("sc_giovane_nome");

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