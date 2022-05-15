// document.body.onload(
//     alert("prueba")
// )

function circulo(){
    var selector = document.getElementById ("figura"); /*captura la figura. Document hace referencia al HTML*/
    selector.className = " "; /*limpia las clases activas, no las suma*/ 
    selector.classList.toggle("circulo"); /*agregar una clase a la lista de clases que ya tengo ("add") "toggle" es un switch de clases. Un elemento puede tener un ID y varias clases*/
}

function arriba(){
    var selector = document.getElementById ("figura"); 
    selector.className = " ";
    selector.classList.toggle("arriba");

}

function abajo(){
    var selector = document.getElementById ("figura");
    selector.className = " ";
    selector.classList.toggle("abajo");
}

function izq(){
    var selector = document.getElementById ("figura");
    selector.className = " ";
    selector.classList.toggle("izq");
}

function der(){
    var selector = document.getElementById ("figura");
    selector.className = " ";
    selector.classList.toggle("der");
}

function diaSupDer(){
    var selector = document.getElementById ("figura");
    selector.className = " ";
    selector.classList.toggle("diaSupDer");
}

function diaInfDer(){
    var selector = document.getElementById ("figura");
    selector.className = " ";
    selector.classList.toggle("diaInfDer");
}

function diaSupIzq(){
    var selector = document.getElementById ("figura");
    selector.className = " ";
    selector.classList.toggle("diaSupIzq");
}

function diaInfIzq(){
    var selector = document.getElementById ("figura");
    selector.className = " ";
    selector.classList.toggle("diaInfIzq");
}

function imagen(){
    var selector = document.getElementById ("figura");
    selector.className = " ";
    selector.classList.toggle("imagen");
}

function rombo(){
    var selector = document.getElementById ("figura");
    selector.className = " ";
    selector.classList.toggle("rombo");
}

// FUNCIONES FORMULARIO
    // capturamos los valores en variables a través de sus ID y el atributo .value

function capturarDatos(){
    var nombre = document.getElementById ("cNombres").value;   // id del input. Todo valor que va despues del parentesis es un atributo del elemento HTML que lleva ese ID
    var edad = document.getElementById ("cEdad").value;
    var fecha = document.getElementById ("cFecha").value;
    var genero = document.getElementById ("cGenero").value;
    var email = document.getElementById ("cEmail").value;
    var descrip = document.getElementById ("cDescripcion").value;
    var color = document.getElementById ("cColor").value;
    


    // alert(color);

    // capturamos los parrafos donde mostraremosla info

    var name = document.getElementById ("mNombres");
    var years = document.getElementById ("mEdad");
    var date = document.getElementById ("mFecha");
    var genre = document.getElementById ("mGenero");
    var e_mail = document.getElementById ("mEmail");
    var description = document.getElementById ("mDescripcion");
    
    

    name.textContent = nombre;
    years.textContent = edad;
    date.textContent = fecha;
    genre.textContent = genero;
    e_mail.textContent = email;
    description.textContent = descrip;

    // capturamos el contenedor del avatar, para luego cambiara su color de fondo

    var selector = document.getElementById("card-avatar");

    // if (color == "Amarillo") {
    //     selector.style.backgroundColor = '#edfa74ca';

    // } else if (color == "Azul"){
    //     selector.style.backgroundColor = '#74dbfaca';

    // } else if (color == "Rojo") {
    //     selector.style.backgroundColor = '#fa7474ca';   
    // }

    switch (color) { // a traves de style me voy directamente al css, en ese caso estoy cambiando el color que previamente se habia asignado al card vatar en css
        case "Amarillo":
            selector.style.backgroundColor = '#edfa74ca';
            break;
        case "Azul":
            selector.style.backgroundColor = '#74dbfaca';
            break;
        case "Rojo":
            selector.style.backgroundColor = '#fa7474ca';
            break;
    
        default:
            selector.style.backgroundColor = ' ';
            break;
    }

    // Capturamos el contenedor de la imagen a través de su ID

    var imagen = document.getElementById ("foto"); // en cambio aqui, voy a ingresar al HTML porque alli fue donde se creó el src de la imagen

    if (genero == "Masculino") {
        imagen.src = "img/avatar1.png";
        imagen.alt = "Avatar masculino";
    } else if (genero == "Femenino") {
        imagen.src = "img/avatar2.png";
        imagen.alt = "Avatar femenino";
    } else {
        imagen.src = "img/avatar.png"
        imagen.alt = "Avatar por defecto"
        //imagen.style.backgroundImage = url ('ruta '); en caso de que declaro el atributo desde css
    }

    //otra forma es crear 4 botones desde el formumario, con las 4 imágenes de avatar, capturar el contenedor de la foto (ID) y enviar las imagenes desde alli al contenedor
    // la calculadora se hace con un switch, si es tal valor, haga esta operacion, es muy similar a esto
}

    





