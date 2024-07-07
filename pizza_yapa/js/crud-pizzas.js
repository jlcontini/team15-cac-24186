const BASEURL = 'http://127.0.0.1:5000';

/**
 * Función para realizar una petición fetch con JSON.
 * @param {string} url - La URL a la que se realizará la petición.
 * @param {string} method - El método HTTP a usar (GET, POST, PUT, DELETE, etc.).
 * @param {Object} [data=null] - Los datos a enviar en el cuerpo de la petición.
 * @returns {Promise<Object>} - Una promesa que resuelve con la respuesta en formato JSON.
 */
async function fetchData(url, method, data = null) {
  const options = {
      method: method,
      headers: {
          'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : null,  // Si hay datos, los convierte a JSON y los incluye en el cuerpo
  };
  try {
    const response = await fetch(url, options);  // Realiza la petición fetch
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();  // Devuelve la respuesta en formato JSON
  } catch (error) {
    console.error('Fetch error:', error);
    alert('An error occurred while fetching data. Please try again.');
  }
}

/**
 * Función para comunicarse con el servidor para poder Crear o Actualizar
 * un registro de pizza
 * @returns 
 */
async function savePizza(){
  const idPizza = document.querySelector('#id-pizza').value;
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const banner = document.querySelector('#banner-form').value;

  //VALIDACION DE FORMULARIO
  if (!title || !description || !banner) {
    Swal.fire({
        title: 'Error!',
        text: 'Por favor completa todos los campos.',
        icon: 'error',
        confirmButtonText: 'Cerrar'
    });
    return;
  }
  // Crea un objeto con los datos de la pizza
  const pizzaData = {
      title: title,
      description: description,
      banner: banner,
  };

    
  let result = null;
  // Si hay un idMovie, realiza una petición PUT para actualizar la pizza existente
  if(idPizza!==""){
    result = await fetchData(`${BASEURL}/api/pizzas/${idPizza}`, 'PUT', pizzaData);
  }else{
    // Si no hay idMovie, realiza una petición POST para crear una nueva pizza
    result = await fetchData(`${BASEURL}/api/pizzas/`, 'POST', pizzaData);
  }
  
  const formPizza = document.querySelector('#form-pizza');
  formPizza.reset();
  Swal.fire({
    title: 'Exito!',
    text: result.message,
    icon: 'success',
    confirmButtonText: 'Cerrar'
  })
  showPizzas();
}


/**
 * Funcion que permite crear un elemento <tr> para la tabla de pizzas
 * por medio del uso de template string de JS.
 */
async function showPizzas(){
  let pizzas =  await fetchData(BASEURL+'/api/pizzas/', 'GET');
  const tablePizzas = document.querySelector('#list-table-pizzas tbody');
  tablePizzas.innerHTML='';
  pizzas.forEach((pizza,index) => {
    let tr = `<tr>
                  <td>${pizza.title}</td>
                  <td>${pizza.description}</td>
                  <td>
                      <img src="${pizza.banner}" width="30%">
                  </td>
                  <td>
                      <button class="btn-cac" onclick='updatePizza(${pizza.id_pizza})'><i class="fa fa-pencil" ></button></i>
                      <button class="btn-cac" onclick='deletePizza(${pizza.id_pizza})'><i class="fa fa-trash" ></button></i>
                  </td>
                </tr>`;
    tablePizzas.insertAdjacentHTML("beforeend",tr);
  });
}
  
/**
 * Function que permite eliminar una pizza del array del localstorage
 * de acuedo al indice del mismo
 * @param {number} id posición del array que se va a eliminar
 */
function deletePizza(id){
  Swal.fire({
      title: "¿Está seguro de eliminar este registro?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
  }).then(async (result) => {
      if (result.isConfirmed) {
        let response = await fetchData(`${BASEURL}/api/pizzas/${id}`, 'DELETE');
        showPizzas();
        Swal.fire(response.message, "", "success");
      }
  });
  
}


/**
 * Function que permite cargar el formulario con los datos de la pizza 
 * para su edición
 * @param {number} id Id de la pizza que se quiere editar
 */
async function updatePizza(id){
  //Buscamos en el servidor la pizza de acuerdo al id
  let response = await fetchData(`${BASEURL}/api/pizzas/${id}`, 'GET');
  const idPizza = document.querySelector('#id-pizza');
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const banner = document.querySelector('#banner-form');
  
  idPizza.value = response.id_pizza;
  title.value = response.title;
  description.value = response.description;
  banner.value = response.banner;
}
  
// Escuchar el evento 'DOMContentLoaded' que se dispara cuando el 
// contenido del DOM ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded',function(){
  const btnSavePizza = document.querySelector('#btn-save-pizza');
  //ASOCIAR UNA FUNCION AL EVENTO CLICK DEL BOTON
  btnSavePizza.addEventListener('click',savePizza);
  showPizzas();
});