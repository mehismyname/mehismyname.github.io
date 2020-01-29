function jaw(secret,offset) {
  encodedmessage = '';
  for (i =0; i < secret.length; i++) {
    ascii = (secret.charCodeAt(i));
    encodedmessage+=(String.fromCharCode(ascii + offset));
  }
  return encodedmessage;
}
  
      function encode(){
        yeet=document.getElementById("no").value;
        result=jaw(yeet, 147);
        document.getElementById("blood").innerHTML=result;
      }

      function decode(){
        yeet=document.getElementById("back").value;
        result=jaw(yeet, -147);
        document.getElementById("crack").innerHTML=result;
      }
