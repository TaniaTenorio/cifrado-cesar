window.cipher = {
  encode: (offset, string) => {
    offset = parseInt(offset);
    let newString= "";
    for(let i=0; i<string.length; i++){
      let char = (string.charAt(i));
      let positionAscii = char.charCodeAt();
      if(positionAscii >=32 && positionAscii<=64){
        newString = newString + String.fromCharCode(positionAscii)
      } else if (positionAscii >= 97 && positionAscii <= 122){
        let newPositionAsciiLowerCase = ((positionAscii-97+offset)%26+97);
        let newCharacterLowerCase = String.fromCharCode(newPositionAsciiLowerCase);
        newString = newString + newCharacterLowerCase;
      } else {
        let newPositionAscii = ((positionAscii-65+offset)%26 + 65);
        let newCharacter = String.fromCharCode(newPositionAscii);
        newString = newString.concat(newCharacter);
      }
    }
    return newString; 
  },
  decode: (offset,string) => {
    offset = parseInt(offset);
    let newString= "";
    for(let i=0; i<string.length; i++){
      let char = (string.charAt(i));
      let positionAscii = char.charCodeAt();
      if(positionAscii >=32 && positionAscii<=64){
        newString = newString + String.fromCharCode(positionAscii)
      } else if (positionAscii >= 97 && positionAscii <= 122){
        let newPositionAsciiLowerCase = ((positionAscii-122-offset)%26+122);
        let newCharacerLowerCase = String.fromCharCode(newPositionAsciiLowerCase);
        newString = newString + newCharacerLowerCase;
      } else {
        let newPositionAscii = ((positionAscii+65-offset)%26 + 65);
        let newCharacter = String.fromCharCode(newPositionAscii);
        newString = newString.concat(newCharacter);
      }
    }
    return newString;    
  }
};