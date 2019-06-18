window.cipher = {
  
   encode: (password, codigo) => {
    //  let password="ABC";
    //  let codigo = 2;
     let offset = parseInt(codigo);
     let newPassword= "";
      for(let i=0; i<password.length; i++){
           let char = (password.charAt(i));
          // console.log(char);
       let positionAscii = char.charCodeAt();
       let newPositionAscii = ((positionAscii-32+offset)%95 + 32);
        let newCharacter = String.fromCharCode(newPositionAscii);
      //   newPassword = newCharacter.concat();
       newPassword = newPassword.concat(newCharacter);
      }
      //  document.write(newPassword); 
       return newPassword;
      // console.log(newPassword);   
      },
  
      // console.log(code("ABC",2));
      // document.write (code("ABC",2));

  decode: (password,codigo) => {
    let offset = codigo;
   let newPassword= "";
   for(let i=0; i<password.length; i++){
        let char = (password.charAt(i));
       // console.log(char);
    let positionAscii = char.charCodeAt();
    let newPositionAscii = ((positionAscii-32-offset)%95 + 32);
     let newCharacter = String.fromCharCode(newPositionAscii);
   //   newPassword = newCharacter.concat();
    newPassword = newPassword.concat(newCharacter);
   }
   //  document.write(newPassword); 
    return newPassword;    
}
};