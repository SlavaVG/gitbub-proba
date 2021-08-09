const button = document.querySelector(".btn");

button.addEventListener("click", function(event) {
  const label = `Сегодня: ${new Date().toLocaleDateString()}`;
  this.textContent = label;

});