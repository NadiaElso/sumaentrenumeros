let primernumero: number = document.getElementById("primernumero");
let segundonumero: number = document.getElementById("segundonumero");

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {

let suma, sumando: number;
sumando = primernumero.value;
suma = 0;

while (sumando <= segundonumero.value) {
  suma = suma+sumando;
  sumando++;

  console.log("El total de la suma de los nùmeros consecutivos es:", suma);
}}