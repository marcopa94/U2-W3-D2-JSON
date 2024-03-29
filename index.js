const form = document.getElementById("form");
const input = document.getElementById("TextInput");
const invia = document.getElementById("invia");
const cancel = document.getElementById("cancel");
const div = document.getElementById("reader");

class Utente {
  constructor(nome1, nome2, nome3) {
    this.nome = nome1;
    this.nome = nome2;
    this.nome = nome3;
  }
}

form.onsubmit = function (e) {
  e.preventDefault();
  const ut1 = input.value;

  localStorage.setItem("nome", JSON.stringify(ut1));
  div.innerText = ut1;
  input.value = " ";
};
cancel.addEventListener("click", function () {
  localStorage.removeItem("nome");
  div.innerText = "";
});
window.onload = function () {
  elementoMostrato.textContent = localStorage.getItem("ut1");
  div.innerText = "";
};
//---------------------------------------------------------------------------------------------------------------//
function updateCounter() {
  let counter = sessionStorage.getItem("counter");

  counter++;
  sessionStorage.setItem("counter", counter);

  document.getElementById("contatore").textContent = counter;
}

window.onload = function () {
  updateCounter();
  setInterval(updateCounter, 1000);
};
