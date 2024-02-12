// How to assign object and call blanck object properties

// Like Example of Biodata Make:

// Object  ar modde kisu likhle seta Method :

const BioData = {};

BioData.FirstNam = "Zahidul Hoque";
BioData.LastNam = "Molla";
BioData.Age = 43;
BioData.Education = "Msc Engg.";
BioData.ContactNo = +46736919896;
BioData.Email = "zahin_m96@yahoo.com";

// function dia call korbobo:

BioData.Run = function () {
  console.log("This the Bio data of Zahidul hoque molla:");

  return "This the Bio data of Zahidul hoque molla:";
};

console.log(BioData.Run());

/*   console.log(BioData.FirstNam);
console.log(BioData.LastNam);
console.log(BioData.Age);
 */

let alphabet = "abcdefghijklmnopqrstuvwxz";

/* console.log(alphabet[6]); */

for (let i = 0; i < alphabet.length; i++) {
  /* console.log(alphabet[i]); */

  // or Charat dia represent also possible:

  console.log(alphabet.charAt(i));
}

// how to make object by using of function:

function ObjectMaker(Name, Age, Sex, Education, ContactNo, Email) {
  this.Name = Name;
  this.Age = Age;
  thisSex = Sex;
  this.Education = Education;
  this.ContactNo = ContactNo;
  this.Email = Email;
}

// here i have to add new just call them its called constructor function

const MakeObject = new ObjectMaker(
  "Zahidul Hoque Molla",
  42,
  "Male",
  "MSc",
  "0736919896",
  "zahin_m96@yahoo.com"
);

console.log(MakeObject);

// object ke iterate kora or loop kora  or call kora:

const person = {
  child1: "Nusaibah",
  child2: "Ayra",
  mam: "Maria",
  live: "Stockholm",
};

// to call we have to use "for let name in "use korte hobe:
for (let x in person) {
  // jodi value dekte chai then
  console.log(x);

  // jodi vaule dekte chai then Person[] use korte hobe
  console.log(person[x]);
}
