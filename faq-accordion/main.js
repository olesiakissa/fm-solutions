window.onload = function () {
  initAccordion();
};

function initAccordion() {
  const btnCollapsibleArray = document.getElementsByClassName("collapsible");

  for (let i = 0; i < btnCollapsibleArray.length; i++) {
    btnCollapsibleArray[i].addEventListener("click", function () {
      if (this.classList.contains("active")) {
        collapseItems(btnCollapsibleArray);
      } else {
        collapseItems(btnCollapsibleArray);
        this.setAttribute('aria-expanded', 'true');
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("visible");
      }
    });
  }
}

function collapseItems(accordion) {
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].setAttribute('aria-expanded', 'false');
    accordion[i].classList.toggle("active", false);
    accordion[i].nextElementSibling.classList.toggle("visible", false);
  }
}
