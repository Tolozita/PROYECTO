const $formulario = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const correo = document.querySelector("#email");
const contrasena = document.querySelector("#password");
const boton = document.querySelector("#botoncito");
const politicas = document.querySelector("#politicas");

const validar = (event) => {

    event.preventDefault();

       if(nombre.value === "")   
        {
           nombre.classList.add("error")
           nombre.focus();
           return
        }

        if(apellido.value === "")   
            {
               apellido.classList.add("error")
               apellido.focus();
               return
            }

        if(correo.value === "")   
            {
                correo.classList.add("error")
                correo.focus();
                return
            }

        if(contrasena.value === "")   
            {
                contrasena.classList.add("error")
                contrasena.focus();
                return
            }
}


const remover = (e, input) => {
    if(input.value != ""){
        input.classList.remove("error")
        input.classList.add("verify")
    }
}




$formulario.addEventListener("submit",validar)
nombre.addEventListener("blur",(event) => {remover(event,nombre)});
apellido.addEventListener("blur",(event) => {remover(event,apellido)});
correo.addEventListener("blur",(event) => {remover(event,correo)});
contrasena.addEventListener("blur",(event) => {remover(event,contrasena)});



nombre.addEventListener('keyup', function() {
    if (nombre.value === "") {
      nombre.classList.remove('verify');
      nombre.classList.add('error');
    } else {
      nombre.classList.remove('error');
      nombre.classList.add('verify');
    }
  });


  apellido.addEventListener('keyup', function() {
    if (apellido.value === "") {
        apellido.classList.remove('verify');
        apellido.classList.add('error');
    } else {
        apellido.classList.remove('error');
        apellido.classList.add('verify');
    }
  });


  correo.addEventListener('keyup', function() {
    if (correo.value === "") {
        correo.classList.remove('verify');
        correo.classList.add('error');
    } else {
        correo.classList.remove('error');
        correo.classList.add('verify');
    }
  });



  correo.addEventListener('keyup', function() {
    if (correo.value === "") {
        correo.classList.remove('verify');
        correo.classList.add('error');
    } else {
        correo.classList.remove('error');
        correo.classList.add('verify');
    }
  });


