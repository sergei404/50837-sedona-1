//var link = document.querySelector(".card-link");
//var popup = document.querySelector(".form-modal");

//var form = Popup.querySelector("form");
//var arrival = document.querySelector("name=arrival");
//var departure = document.querySelector("name=departure");

//link.addEventListener("click", function (evt) {
   // evt.preventDefault();
    
   // popup.classList.toggle("form-show");
    //arrival.focus();
//});



/*var Form = Popup.querySelector("form");
var departure = document.querySelector("#departure");*/

//Form.addEventListener("submit", function (evt) {
  //if (!arrival.value || !departure.value) {
    //evt.preventDefault();
   // Popup.classList.remove("form-error");
   // Popup.offsetWidth = Popup.offsetWidth;
    //Popup.classList.add("form-error");
  //}
//});

/*if (Popup.classList.contains("form-show")) {
    Popup.classList.remove("form-error");
*/

     
var link = document.querySelector(".card-link");
  
var popup = document.querySelector(".modal");

var form = popap.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (Popup.classList.contains("modal-show")) {
    Popup.classList.remove("modal-error");
  }


  popup.classList.add("form-show");
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


     