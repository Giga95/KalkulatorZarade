// Change Dark/Light mode

let changeMode = document.getElementById("change-mode");

changeMode.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    changeMode.innerHTML = "Light mode";
  } else {
    changeMode.innerHTML = "Dark mode";
  }
};

// VARIJABLE

const netoZarada = document.getElementById("neto-zarada");
const brutoIZarada = document.getElementById("bruto-1-zarada");
const brutoIIZarada = document.getElementById("bruto-2-zarada");
const iznosPioBrutoIRezultat = document.getElementById("bruto-1-pio");
const iznosZdravstvenoBrutoI = document.getElementById("bruto-1-zdravstveno");
const iznosNezaposlenostBrutoI = document.getElementById(
  "bruto-1-nezaposlenost"
);
const iznosPorezaRezultat = document.getElementById("iznos-poreza");
const iznosOsnoviceZaPorez = document.getElementById(
  "osnovica-za-placanje-poreza"
);
const iznosPioBrutoIIRezultat = document.getElementById("bruto-2-pio");
const iznosZdravstvenoBrutoII = document.getElementById("bruto-2-zdravstveno");
const iznosNezaposlenostBrutoII = document.getElementById(
  "bruto-2-nezaposlenost"
);
const iznosUkupnihDoprinosaIPoreza = document.getElementById("ukupno");

// PORESKE STOPE I FIKSNI IZNOSI ZA GODINU - MENJATI VREDNOSTI OVDE

const poreskaStopa = 10; // 10%
const poreskoOslobodjenje = 21712; // 21 712 RSD
const stopaDoprinosaPioBrutoI = 14; // 14%
const zdravstvenoOsiguranjeBrutoI = 5.15; // 5.15%
const nezaposlenostBrutoI = 0.75; // 0.75%
const stopaDoprinosaPioBrutoII = 10; // 10%
const zdravstvenoOsiguranjeBrutoII = 5.15; // 5.15%
const nezaposlenostBrutoII = 0; // 0%

// BRUTO I BTN

const izracunajBrutoIBtn = document.getElementById("izracunaj-bruto-1");

izracunajBrutoIBtn.addEventListener("click", () => {
  const brutoValue = parseFloat(brutoIZarada.value);

  if (!isNaN(brutoValue)) {
    const iznosPioB1 = Math.round((brutoValue * stopaDoprinosaPioBrutoI) / 100);
    const iznosZdravstvenoB1 = Math.round(
      (brutoValue * zdravstvenoOsiguranjeBrutoI) / 100
    );
    const iznosNezaposlenostB1 = Math.round(
      (brutoValue * nezaposlenostBrutoI) / 100
    );
    const iznosPorezaNeto = Math.round(
      ((brutoValue - poreskoOslobodjenje) * poreskaStopa) / 100
    ); // PORESKO OSLOBODJENJE 21 712 * 10%
    const iznosOsnoviceZaP = Math.round(brutoValue - poreskoOslobodjenje);
    const iznosPioB2 = Math.round(
      (brutoValue * stopaDoprinosaPioBrutoII) / 100
    );
    const iznosZdravstvenoB2 = Math.round(
      (brutoValue * zdravstvenoOsiguranjeBrutoII) / 100
    );
    const iznosNezaposlenostB2 = Math.round(
      (brutoValue * nezaposlenostBrutoII) / 100
    );
    const ukupnoDoprinosaIPoreza = Math.round(
      iznosPioB1 +
        iznosZdravstvenoB1 +
        iznosNezaposlenostB1 +
        iznosPorezaNeto +
        iznosPioB2 +
        iznosNezaposlenostB2 +
        iznosZdravstvenoB2
    );

    const netoIznosR = Math.round(
      brutoValue -
        iznosNezaposlenostB1 -
        iznosZdravstvenoB1 -
        iznosPioB1 -
        iznosPorezaNeto
    );
    const brutoIIiznosR = Math.round(
      brutoValue + iznosNezaposlenostB2 + iznosZdravstvenoB2 + iznosPioB2
    );

    iznosPioBrutoIRezultat.value = iznosPioB1;
    iznosZdravstvenoBrutoI.value = iznosZdravstvenoB1;
    iznosNezaposlenostBrutoI.value = iznosNezaposlenostB1;
    iznosPorezaRezultat.value = iznosPorezaNeto;
    iznosOsnoviceZaPorez.value = iznosOsnoviceZaP;
    iznosPioBrutoIIRezultat.value = iznosPioB2;
    iznosZdravstvenoBrutoII.value = iznosZdravstvenoB2;
    iznosNezaposlenostBrutoII.value = iznosNezaposlenostB2;
    iznosUkupnihDoprinosaIPoreza.value = ukupnoDoprinosaIPoreza;

    netoZarada.value = netoIznosR;
    brutoIIZarada.value = brutoIIiznosR;
  } else {
    alert('Please enter a valid number in "Bruto I" field.');
  }
});

// NETO BTN

const izracunajNetoBtn = document.getElementById("izracunaj-neto");

