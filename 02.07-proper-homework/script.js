let startingPoint = null;
let startedAt = null;

let counter;

document.querySelector('#form').addEventListener("submit", function(event) {
  event.preventDefault();
  startingPoint = new Date(document.querySelector("#startingPoint").value);
  startedAt = Date.now();
  counter = setInterval(function () {
    document.querySelector("#time").innerHTML = new Date(startingPoint - (Date.now() - startedAt)).toLocaleString()
  }, 1000)
});