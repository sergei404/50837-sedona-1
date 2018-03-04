var link = document.querySelector(".card-link");
var popup = document.querySelector(".form-section");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-show");
});