var link=document.querySelector(".card-link"),popup=document.querySelector(".modal"),arrival=popup.querySelector("[name=arrival]"),form=popup.querySelector("form"),departure=popup.querySelector("[name=departure]");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-error"),popup.classList.toggle("modal-show")}),form.addEventListener("submit",function(e){arrival.value&&departure.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))});