izracunajNetoBtn.addEventListener("click", () => {
  const netoValue = parseFloat(netoZarada.value);

  if (!isNaN(netoValue)) {
    const iznosBrutoI = Math.round(
      (100 * netoValue - poreskoOslobodjenje * poreskaStopa) /
        (100 -
          stopaDoprinosaPioBrutoI -
          zdravstvenoOsiguranjeBrutoI -
          nezaposlenostBrutoI -
          poreskaStopa)
    );
    const iznosPorezaNeto = Math.round(
      ((iznosBrutoI - poreskoOslobodjenje) * poreskaStopa) / 100
    );
    const iznosOsnoviceZaP = Math.round(iznosBrutoI - poreskoOslobodjenje);
    const iznosPioB1 = Math.round(
      (iznosBrutoI * stopaDoprinosaPioBrutoI) / 100
    );
    const iznosZdravstvenoB1 = Math.round(
      (iznosBrutoI * zdravstvenoOsiguranjeBrutoI) / 100
    );
    const iznosNezaposlenostB1 = Math.round(
      (iznosBrutoI * nezaposlenostBrutoI) / 100
    );
    const iznosPioB2 = Math.round(
      (iznosBrutoI * stopaDoprinosaPioBrutoII) / 100
    );
    const iznosZdravstvenoB2 = Math.round(
      (iznosBrutoI * zdravstvenoOsiguranjeBrutoII) / 100
    );
    const iznosNezaposlenostB2 = Math.round(
      (iznosBrutoI * nezaposlenostBrutoII) / 100
    );
    const ukupnoDoprinosaIPoreza = Math.round(
      iznosPioB1 +
        iznosZdravstvenoB1 +
        iznosNezaposlenostB1 +
        iznosPorezaNeto +
        iznosPioB2 +
        iznosNezaposlenostB2 +
        iznosZdravstvenoB2
    );
    const brutoIIiznosR = Math.round(
      iznosBrutoI + iznosNezaposlenostB2 + iznosZdravstvenoB2 + iznosPioB2
    );

    brutoIZarada.value = iznosBrutoI;
    iznosPorezaRezultat.value = iznosPorezaNeto;
    iznosOsnoviceZaPorez.value = iznosOsnoviceZaP;
    iznosPioBrutoIRezultat.value = iznosPioB1;
    iznosZdravstvenoBrutoI.value = iznosZdravstvenoB1;
    iznosNezaposlenostBrutoI.value = iznosNezaposlenostB1;
    iznosPioBrutoIIRezultat.value = iznosPioB2;
    iznosZdravstvenoBrutoII.value = iznosZdravstvenoB2;
    iznosNezaposlenostBrutoII.value = iznosNezaposlenostB2;
    iznosUkupnihDoprinosaIPoreza.value = ukupnoDoprinosaIPoreza;
    brutoIIZarada.value = brutoIIiznosR;
  } else {
    alert('Please enter a valid number in "Neto Zarada" field.');
  }
});

// BRUTO 2 BTN

const izracunajBrutoIIBtn = document.getElementById("izracunaj-bruto-2");

izracunajBrutoIIBtn.addEventListener("click", () => {
  const brutoIIValue = parseFloat(brutoIIZarada.value);

  if (!isNaN(brutoIIValue)) {
    const iznosBrutoI = Math.round(
      (100 * brutoIIValue) /
        (100 +
          stopaDoprinosaPioBrutoII +
          zdravstvenoOsiguranjeBrutoII +
          nezaposlenostBrutoII)
    );
    const iznosPorezaNeto = Math.round(
      ((iznosBrutoI - poreskoOslobodjenje) * poreskaStopa) / 100
    );
    const iznosOsnoviceZaP = Math.round(
      iznosBrutoI - poreskoOslobodjenje / 100
    );
    const iznosPioB1 = Math.round(
      (iznosBrutoI * stopaDoprinosaPioBrutoI) / 100
    );
    const iznosZdravstvenoB1 = Math.round(
      (iznosBrutoI * zdravstvenoOsiguranjeBrutoI) / 100
    );
    const iznosNezaposlenostB1 = Math.round(
      (iznosBrutoI * nezaposlenostBrutoI) / 100
    );
    const iznosPioB2 = Math.round(
      (iznosBrutoI * stopaDoprinosaPioBrutoII) / 100
    );
    const iznosZdravstvenoB2 = Math.round(
      (iznosBrutoI * zdravstvenoOsiguranjeBrutoII) / 100
    );
    const iznosNezaposlenostB2 = Math.round(
      (iznosBrutoI * nezaposlenostBrutoII) / 100
    );
    const ukupnoDoprinosaIPoreza = Math.round(
      iznosPioB1 +
        iznosZdravstvenoB1 +
        iznosNezaposlenostB1 +
        iznosPorezaNeto +
        iznosPioB2 +
        iznosNezaposlenostB2 +
        iznosZdravstvenoB2
    );
    const netoIznosR = Math.round(
      iznosBrutoI -
        iznosNezaposlenostB1 -
        iznosZdravstvenoB1 -
        iznosPioB1 -
        iznosPorezaNeto
    );

    brutoIZarada.value = iznosBrutoI;
    iznosPorezaRezultat.value = iznosPorezaNeto;
    iznosOsnoviceZaPorez.value = iznosOsnoviceZaP;
    iznosPioBrutoIRezultat.value = iznosPioB1;
    iznosZdravstvenoBrutoI.value = iznosZdravstvenoB1;
    iznosNezaposlenostBrutoI.value = iznosNezaposlenostB1;
    iznosPioBrutoIIRezultat.value = iznosPioB2;
    iznosZdravstvenoBrutoII.value = iznosZdravstvenoB2;
    iznosNezaposlenostBrutoII.value = iznosNezaposlenostB2;
    iznosUkupnihDoprinosaIPoreza.value = ukupnoDoprinosaIPoreza;
    netoZarada.value = netoIznosR;
  } else {
    alert('Please enter a valid number in "Bruto II" field.');
  }
});

// PRINT PAGE BTN
function printPage() {
  window.print();
}

document.getElementById("print").addEventListener("click", printPage);
