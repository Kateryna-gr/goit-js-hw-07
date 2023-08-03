const input = document.querySelector("#validation-input");
const length = input.dataset.length;

input.addEventListener("blur", handlerColor);

function handlerColor(event) {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length == length) {
    event.currentTarget.style = "border-color: #4caf50;";
    return;
  }
  event.currentTarget.style = "border-color: #f44336;";
}
