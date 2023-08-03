let counterValue = Number(document.querySelector("#value").textContent);

const buttons = {
  decrBtn: document.querySelector('[data-action="decrement"]'),
  incrBtn: document.querySelector('[data-action="increment"]'),
};

buttons.decrBtn.addEventListener("click", handlerDecr);

buttons.incrBtn.addEventListener("click", handlerIncr);

function handlerDecr() {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
}

function handlerIncr() {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
}
