//sacamos la url actual
const urlActual = window.location.href;
//guardamos la api url
const apiUrl = 'https://jsonplaceholder.typicode.com/users/';
//buscamos el elemento div para guardar la informacion
const clienteContainer = document.getElementById('cliente-container');

console.log('URL actual:', urlActual);

//buscamos el parametro id que necesitamos para la consulta 
const urlParams = new URLSearchParams(urlActual.split('?')[1]);
//obtenemos el id de la persona que queremos saber mas 
const idCliente = urlParams.get('id');


//Unimos la url de la api con el id para hacer la consulta get
const urlConIdCliente = apiUrl + idCliente;

console.log(idCliente);

console.log(urlConIdCliente);

fetch(urlConIdCliente)
    .then(Response => {
    //Verificamos si la solicitud fue exitosa codigo de estado es 200
        if(!Response.ok){
            throw new Error(`Error de red - Código de estado: ${response.satus}`);
        }
        //Parseamos la respuesta del JSON
        return Response.json();
    })
    .then(data =>{
      //Utilizamos la plantilla para mostrar los datos en un html
    const contenidoCliente = `
        <p>Nombre: ${data.name}</p>
        <p>Username: ${data.username}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Website: ${data.website}</p>
        <p>Company name: ${data.company.name}</p>
        <h2>Address</h2>
        <p>Street: ${data.address.street}</p>
        <p>Suite: ${data.address.suite}</p>
        <p>City: ${data.address.city}</p>
        <p>ZipCode: ${data.address.zipcode}</p>
      `;
        //el contenido de la plantilla lo unimos al div del index.html para mostrarlo
        clienteContainer.innerHTML = contenidoCliente;
    })
    //manejamos el error si no se procede la solicitud
    .catch(error => {
        console.error('Error al realizar la solicitud',error);
    })