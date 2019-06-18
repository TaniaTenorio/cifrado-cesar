let password = document.getElementById("contraseña");
let codigo = document.getElementById("codigo");
let newPassword = document.getElementById("contraseña-cifrada");
let cifrar = document.getElementById("cifrar-button");
let codigo2 = document.getElementById("codigo2");
let descifrar = document.getElementById("descifrar-button");
let codedPassword = document.getElementById("contraseña-cifrada");
let newCodedPassword = document.getElementById("contraseña-descifrada");
// console.log(password);
// const showNewPassword = () => {
    // };  
    cifrar.addEventListener("click", () => {
        password=password.value;
        codigo=codigo.value;
        // console.log(password)
        // console.log(codigo);
        // newPassword = newPassword.value
        // newPassword.innerHTML = window.cipher.encode(password,codigo);
        newPassword.innerHTML = window.cipher.encode(password,codigo); 
});
    descifrar.addEventListener("click", () => {
        codedPassword = codedPassword.value;
        codigo2=codigo2.value;
        // console.log(codedPassword);
        // console.log(codigo2);
        newCodedPassword.innerHTML = window.cipher.decode(codedPassword,codigo2); 
    // newPassword = newPassword.value
    // newPassword.innerHTML = window.cipher.encode(password,codigo);   
});