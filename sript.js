/*
console.log("ja sam car");
console.log(40 + 100 - 20);

let mojeIme = "xigo";
console.log(mojeIme);


// ZADATAK
let zemlja = "Srbija";
let kontinent = "Evropa";
let populacija = 6000000;

console.log(zemlja);
console.log(kontinent);
console.log(populacija);


// LEKCIJA 2

jsJeCool = true;
console.log(jsJeCool);
console.log(typeof true);
console.log(typeof 77);
console.log(typeof "");

jsJeCool = 55;
console.log(jsJeCool);
let nedefinisana;
console.log(typeof nedefinisana);
// VRACA OBJEKAT
console.log(typeof null);

// LEKCIJA 3

let age = 30;
age = 31;

const rodjenDan = 1984;
// rodjenDan = 9999;
// const brojLjudi;

var posao = "programer";
posao = "ucitelj";

prezime = "zlicfa";

// LEKCIJA 4

const danasnjaGodina = 2037;
const mojeGodine = danasnjaGodina - 1984;
const peraGodine = danasnjaGodina - 1999;
console.log(mojeGodine, peraGodine);

console.log(mojeGodine * 2, peraGodine / 2, 2 ** 3);
console.log("goran" + " " + "fazlic");
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;

console.log(x);

console.log(mojeGodine > peraGodine);
console.log(mojeGodine < peraGodine);
console.log(mojeGodine >= 42);
console.log(mojeGodine <= 10000);

//  LEKCIJA 5


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

//ZADATAK
// IZRACUNAVANJE BMI

// BMI = mass / height ** 2

let mojaKilaza = 125;
let mojaVisina = 1.8;

let peraKilaza = 100;
let peraVisina = 1.8;

let BMI = mojaKilaza / mojaVisina ** 2;
console.log("moj BMI je " + BMI);

BMI = peraKilaza / peraVisina ** 2;
console.log("Perin BMI je " + BMI);

function izracunavanjeBMI(ime, tezina, visina) {
  let bmi = tezina / visina ** 2;
  let rezultat = ime + " " + "je BMI " + bmi;
  
  return rezultat;
}

console.log(izracunavanjeBMI("goran", 125, 1.8));
console.log(izracunavanjeBMI("pera", 87, 1.8));

// LEKCIJA 6

let ime = "goran";
let godine = 1984;
let zanimanje = "programer";
let godina = 2026;

let osoba =
"ja sam " +
ime +
" " +
(godina - godine) +
" imam godina " +
"po zanimanju sam " +
zanimanje;

console.log(osoba);

let osobaNew = `ja sam ${ime} imam ${godina - godine} godine i po zanimanju sam ${zanimanje}`;

console.log(osobaNew);

console.log(
  "strin ga \n\
  vise \n\
  linija",
);

console.log(`string 
sa 
vise
linija `);


// LEKCIJA 7

let godine = 13;

if (godine >= 18) {
  console.log("moze da vozi");
} else {
  console.log("Nemoze da vozi 🙄");
}


// LEKCIJA 8

let inputYear = "1984";
console.log(inputYear);
console.log(Number(inputYear));

console.log(Number("Xigo"));
console.log(typeof NaN);
console.log(String(123), 123, "Jedno je broj jedno je string samo druga boja");

console.log("im " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");


// LEKCIJA 8

//FALSY VALUES  0,'',UNDEFINED,NULL,NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean("Xigo"));
console.log(Boolean({}));

let money = 10;
if (money) {
  console.log("imas pare");
} else {
  console.log("puko si");
}

let visina;
if (visina) {
  console.log("definisano");
} else {
  console.log("nedefinisana");
}


// LEKCIJA 9

const AGE = 18;
if (AGE === 18) console.log("punoletan");
if (AGE == "18") console.log("ok je");

let omiljeniBroj = Number(prompt("Koji ti omiljeni broj"));
console.log(omiljeniBroj);

if (omiljeniBroj === 23) {
  console.log(omiljeniBroj + "je cool");
} else if (omiljeniBroj === 7) {
  console.log(omiljeniBroj + "je cool");
}

if (omiljeniBroj !== 12) {
  console.log(omiljeniBroj + " ovo ti je broj");
}


// LEKCIJA 10

const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

if (shouldDrive) {
  console.log("moze da vozi");
} else {
  console.log("nemoze");
}

const isTired = false;
console.log(hasDriversLicence && hasGoodVision && !isTired);


const day = "vikend";

switch (day) {
  case "monday":
    console.log("its monday");
    console.log("programming day");
    break;
    case "tuesday":
      console.log("its tuesday");
      console.log("utorak je");
      break;
      case "wednsday":
        case "thursday":
          console.log("radi html");
          console.log("radi i js");
          break;
          case "friday":
            console.log("vezbaj html");
            console.log("pvezbaj js");
            break;
            
            default:
              console.log("vikend je uzivaj");
              break;
            }
            
            */

const age = 17;
age >= 18 ? console.log("stariji") : console.log("mladji");
