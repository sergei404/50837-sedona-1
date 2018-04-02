var link = document.querySelector(".card-link");
var popup = document.querySelector(".modal");

var arrival = popup.querySelector("[name=arrival]");
var form = popup.querySelector("form");
var departure = popup.querySelector("[name=departure]");

link.addEventListener("click", function (evt) {
  evt.preventDefault(); 
  popup.classList.remove("modal-error"); 
  popup.classList.toggle("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    
  }
});