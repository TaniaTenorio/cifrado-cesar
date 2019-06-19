let codedPassword1 = document.getElementById("contraseña-cifrada");
let codigo22 = document.getElementById("codigo2");
let descifrar = document.getElementById("descifrar-button");
let newCodedPassword = document.getElementById("contraseña-descifrada");

descifrar.addEventListener("click", () => {
            let codedPassword = codedPassword1.value;
            let codigo2=codigo22.value;
            // console.log(codedPassword);
            // console.log(codigo2);
            let decodedPassword = window.cipher.decode(codigo2,codedPassword)
            // newCodedPassword.innerHTML = window.cipher.decode(codedPassword,codigo2);
            newCodedPassword.innerHTML = decodedPassword; 
        // newPassword = newPassword.value
        // newPassword.innerHTML = window.cipher.encode(password,codigo);   
    });