

var link = document.querySelector(".card-link");
var popup = document.querySelector(".form");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-show");
});

   