
/* Pagina CONTACTO - Formulario */

/* -- Variables para guardar los datos -- */
const formRegisterBox=      document.getElementById("box-form");
const inputNombre=          document.getElementById("nombre");
const inputApellido=        document.getElementById("apellido")
const inputEmail=           document.getElementById("email");
const inputComent=          document.getElementById("coment");
const inputMoreInfo=        document.getElementById("more-info");
const inputNewsSuscription= document.getElementById("news-suscription");

// Como integro el error para que aparezca - COMO LO INTEGRO??
const parrafo=document.getElementById("error");

console.log(inputNombre);
console.log(inputApellido);

// Validar Formulario - que no sean vacios o que tengan algo. // 

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit");
} )

function validarFormulario(event) {
    event.preventDefault();
    if (inputNombre <= 3) {
        alert("El nombre debe tener mas de 3 caracteres");
        return
    }
}


// const formRegister=document.getElementById("formulario")
// const inputNombre=document.getElementById("nombre");
// const inputEmail=document.getElementById("email");
// const inputTurno=document.getElementById("turno");
// const parrafo=document.getElementById("error");

// // console.log(inputNombre);

// formRegister.addEventListener("submit",e=>{
// e.preventDefault();
// let warning="";
// let valor=false;
// parrafo.innerHTML="";
// let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// if(inputNombre.value.length<3){
//    warning+=`El nombre es corto<br>`
//    valor=true;
// }
// if(!regexEmail.test(inputEmail.value)){
//     warning+=`El email no es valido<br>`
//     valor=true;
// }
// if(inputTurno.value=="default"){
//     warning+=`Elija una opcion <br>`
//     valor=true;
// }
// if(valor){
//     parrafo.innerHTML=warning;
// }else{
//     parrafo.innerHTML="Enviado";
//     formRegister.reset();
// }
// })

