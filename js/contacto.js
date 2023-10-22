const enviar = document.getElementById('enviar');

const validación = (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre.");
    usuario.focus();
    return false;
  }
    
  if (email.value === "") {
    alert("Por favor, escribe tu email");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un email válido");
    emailAddress.focus();
    return false;
  }
  
  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

sumit.addEventListener('click', validate);

function showError() {
  if (email.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent =
      "Debe introducir una dirección de correo electrónico.";
  } else if (email.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent =
      "El valor introducido debe ser una dirección de correo electrónico.";
  } else if (email.validity.tooShort) {
    // Si los datos son demasiado cortos
    // muestra el mensaje de error siguiente.
    emailError.textContent =
      "El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.";
  }

  // Establece el estilo apropiado
  emailError.className = "error activo";
}