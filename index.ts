let readMore_btn = document.getElementById('readMore_btn') as HTMLButtonElement;
let hideText = document.getElementById('hideText') as HTMLDivElement;

readMore_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('showText');

  if (hideText.classList.contains('showText')) {
    readMore_btn.innerHTML = '-'
  }
  else {
    readMore_btn.innerHTML = '+'
  }
}

//-----------------------------------------------------------------------------
const inputNombre = document.getElementById("contactForm1") as HTMLInputElement;
const inputEmpresa = document.getElementById("contactForm2") as HTMLInputElement; // deberia ser opcional ?
const inputEmail = document.getElementById("contactForm3") as HTMLInputElement;
const inputTelefono = document.getElementById("contactForm4") as HTMLInputElement;
const inputLocalidad = document.getElementById("contactForm5") as HTMLInputElement;
const inputComentario = document.getElementById("contactForm6") as HTMLInputElement;

const btnSend = document.getElementById("contact-btn") as HTMLButtonElement;
btnSend.disabled = true  //si utilizamos la clase quitar esto?

//const parmensaje = document.getElementById("mensaje") as HTMLParagraphElement; // para mensajes de error en pantalla.
//-----------------------------------------------------------------------------
function enviarMensaje(texto: string) {
  //  alert(texto);
  console.log(texto);
  // o enviarlo a pantalla
  //parmensaje.innerText = texto;
}
//-----------------------------------------------------------------------------
function isValidText(texto: string): boolean {
  //  console.log({texto});  
  return (texto.length >= 3 && texto.length <= 50);
}
//-----------------------------------------------------------------------------
function isValidEmail(texto: string): boolean {
  //  console.log({texto});
  const emailRegex: RegExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
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
function isValidPhone(texto: string): boolean {
  console.log({ texto });
  const emailRegex: RegExp = /^[0-9- \(\+)]{0,63}$/;
  return emailRegex.test(texto);
}
//-----------------------------------------------------------------------------
function isFormComplete(): boolean {
  let isComplete: boolean = (isValidText(inputNombre.value)
    && isValidText(inputEmpresa.value)
    && isValidEmail(inputEmail.value)
    && isValidPhone(inputTelefono.value)
    && isValidText(inputLocalidad.value)
    && isValidText(inputComentario.value));
  //console.log({isComplete});

  if (isComplete) {
    if (btnSend.classList.contains("disabled")) btnSend.classList.remove("disabled")
  } else {
    if (!btnSend.classList.contains("disabled")) btnSend.classList.add("disabled");
  }
  return isComplete;
  //  return isValid() && isValidNombre() && isValidTelefono() && isValidEmail() && isValidLocalidad() && isValidComentario() 
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
inputNombre.addEventListener("input", () => {
  let nombre: string = String(inputNombre.value);
  btnSend.disabled = true;
  if (!isValidText(nombre)) {
    enviarMensaje("Ingrese su nombre.");
    return
  }
  if (isFormComplete()) btnSend.disabled = false; //habilitar boton 
});
//-----------------------------------------------------------------------------
inputEmpresa.addEventListener("input", () => {
  let emmpresa: string = String(inputEmpresa.value);
  btnSend.disabled = true;
  if (!isValidText(emmpresa)) {
    enviarMensaje("Ingrese el nombre de su empresa.");
    return
  }
  if (isFormComplete()) btnSend.disabled = false; //habilitar boton 
});
//-----------------------------------------------------------------------------
inputEmail.addEventListener("input", () => {
  let email: string = String(inputEmail.value);
  btnSend.disabled = true;
  if (!isValidEmail(email)) {
    enviarMensaje("Ingrese un correo electrónico válido.");
    return
  }
  if (isFormComplete()) btnSend.disabled = false; //habilitar boton 
});
//-----------------------------------------------------------------------------
inputTelefono.addEventListener("input", () => {
  //  inputEmail = event.target;
  let phone: string = String(inputTelefono.value);
  btnSend.disabled = true;
  if (!isValidPhone(phone)) {
    enviarMensaje("Ingrese un número de telefono.");  //throw new Error(    'No es un nro de telefono valido')
    return
  }
  if (isFormComplete()) btnSend.disabled = false; //habilitar boton 
});
//-----------------------------------------------------------------------------
inputLocalidad.addEventListener("input", () => {
  let localidad: string = String(inputLocalidad.value);
  btnSend.disabled = true;
  if (!isValidText(localidad)) {
    enviarMensaje("Ingrese el nombre de su Localidad.");
    return
  }
  if (isFormComplete()) btnSend.disabled = false; //habilitar boton   
});
//-----------------------------------------------------------------------------
inputComentario.addEventListener("input", () => {
  let comentario: string = String(inputComentario.value);
  btnSend.disabled = true;
  if (!isValidText(comentario)) {
    enviarMensaje("Ingrese una breve descripción del problema.");
    return
  }
  if (isFormComplete()) btnSend.disabled = false; //habilitar boton   
});
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
btnSend.addEventListener("click", () => {
  // validar. no ya viene validdado.
  // let dato: string = inputNombre.value;
  // let email: string = inputEmail.value;
//  alert("Datos enviados con éxito. En breve nos contactaremos. Muchas gracias por consultarnos.");
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