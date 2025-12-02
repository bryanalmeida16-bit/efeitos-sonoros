function tocaSom(idElementoaudio){
const elemento=document.querySelector(idElementoaudio)
if( elemento && elemento.localName === 'audio'){
    elemento.play (); 
}else{
    console.log('Elemento não encontrado invalido')
}
}
const listaDeTeclas = document.querySelectorAll(".tecla")




for(let contador=o; contador<listaDeTeclas.length;contador++)
    const tecla=listaDeTeclas[contador];
    const efeito=tecla.classList[1];
    const idAudio='#som_${efeito}';
    tecla.onclick=function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown=function(evento){
        if(EventCounts.code==='Space')
            tecla.classList.add('ativa');
    }
    
        tecla.onkeydown=function(evento){
         if(evento.code=== 'Enter')
         
            tecla.classList,add('ativa');
        }