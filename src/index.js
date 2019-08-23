let text2cipher = document.getElementById("text2cipher");
let code = document.getElementById("code");
let newPassword = document.getElementById("new-password");
let cipherBtn = document.getElementById("cipher-button"); 
let codedPassword1 = document.getElementById("contraseña-cifrada");
let codigo22 = document.getElementById("codigo2");
let decipherBtn = document.getElementById("decipher-button");
let newCodedPassword = document.getElementById("contraseña-descifrada");

const cipherText = () => {
    let password = text2cipher.value;
    let code2cipher = code.value; 
    let codedPassword = window.cipher.encode(code2cipher,password); 
    newPassword.innerHTML = codedPassword;
};
cipherBtn.addEventListener("click", cipherText);

const decipherText = () => {
    let codedPassword = codedPassword1.value;
    let codigo2=codigo22.value;
    let decodedPassword = window.cipher.decode(codigo2,codedPassword)
    newCodedPassword.innerHTML = decodedPassword; 
}
decipherBtn.addEventListener("click", decipherText);