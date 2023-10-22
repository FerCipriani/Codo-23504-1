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