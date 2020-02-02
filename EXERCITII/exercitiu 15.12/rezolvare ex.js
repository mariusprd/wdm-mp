var nume = prompt('Nume?');
var prenume = prompt('Prenume?');
var nrAni = prompt('Varsta?');
var inalt = prompt('Inaltime?');
var numeM = prompt('Numele de fecioara al mamei tale?');

alert('SAAARPILIIIIII!');

var abc = 0;

if (prenume[0] === nume[0]) {
  abc++;
}

if (nrAni > 15 && nrAni < 25) {
  abc++;
}

if (inalt >= 180) {
  abc++;
}

if (numeM[numeM.length - 1] === 'a') {
  abc++;
}

if (abc === 4) {
  console.log('Haideeeeee');
} else {
  console.log(' Ia uite-l unde vrea sa intre');
}