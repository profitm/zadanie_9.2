var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1){
    console.log('Parametr prawidłowy');
    allNames.push(newName);
} else {
    console.log('Parametr nieprawidłowy');
}

console.log(allNames);
document.write(allNames);