window.cipher = {
  
//   const newPassword = "";
// for(i=0; i<password.length; i++){//iterar cada letra del password
    
//     newPassword += password.charAt(i);//meter cada letra nueva a password cifrado
// };

 code = (password, codigo) => {
   
   for(i=0; i<password.length; i++){
    let char = password.charAt(i)
    let positionAscii = char.charCodeAt();
   let offset = codigo;
   let newPositionAscii = ((positionAscii-65+offset)%26 + 65);
   let newCharacter = String.fromCharCode(newPositionAscii);
   let newPassword += newCharater;
};
console.log(code("Z",2));
};
