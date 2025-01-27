const arrNumbs = ['a', 'b', 'c'];

function transformToObjects(numberArray) {
  return numberArray.map((numEl) => ({ val: numEl }));
}

console.log(transformToObjects(arrNumbs));

// wyszukiwanie i pobieranie danych w tablicy

/* 1 użycie numeru indexu */
// const userNameData = ['Max', 'Doe'];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

/* 2 skrócona wersja destrukturyzacja*/
const [firstName, lastName] = ['Max', 'Doe'];

// destrukturyzacja dla obiektu

/* 1 wyciąganie z obiektu  */
const user = {
  name: 'Ola',
  age: 34,
};

//const name = user.name
//const age= user.age

/* 2 destrukturyzacja obiektu */
const { name: userName, age } = {
  name: 'Ola',
  age: 34,
};

console.log(userName, age);

/* DESTRUKTURYZACJA W PARAMETRZE FUNKCJI */
function storeOrder({ id, currency, amount }) {
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);

  const storageCheck = localStorage.getItem('id');
  console.log(storageCheck);
}
storeOrder({ id: 5, currency: 'USD', amount: 15.99 });

/* Tworzenie nowej listy */
const hobbies = ['play', 'walk'];
/* 1. przez napisanie [] */
const newHobbies = ['Read'];

/* 2. Przez spreed operator */
const mergedHobbies = [...newHobbies, ...hobbies];

console.log(mergedHobbies);

/* SRREED OPERATOR WOBJekcie */

const extendedUser = {
  isAdmin: true,
  ...user,
};

console.log(extendedUser);

/* IF ELSE */
// const password = prompt('youre password');
const password = '';
if (password === 'hello') {
  console.log('hello works');
} else if (password === 'Hello') {
  console.log('Hello works');
} else {
  console.log('Access not granted');
}

/* PĘTLE */
const annimals = ['cat', 'dog'];

for (const animal of annimals) {
  console.log(animal);
}

function handleTioeout() {
  console.log('timed out!');
}

const handleTimout2 = () => {
  console.log('Timed out ..again!');
};

setTimeout(handleTioeout, 2000);
setTimeout(handleTimout2, 4000);
setTimeout(() => {
  console.log('More timing out...');
}, 6000);

function greeter(greetFn) {
  greetFn();
}

//przzekazywanie funkcji w parametrze unkcji jest normalne
greeter(() => console.log('hi'));

/* WARTOŚĆ PRYMITYWNA  */
/* strings, numbers, booleans = to wartości prymitywne. w JS nie możemy ich edytowac.
    można je nadpisać ale to zupełnie nowy string. nawet jak wykonamy na nim metodę to powstanie nowa wartość
*/

let userMEssage = 'Hello';

/* WARTOŚĆ REFERENCYJNYMI */
/* wartościamu relatywnymi są obiekty i tablice
     w zmiennej nie przechowuje się zmiennej ale adres teh wartości zapisanej w pamięci.
dlatego można edytować tablicę nawet jeśli użyję const
     */
