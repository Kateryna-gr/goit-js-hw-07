const elem = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

elem.input.addEventListener("input", () => {
  elem.span.style.fontSize = `${elem.input.value}px`;
});
