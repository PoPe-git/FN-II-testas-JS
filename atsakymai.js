// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

const a = 2;
const b = 3;

if (a > b) {
  console.log('a yra didesnis už b');
} else if (a < b) {
  console.log('b yra didesnis už a');
} else {
  console.log('a ir b yra lygūs');
}

////////////////////////////////////
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

////////////////////////////////////
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

////////////////////////////////////
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}

////////////////////////////////////
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let randomNumber = 0;
while (randomNumber !== 5) {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}

////////////////////////////////////
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

const arrayLength = Math.floor(Math.random() * 11) + 20;
const array = [];
for (let i = 0; i < arrayLength; i++) {
  const randomNumber = Math.floor(Math.random() * 21) + 10;
  array.push(randomNumber);
}

let maxNumber = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > maxNumber) {
    maxNumber = array[i];
  }
}

console.log('Masyvas:', array, 'Didžiausia reikšmė:', maxNumber);

////////////////////////////////////
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

for (let i = 0; i < 100; i++) {
  const randomNumber = Math.floor(Math.random() * 4);
  if (randomNumber === 0) {
    array.push('A');
  } else if (randomNumber === 1) {
    array.push('B');
  } else if (randomNumber === 2) {
    array.push('C');
  } else {
    array.push('D');
  }
}

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] === 'A') {
    countA++;
  } else if (array[i] === 'B') {
    countB++;
  } else if (array[i] === 'C') {
    countC++;
  } else {
    countD++;
  }
}

console.log('Masyvas:', array);
console.log('A =', countA);
console.log('B =', countB);
console.log('C =', countC);
console.log('D =', countD);

////////////////////////////////////
/* 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
   Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų) */

////////////////////////////////////
/* 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų) */

function pirminisSkaicius(number) {
  if (typeof number !== 'number' || number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(pirminisSkaicius(5));

////////////////////////////////////
/* 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
    "(XXX) XXX-XXXX". (10 taškų) */

////////////////////////////////////
