const validCredentials = {
    username: "usuario",
    password: "contraseña",
};

export function isValidUsername(username) {
    // Validar que el usuario tenga un dominio válido
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(username);
}

export function isValidPassword(password) {
    // Validar que la contraseña cumpla con los requisitos
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
}

export function isValidCredentials(username, password) {
    // Validar si las credenciales coinciden con las credenciales válidas
    return (
        username === validCredentials.username &&
        password === validCredentials.password
    );
}  