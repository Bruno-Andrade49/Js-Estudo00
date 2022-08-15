"use strict"

function tocarSom (indice) {
    const elemento = document.querySelector(indice);

    if(elemento == null) {
        console.log("Elemento não indentificado!")
    } else {
        elemento.play();
    }
}

const listaElementos = document.querySelectorAll('.tecla');

for (let index = 0; index < listaElementos.length; index++) {

    const teclas = listaElementos[index];
    const instrumento = teclas.classList[1];
    const teclaSom = `#som_${instrumento}`;

    
    teclas.onclick = function () {
        tocarSom(teclaSom)
    }
    
    teclas.onkeydown = function (e) {
        if(e.code === "Enter" || e.code === "space") {
            teclas.classList.add('ativa');
        }
    }

    teclas.onkeyup = function () {
        teclas.classList.remove('ativa');
    }
}

/*document.addEventListener("keypress", function (e) {
    let contador = 49;
    for (let index = 0; index < listaElementos.length; index++) {
        
        if(e.keyCode === 49) {

            const teclas = listaElementos[index];
            const instrumento = teclas.classList[1];
            const teclaSom = `.${instrumento}`;

            var btn = document.querySelector(teclaSom);
            document.querySelector(teclaSom).classList.add('ativa')
            btn.click();
            contador += 1;
            console.log(contador);
        }
        
    }
})

document.addEventListener('keyup', function(e) {
    if(e.keyCode === 49) {
        document.querySelector('.tecla_pom').classList.remove('ativa')
    }
})
*/
