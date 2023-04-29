const carasol = document.querySelector(".carasol");
const arrowBtn = document.querySelectorAll("section i");
const firstCardWidth = carasol.querySelector(".item-list").offsetWidth;

arrowBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    carasol.scrollLeft +=
      btn.id == "leftArrow" ? -firstCardWidth : firstCardWidth;
  });
});
