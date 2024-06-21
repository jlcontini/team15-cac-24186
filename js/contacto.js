/* Pagina CONTACTO - Formulario */


const formularioContacto = document.getElementById('form-contact');


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-contact").addEventListener('submit', validarFormulario); 
});


function guardarDatos() {

    var nombre = document.getElementById('nombre').value;
    var apellido =  document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var coment = document.getElementById('coment').value;
    var moreInfo = document.getElementById('more-info').value;
    var newsSuscription = document.getElementById('news-suscription').checked;

    let comentarioFormulario = {
        nombre, apellido, email, coment, moreInfo, newsSuscription

        // Otra forma de escribirlo dentro de la variable :
        // nombre : document.getElementById('nombre').value,
        // apellido : document.getElementById('apellido').value,
        // email : document.getElementById('email').value,
        // coment : document.getElementById('coment').value,
        // moreInfo : document.getElementById('more-info').value,
        // newsSuscription : document.getElementById('news-suscription').checked,
    };

    return comentarioFormulario;
}


function submit() {
    alert("El formulario fue enviado correctamente")
    }

 
function validarFormulario(evento) {
    
    evento.preventDefault();

    var nombre = document.getElementById('nombre').value;
    if(nombre.length <= 3) {
    alert('El nombre debe tener mas de 3 caracteres');
    return;
    }

    var apellido = document.getElementById('apellido').value;
    if (apellido.length <= 3) {
    alert('El apellido debe tener mas de 3 caracteres');
    return;
    }

    var email = document.getElementById('email').value;
    if (email.length <= 3) {
    alert('El email debe tener mas de 3 caracteres');
    return
    }

    var coment = document.getElementById('coment').value;
    if (coment.length <= 10) {
    alert('El coment debe tener mas de 10 caracteres')
    return
    }

    formularioValidado = guardarDatos(); // capturo los datos en la variable
    console.log(formularioValidado); 

    submit();
    formularioContacto.reset();
    return true // devuelvo los datos capturados en la variable
}



// /* -- Variables para guardar los datos -- */

// const formRegisterBox=      document.getElementById("form-contact");
// const inputNombre=          document.getElementById("nombre");
// const inputApellido=        document.getElementById("apellido")
// const inputEmail=           document.getElementById("email");
// const inputComent=          document.getElementById("coment");
// const inputMoreInfo=        document.getElementById("more-info");
// const inputNewsSuscription= document.getElementById("news-suscription");

// console.log(formRegisterBox);
// console.log(inputNombre);
// console.log(inputApellido);
// console.log(inputEmail);
// console.log(inputComent);
// console.log(inputMoreInfo);
// console.log(inputNewsSuscription);

// // Validar Formulario - que no sean vacios o que tengan algo. // 
