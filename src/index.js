let password1 = document.getElementById("contraseña");
let codigo1 = document.getElementById("codigo");
let newPassword = document.getElementById("contraseña-cifrada");
let cifrar = document.getElementById("cifrar-button");

// console.log(password);
// const showNewPassword = () => {
    // };  
    cifrar.addEventListener("click", () => {
       let password=password1.value;
        let codigo=codigo1.value;
        // console.log(password)
        // console.log(codigo);
        // newPassword = newPassword.value
        // console.log(newPassword); 
        let codedPassword = window.cipher.encode(codigo,password); 
        // console.log(codedPassword);
        newPassword.innerHTML = codedPassword;
});
//     