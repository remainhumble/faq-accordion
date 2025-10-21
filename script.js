const faqs = document.querySelectorAll(".faq");
const dropdowns = document.querySelectorAll(".dropdown");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});



dropdowns.forEach((dropdown) => {

    
    dropdown.src = dropdown.src.includes("icon-plus.svg")
      ? "./assets/images/icon-minus.svg"
      : "./assets/images/icon-plus.svg";

  dropdown.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      dropdown.click();
    }
  });
});


