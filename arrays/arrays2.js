var isikukood = "39610050818";

var idCode = isikukood.split('')[0];
var gender;

if (idCode == 3) {
  console.log('mees');
} else {
  console.log('naine');
}

gender = idCode == 3 ? 'mees' : 'naine';
console.log(gender);

var numbrid = [3,5,48,81];
numbrid = numbrid.map(number => (number*10-12));

document.getElementById('numbers').innerHTML = numbrid;

var people = [
  {name: 'Madis', age: 32},
  {name: 'Karl', age: 5},
  {name: 'Gerli', age: 17},
  {name: 'Malle', age: 61},
  {name: 'Sass', age: 56}
];

ageArray = people.map(human =>({name: human.name, age: 2020-human.age}));
console.log(ageArray);