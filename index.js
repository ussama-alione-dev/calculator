const prompt = require("prompt-sync")();
let historique = [];

const errorMessage =
  "Impossible d’effectuer une opération mathématique sur une valeur qui n’est pas un nombre.";

const verifyInputs = (a, b) => {
  return isNaN(a) || isNaN(b);
};

const addition = (a, b) => {
  let result;

  if (verifyInputs(a, b)) {
    result = errorMessage;
  } else {
    result = `${a} + ${b} =>  ${Number(a) + Number(b)}`;
    historique.push(result);
  }
  console.log(result);
};

const soustraction = (a, b) => {
  let result;
  if (verifyInputs(a, b)) {
    result = errorMessage;
  } else {
    result = `${a} - ${b} =>  ${a - b}`;
    historique.push(result);
  }
  console.log(result);
};

const multiplication = (a, b) => {
  let result;
  if (verifyInputs(a, b)) {
    result = errorMessage;
  } else {
    result = `${a} * ${b} =>  ${a * b}`;
    historique.push(result);
  }
  console.log(result);
};

const dividion = (a, b) => {
  let result;

  if (verifyInputs(a, b)) {
    result = errorMessage;
  } else {
    if (b === 0) {
      result = "maymknch t9sem number 3la zero :'(  ";
    } else {
      let output = `${a} / ${b} => ` + a / b;
      result = output;
      historique.push(output);
    }
  }

  console.log(result);
};

const puissance = (a, b) => {
  let result;
  if (verifyInputs(a, b)) {
    result = errorMessage;
  } else {
    result = `${a} ** ${b} =>${a ** b}`;
    historique.push(result);
  }
  console.log(result);
};

const racineCarree = (a, b) => {
  let result;
  if (verifyInputs(a, b)) {
    result = errorMessage;
  } else {
    result = `racine carree de ${a} : ${parseFloat(Math.sqrt(a)).toFixed(
      2
    )}/n racine carree de ${b} : ${parseFloat(Math.sqrt(b)).toFixed(2)}`;
    historique.push(result);
  }
  console.log(result);
};

const factorielleFunc = (num) => {
  let result = 1;
  for (let ndx = 1; ndx <= num; ndx++) {
    result *= ndx;
  }
  return `le factorielle de ${num} => ${result}`;
};

const factorielle = (a, b) => {
  let result;
  if (verifyInputs(a, b) || !Number.isInteger(a) || !Number.isInteger(b)) {
    result = errorMessage;
  } else {
    result = `${factorielleFunc(a)} & ${factorielleFunc(b)}`;
    historique.push(result);
  }
  console.log(result);
};

const menu = `
    < - - - - - - - - - - - - - - - - - - - - - - >
            chosie une operation parmis : 
        add   -> addition ( + )
        sous  -> soustraction ( - )
        multi -> soustraction ( - )
        divis -> dividsion ( / )
        puiss -> puissance
        raci2 -> racine carree
        facto -> factorielle 
        exit  -> pour quiter le program

`;

while (true) {
  const numA = Number(prompt("entrer le nombre  a : "));
  const numB = Number(prompt("entrer le nombre  b : "));
  console.log(menu);

  const operation = prompt("entrer l'operation : ");
  if (operation === "exit") {
    console.log("voici l'historique d'operations\n");
    historique.forEach((el, ndx) =>
      console.log(`operation ${ndx + 1} : ` + el)
    );
    break;
  }
  switch (operation) {
    case "add":
      addition(numA, numB);
      break;
    case "sous":
      soustraction(numA, numB);

      break;
    case "multi":
      multiplication(numA, numB);

      break;
    case "divis":
      dividion(numA, numB);

      break;
    case "puiss":
      puissance(numA, numB);

      break;
    case "raci2":
      racineCarree(numA, numB);

      break;
    case "facto":
      factorielle(numA, numB);

      break;

    default:
      console.log("operation invalid !");

      break;
  }
}
