//Pom --------------------------------------------------------
function tocaSomPom ()  {
    document.querrySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;
