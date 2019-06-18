let password = document.getElementById("contraseña");
let codigo = document.getElementById("codigo");
let newPassword = document.getElementById("contraseña-cifrada");
let cifrar = document.getElementById("cifrar-button");

// console.log(password);
// const showNewPassword = () => {
    // };  
    cifrar.addEventListener("click", () => {
        password=password.value;
        codigo=codigo.value;
        // console.log(password)
        // console.log(codigo);
        // newPassword = newPassword.value
        // console.log(newPassword); 
        let codedPassword = window.cipher.encode(codigo,password); 
        // console.log(codedPassword);
        newPassword.innerHTML = codedPassword;
});
//     