var readMore_btn = document.getElementById('readMore_btn');
var hideText = document.getElementById('hideText');
readMore_btn.addEventListener('click', toggleText);
function toggleText() {
    hideText.classList.toggle('showText');
    if (hideText.classList.contains('showText')) {
        readMore_btn.innerHTML = '-';
    }
    else {
        readMore_btn.innerHTML = '+';
    }
}
//-----------------------------------------------------------------------------
var inputNombre = document.getElementById("contactForm1");
var inputEmpresa = document.getElementById("contactForm2"); // deberia ser opcional ?
var inputEmail = document.getElementById("contactForm3");
var inputTelefono = document.getElementById("contactForm4");
var inputLocalidad = document.getElementById("contactForm5");
var inputComentario = document.getElementById("contactForm6");
var btnSend = document.getElementById("contact-btn");
btnSend.disabled = true; //si utilizamos la clase quitar esto?
//const parmensaje = document.getElementById("mensaje") as HTMLParagraphElement; // para mensajes de error en pantalla.
//-----------------------------------------------------------------------------
function enviarMensaje(texto) {
    //  alert(texto);
    console.log(texto);
    // o enviarlo a pantalla
    //parmensaje.innerText = texto;
}
//-----------------------------------------------------------------------------
function isValidText(texto) {
    //  console.log({texto});  
    return (texto.length >= 3 && texto.length <= 50);
}
//-----------------------------------------------------------------------------
function isValidEmail(texto) {
    //  console.log({texto});
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return emailRegex.test(texto);
    /*  valido = document.getElementById('emailOK');
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(texto)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "incorrecto";
    }*/
}
//-----------------------------------------------------------------------------
function isValidPhone(texto) {
    console.log({ texto: texto });
    var emailRegex = /^[0-9- \(\+)]{0,63}$/;
    return emailRegex.test(texto);
}
//-----------------------------------------------------------------------------
function isFormComplete() {
    var isComplete = (isValidText(inputNombre.value)
        && isValidText(inputEmpresa.value)
        && isValidEmail(inputEmail.value)
        && isValidPhone(inputTelefono.value)
        && isValidText(inputLocalidad.value)
        && isValidText(inputComentario.value));
    //console.log({isComplete});
    if (isComplete) {
        if (btnSend.classList.contains("disabled"))
            btnSend.classList.remove("disabled");
    }
    else {
        if (!btnSend.classList.contains("disabled"))
            btnSend.classList.add("disabled");
    }
    return isComplete;
    //  return isValid() && isValidNombre() && isValidTelefono() && isValidEmail() && isValidLocalidad() && isValidComentario() 
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
inputNombre.addEventListener("input", function () {
    var nombre = String(inputNombre.value);
    btnSend.disabled = true;
    if (!isValidText(nombre)) {
        enviarMensaje("Ingrese su nombre.");
        return;
    }
    if (isFormComplete())
        btnSend.disabled = false; //habilitar boton 
});
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
inputEmpresa.addEventListener("input", function () {
    var emmpresa = String(inputEmpresa.value);
    btnSend.disabled = true;
    if (!isValidText(emmpresa)) {
        enviarMensaje("Ingrese el nombre de su empresa.");
        return;
    }
    if (isFormComplete())
        btnSend.disabled = false; //habilitar boton 
});
//-----------------------------------------------------------------------------
inputEmail.addEventListener("input", function () {
    var email = String(inputEmail.value);
    btnSend.disabled = true;
    if (!isValidEmail(email)) {
        enviarMensaje("Ingrese un correo electrónico válido.");
        return;
    }
    if (isFormComplete())
        btnSend.disabled = false; //habilitar boton 
});
//-----------------------------------------------------------------------------
inputTelefono.addEventListener("input", function () {
    //  inputEmail = event.target;
    var phone = String(inputTelefono.value);
    btnSend.disabled = true;
    if (!isValidPhone(phone)) {
        enviarMensaje("Ingrese un número de telefono."); //throw new Error(    'No es un nro de telefono valido')
        return;
    }
    if (isFormComplete())
        btnSend.disabled = false; //habilitar boton 
});
//-----------------------------------------------------------------------------
inputLocalidad.addEventListener("input", function () {
    var localidad = String(inputLocalidad.value);
    btnSend.disabled = true;
    if (!isValidText(localidad)) {
        enviarMensaje("Ingrese el nombre de su Localidad.");
        return;
    }
    if (isFormComplete())
        btnSend.disabled = false; //habilitar boton   
});
//-----------------------------------------------------------------------------
inputComentario.addEventListener("input", function () {
    var comentario = String(inputComentario.value);
    btnSend.disabled = true;
    if (!isValidText(comentario)) {
        enviarMensaje("Ingrese una breve descripción del problema.");
        return;
    }
    if (isFormComplete())
        btnSend.disabled = false; //habilitar boton   
});
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
btnSend.addEventListener("click", function () {
    // validar. no ya viene validdado.
    // let dato: string = inputNombre.value;
    // let email: string = inputEmail.value;
    alert("Datos enviados con éxito. En breve nos contactaremos. Muchas gracias por consultarnos.");
    console.log("Datos enviados con éxito. En breve nos contactaremos. Muchas gracias por consultarnos.");
    // limpiar el form.
    //    btnSend.hidden = true;  
    btnSend.disabled = true;
    inputNombre.value = "";
    inputEmpresa.value = "";
    inputEmail.value = "";
    inputTelefono.value = "";
    inputLocalidad.value = "";
    inputComentario.value = "";
    // ¿ subir al inicio de la pagina ?
});
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
/*function isValidNumber(dato: number): boolean {
  return dato > 0;
}*/
//-----------------------------------------------------------------------------
