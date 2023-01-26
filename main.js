

const persona = fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)

        //Nombre
        document.getElementById('nombre').innerHTML =
         `${json.results[0].name.first} ${json.results[0].name.last}`;
        //Imagen
        document.getElementById('img').innerHTML = 
        `<img src="${json.results[0].picture.large}" class="imagen" alt="imagen del postulante">`;
        
        //Datos de contacto
        document.getElementById('direccion').innerHTML = 
        `${json.results[0].location.street.name} 
         ${json.results[0].location.street.number},
         ${json.results[0].location.city}.
         ${json.results[0].location.country}`;

         document.getElementById('telefono').innerHTML =
         `${json.results[0].phone}`;
         
         document.getElementById('email').innerHTML =
         `${json.results[0].email}`;
    })



