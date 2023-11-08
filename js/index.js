function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (username === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    if (!emailRegex.test(username)) {
        alert("Por favor, ingresa una dirección de correo electrónico válida.");
        return false;
    }

    // Aquí puedes agregar lógica adicional para verificar la contraseña, como longitud, caracteres especiales, etc.

    return true; // El formulario se enviará si todo es válido.
}