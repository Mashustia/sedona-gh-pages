var link = document.querySelector(".hotel-search__link");
var popup = document.querySelector(".modal-search");

if ( link && popup ) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
    } else {
      popup.classList.add("modal--show");
    }
  });
};

