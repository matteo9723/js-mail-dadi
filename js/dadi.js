const dado = [1,2,3,4,5,6];

const randomNum = Math.floor(Math.random()*(dado.length ));

const numeroEstrattoplayer = dado[randomNum];

player.innerHTML = `il tuo numero è ${numeroEstrattoplayer}`;

const randomNum2 = Math.floor(Math.random()*(dado.length ));

const numeroEstrattocomputer = dado[randomNum2];

computer.innerHTML = `il numero del computer è ${numeroEstrattocomputer}`;

if (numeroEstrattoplayer < numeroEstrattocomputer){
  esito.innerHTML = `ha vinto il computer`;
}
else if (numeroEstrattoplayer > numeroEstrattocomputer){
  esito.innerHTML = `ha vinto il player`;
}
else{
  esito.innerHTML = `pareggio`;
}