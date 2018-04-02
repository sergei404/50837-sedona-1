var link = document.querySelector(".card-link");
var popup = document.querySelector(".modal");
//var arrival = document.querySelector("#arrival");

Link.addEventListener("click", function (evt) {
  evt.preventDefault();
  //if (popup.classList.contains("modal-show")) {
   // popup.classList.remove("modal-error");
 // }
  popup.classList.toggle("modal-show");
 // arrival.focus();
});

//var form = Popup.querySelector("form");
//var departure = document.querySelector("#departure");

//form.addEventListener("submit", function (evt) {
 // if (!arrival.value || !departure.value) {
   // evt.preventDefault();
   // popup.classList.remove("modal-error");
   // popup.offsetWidth = Popup.offsetWidth;
   // popup.classList.add("modal-error");
 // }
//});


/*var link = document.querySelector(".card-link");

var popup = document.querySelector(".modal");

var form = popap.querySelector("form");
var arrival = document.querySelector("name=arrival");
var departure = popup.querySelector("[name=departure]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (Popup.classList.contains("modal-show")) {
    Popup.classList.remove("modal-error");
  }


  popup.classList.toggle("modal-show");
  arrival.focus();
});


form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
*/
