

// const aumentar = document.querySelector('#btnAumentar');
// const disminuir = document.querySelector('#btnDisminuir');
const resultado = document.querySelector('#resultado');
// const resetear = document.querySelector('#btnReset');

let contador = cargarDesdeLocalStorage();


// const botones = {
//     aumentar : document.querySelector('#btnAumentar'),
//     disminuir : document.querySelector('#btnDisminuir'),
//     resetear : document.querySelector('#btnReset'),
// }

document.querySelector('.botones').addEventListener('click', (e) =>{
    if(e.target.id === 'btnAumentar') contador++;
    if(e.target.id === 'btnDisminuir') contador--;
    if(e.target.id === 'btnReset') contador = 0;
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