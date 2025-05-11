const rodneCislo = prompt('Jaké je tvé rodné číslo?');
let platne = true;

if (rodneCislo.length === 10) {
  document.body.innerHTML += '✔️ Zadané rodné číslo má správně deset znaků.<br>';
} else {
  document.body.innerHTML += '❌ Uživatel zadal rodné číslo neplatné délky.<br>';
  platne = false;
}

if (Number.isInteger(Number(rodneCislo))) {
  document.body.innerHTML += '✔️ Rodné číslo je celé číslo.<br>';
} else {
  document.body.innerHTML += '❌ Rodné číslo obsahuje nepovolené znaky.<br>';
  platne = false;
}

if (Number(rodneCislo) % 11 === 0) {
  document.body.innerHTML += '✔️ Rodné číslo je dělitelné 11.<br>';
} else {
  document.body.innerHTML += '❌ Rodné číslo není dělitelné číslem 11.<br>';
  platne = false;
}

if (platne) {
  document.body.innerHTML += '✔️ Zadané rodné číslo je platné.<br>';
} else {
  document.body.innerHTML += '❌ Uživatel zadal neplatné rodné číslo.<br>';
}
