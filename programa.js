
// 1. Tener una referencia al elemento del DOM al que queremos agregarle el eventlistener
const miBoton = document.getElementById("submit");
//Se ve como esta tomando el js el dom
//console.log(miBoton);

//2. Agregando el eventlistener
//Tiene dos argumentos
miBoton.addEventListener(
    'click',
    async (event)=>{
        //prevenga el evento predeterminado del botos
        //no haga lo q siempre hace
        event.preventDefault();

        //console.log(event);
        //se necesita es el atributo valor de ese elemento
        const numero_1 = parseFloat(document.getElementById("num1").value);
        const numero_2 = parseFloat(document.getElementById("num2").value);
        //console.log(numero_1, numero_2);

        /*
        //los argumentos son
        //1.la ruta a la q me voy a conectar
        //2. objeto donde va la configuración de la conexion y de vuelva la rua
        //se puede pasar un json de la peticion
        const respuesta = await fetch(
            'http://localhost:3000/sumar',
                {
                    "method": "POST",
                    "mode":'no-cors',
                    "headers": {
                        "Content-Type": "application/json"//tipo de contenido
                    },//instrucciones q tiene q seguir para conectarse con el metodo post
                    "body": JSON.stringify({numero_1, numero_2}) //q convierta a json esos dos valores, ed en ese formato
                }
         );

            //ahora se convierte esa respuesta al formato q necesite
            let dato = respuesta.json();
            console.log(dato);

        */
       
            var url = 'http://localhost:3000/sumar';
            var data = {numero_1: numero_1, numero_2: numero_2 };

            var response;  // Declarar la variable response globalmente
            fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(res => {
                response = res;  // Asignar el valor de res a la variable response
                // Aquí puedes realizar cualquier otra operación con la variable response
                console.log(response); // Acceder a la variable response globalmente
                const div_resultado =  document.getElementById("resultado");
                        div_resultado.innerHTML = response;
              });

                        //valla a ese resultado y tome la respuesta q devolvieron
                        

        
    }
)











