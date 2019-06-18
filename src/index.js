let password = document.getElementById("contrasena");
let codigo = document.getElementById("codigo");
let cifrar = document.getElementById("cifrar-button");
// let descifrar = document.getElementById("descifrar-button");
// let newPassword = document.getElementById("contraseña-cifrada");
// console.log(password);

// const showNewPassword = () => {
    
    // };
    
    cifrar.addEventListener("click", () => {
        password=password.value;
        codigo=codigo.value;
        // console.log(password)
        // console.log(codigo);
         window.cipher.code(password,codigo).innerHMTL;
        //  newPassword = printNewPassword;
        //   console.log(newPassword);
});


// console.log (showNewPassword);



