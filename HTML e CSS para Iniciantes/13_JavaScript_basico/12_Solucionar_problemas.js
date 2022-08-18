const imagens = document.querySelectorAll('#galeria li img');
console.log(imagens);

function galeriaTrocar(event) {
    const principal = document.querySelector('#imagem-principal')
    const clicada = event.currentTarget;
    principal.src = clicada.src;
    principal.alt = clicada.alt;
    
    // ou (a mesma coisa da linha de cima)
    // principal.setAttribute('alt', clicada.getAttribute('alt'));


    // console.log(clicada.src);
    // console.log(clicada.alt);
    // ou
    // console.log(clicada.getAttribute("src"));
}

function galeriaClique (imagem) {
    imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(galeriaClique);