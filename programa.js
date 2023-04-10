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
        //console.log(num1, num2);

        //los argumentos son
        //1.la ruta a la q me voy a conectar
        //2. objeto donde va la configuración de la conexion y de vuelva la rua
        //se puede pasar un json de la peticion
        const respuesta = await fetch(
            'http://localhost:3000/api/sumar',
            {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"//tipo de contenido
                },//instrucciones q tiene q seguir para conectarse con el metodo post
                "body": JSON.stringify({numero_1, numero_2}) //q convierta a json esos dos valores, ed en ese formato
            
            });

            //ahora se convierte esa respuesta al formato q necesite
            const dato = await respuesta.json();

            //valla a ese resultado y tome la respuesta q devolvieron
            const div_resultado =  document.getElementById("resultado");
            div_resultado.innerHTML = dato;

        
    }
)











