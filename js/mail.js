const mail = ['mariorossi@gmail.com','luigiverdi@gmail.com','pietronero@gmail.com','matteolandri7@gmail.com'];



const mailutente = prompt("qual'è la tua mail?");
let mailtrovata= false;

 for (let i = 0 ; i < mail.length ; i++){

   if(mail[i] === mailutente){
     mailtrovata = true;
   }

 }

 if (mailtrovata === true){

  prompt('benvenuto');
 }

 else{
   prompt('la tua mail non è nella lista di chi può accedere');
 }