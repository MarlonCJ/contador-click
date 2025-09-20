

const aumentar = document.querySelector('#btnAumentar');
const disminuir = document.querySelector('#btnDisminuir');
const resultado = document.querySelector('#resultado');
const resetear = document.querySelector('#btnReset');

let contador = cargarDesdeLocalStorage();


aumentar.addEventListener('click',function(e){
    contador++;
    mostrarResult();
})

disminuir.addEventListener('click',function(e){
    contador--;
    mostrarResult();
})

resetear.addEventListener('click', function(){
    contador = 0;
    mostrarResult();
})


function mostrarResult(){
    resultado.textContent = contador;
    guardarEnLocalStorage();
}

function guardarEnLocalStorage(){
    try{
        localStorage.setItem('cont', contador);
    }catch(error){
        console.error('No se pudo guardar',error.message);
    }
}

function cargarDesdeLocalStorage(){
    try{
        let guardar = localStorage.getItem('cont');
        return guardar ? parseInt(guardar) : 0;
    }catch(error){
        console.error('No se pudo cargar',error.message)
        return 0;
    }
}

mostrarResult();