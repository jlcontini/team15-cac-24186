/* Pagina CONTACTO - Formulario */

/* -- Variables para guardar los datos -- */
const formRegisterBox=      document.getElementById("form-contact");
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


// Funcion para validar 'formRegisterBox'

function validar_enviar() {

    // validar 'inputNombre'
    if (document.formRegisterBox.inputNombre.value.length == "") {
    alert("Tiene que escribir su nombre")
    document.formRegisterBox.inputNombre.focus()
    return 0;
    }


}


