let codedPassword = document.getElementById("contraseña-cifrada");
let codigo2 = document.getElementById("codigo2");
let descifrar = document.getElementById("descifrar-button");
let newCodedPassword = document.getElementById("contraseña-descifrada");

descifrar.addEventListener("click", () => {
            codedPassword = codedPassword.value;
            codigo2=codigo2.value;
            // console.log(codedPassword);
            // console.log(codigo2);
            let decodedPassword = window.cipher.decode(codigo2,codedPassword)
            // newCodedPassword.innerHTML = window.cipher.decode(codedPassword,codigo2);
            newCodedPassword.innerHTML = decodedPassword; 
        // newPassword = newPassword.value
        // newPassword.innerHTML = window.cipher.encode(password,codigo);   
    });