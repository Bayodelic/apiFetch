//Guardamos la url de la api en una variable
const apiURL = 'https://jsonplaceholder.typicode.com/users';
//buscamos el div por el id donde vamos a guardar la tabla 
const datosContainer = document.getElementById('datos-container');


//Realizamos la solicitud GET utilizando fetch
fetch(apiURL)
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
    const contenidoTabla = `
        <table>
  <caption>
        Customer
  </caption>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Usermane</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Show more</th>
    </tr>
  </thead>
  <tbody>
      <!-- Utilizamos la funcion map para leer el arreglo de los datos -->
    ${data.map(objeto => `
    <tr>
        <!-- Usamos la interpolacion para mostrar los resultados del recorrido del arreglo -->
        <th id="ObjetoId">${objeto.id}</th>        
        <th>${objeto.name}</th>
        <td>${objeto.username}</td>
        <td>${objeto.email}</td>
        <td>${objeto.phone}</td>
        <!--mandamos la url al otro html donde vamos a mostrar al cliente como parametros el id-->
        <td><a href='detalleCliente.html?id=${objeto.id}'>Show more</a></td>
    </tr>
    `).join('')}
  </tbody>
</table>
      `;
        //el contenido de la plantilla lo unimos al div del index.html para mostrarlo
        datosContainer.innerHTML = contenidoTabla;
    })
    //manejamos el error si no se procede la solicitud
    .catch(error => {
        console.error('Error al realizar la solicitud',error);
    })


