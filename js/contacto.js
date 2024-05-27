/* Pagina CONTACTO - Formulario */


function submit() {
    alert("El formulario fue enviado correctamente")
    }


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-contact").addEventListener('submit', validarFormulario); 
  });
  
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
        if (coment.length <= 1) {
            alert('El coment debe tener mas de 1 caracter')
            return
        }

        this.submit();
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
