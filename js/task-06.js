// Escriba un script que, si se pierde el enfoque en un input (evento blur), el script comprobará el contenido del instupt para ver si el número de símbolos introducidos es correcto.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// El número de símbolos que debe tener un input se especifica en su atributo data-length.
// Si se introduce el número correcto de símbolos, border del intuplet se convierte en verde, si no es correcto se vuelve rojo.
// Para añadir estilos, use las clases CSS valid e invalid, que ya tenemos añadido a los archivos de origen del trabajo.
const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', () => {

    const validator = Number(inputText.getAttribute('data-length'));

    if(validator === inputText.value.length){
        inputText.classList.add('valid');
    } else {
        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    }
})