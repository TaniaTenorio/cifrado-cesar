window.cipher = {
   encode: (offset, string) => {
    //  let password="ABC";
    //  let codigo = 2;
      offset = parseInt(offset);
     let newString= "";
    //  string = string.toUpperCase(); 
      for(let i=0; i<string.length; i++){
           let char = (string.charAt(i));
          // console.log(char);
       let positionAscii = char.charCodeAt();
       if(positionAscii >=32 && positionAscii<=64){
        newString = newString + String.fromCharCode(positionAscii)
      //  if(positionAscii === 32){
      //    newString = newString + " ";
       } else if (positionAscii >= 97 && positionAscii <= 122){
         let newPositionAsciiLowerCase = ((positionAscii-97+offset)%26+97);
         let newCharacterLowerCase = String.fromCharCode(newPositionAsciiLowerCase);
         newString = newString + newCharacterLowerCase;
       } else {
       let newPositionAscii = ((positionAscii-65+offset)%26 + 65);
        let newCharacter = String.fromCharCode(newPositionAscii);
      //   newPassword = newCharacter.concat();
       newString = newString.concat(newCharacter);
      }
    }
      //  document.write(newPassword); 
       return newString;
      // console.log(newPassword);   
      },
      // console.log(code("ABC",2));
      // document.write (code("ABC",2));
  decode: (offset,string) => {
     offset = parseInt(offset);
   let newString= "";
  //  string = string.toUpperCase();
   for(let i=0; i<string.length; i++){
        let char = (string.charAt(i));
       // console.log(char);
    let positionAscii = char.charCodeAt();
    if(positionAscii >=32 && positionAscii<=64){
      newString = newString + String.fromCharCode(positionAscii)
    // if(positionAscii === 32){
    //   newString = newString + " ";
    } else if (positionAscii >= 97 && positionAscii <= 122){
      let newPositionAsciiLowerCase = ((positionAscii-122-offset)%26+122);
      let newCharacerLowerCase = String.fromCharCode(newPositionAsciiLowerCase);
      newString = newString + newCharacerLowerCase;
    } else {
    let newPositionAscii = ((positionAscii+65-offset)%26 + 65);
     let newCharacter = String.fromCharCode(newPositionAscii);
   //   newPassword = newCharacter.concat();
    newString = newString.concat(newCharacter);
   }
  }
   //  document.write(newPassword); 
    return newString;    
  }
};