let boton = document.getElementById("menu");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
        enlaces.className = ('enlaces uno');
        contador=0;
    }
})


/*-----------------IMAGENES ANIMATION----------------------*/

$(document).ready(function(){
    
    setTimeout(function(){
        $('.carteli').fadeIn(1500);    
    },1500);

    setTimeout(function(){
        $('.cartamenui').fadeIn(1500);    
    },2000);

    setTimeout(function(){
        $('.reporterai').fadeIn(1500);    
    },2500);


    $('.carteli').mouseover(function(){
        $('.carteltext').fadeIn(1000);
    });

    $('.cartamenui').mouseover(function(){
        $('.cartatext').fadeIn(1000);
    });

    $('.reporterai').mouseover(function(){
        $('.notitext').fadeIn(1000);
    });


});