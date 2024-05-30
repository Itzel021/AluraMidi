function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador);
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function (){
        playSonido(idAudio);
    };

    tecla.onkeydown = function(evento){//cuando esta presionada una tecla
        console.log(evento.code =='Space')
        if(evento.code ==='Space' || evento.code === "Enter"){//Estrictamente igual ===
            tecla.classList.add('activa');
        }
       
    };

    tecla.onkeyup = function(){//cuando se deja de presionar la tecla
        tecla.classList.remove('activa');
    };
};

