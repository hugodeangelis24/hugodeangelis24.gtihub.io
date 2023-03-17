document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById('nombre').value;
  if(nombre.length == 0) {
    alert('No has escrito nada en el nombre');
    return;
  }
  else
  var apellido = document.getElementById('apellido').value;
  if(apellido.length == 0) {
    alert('No has escrito nada en el apellido');
    return;
  }
  else
  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert('No has escrito nada en el mail');
    return;
  }
  alert("Muchas gracias. Me pondré en contacto a la brevedad");
  this.submit();
}