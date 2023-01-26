

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

        //Presentacion
        document.getElementById('nombre2').innerHTML =
            `${json.results[0].name.first} ${json.results[0].name.last}`
        document.getElementById('edad').innerHTML =
            `${json.results[0].dob.age}`
        document.getElementById('nacionalidad').innerHTML =
            `${json.results[0].location.country}`

        //Datos de contacto
        document.getElementById('direccion').innerHTML =
            `<a href="https://www.google.com/maps/">
         ${json.results[0].location.street.name} 
         ${json.results[0].location.street.number},
         ${json.results[0].location.city}.
         ${json.results[0].location.country}
          </a>`;

        document.getElementById('telefono').innerHTML =
            `<a href="tel:${json.results[0].phone}">
         ${json.results[0].phone}
          </a>`;

        document.getElementById('email').innerHTML =
            `<a href="mailto:${json.results[0].email}">
         ${json.results[0].email}
          </a>`;
    })

  //Recargar pagina - Pedir nuevo usuario
document.getElementById('boton').addEventListener("click", function(){
    console.log("hice click");
    location.reload();
})

