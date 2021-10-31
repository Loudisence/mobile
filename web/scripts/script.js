const popup = document.querySelector(".popup");
const openPopupBtn = document.querySelector(".footer__rules");
const closePopupBtn = document.querySelector(".popup__button-close");

function openPopup() {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", closePopupEsc);
}

function closePopup() {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", closePopupEsc);
}

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

openPopupBtn.addEventListener("click", function () {
  openPopup();
});
closePopupBtn.addEventListener("click", function () {
  closePopup();
});

const button = document.querySelector(".main__button");
function click() {
  console.log("Button clicked");
}
button.addEventListener("click", click);
