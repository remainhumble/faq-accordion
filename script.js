const faqs = document.querySelectorAll(".faq");
const dropdowns = document.querySelectorAll(".dropdown");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
    const dropdown = faq.querySelector(".dropdown");
    dropdown.src = faq.classList.contains("active")
      ? "./assets/images/icon-minus.svg"
      : "./assets/images/icon-plus.svg";
  });
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      dropdown.click();
    }
  });
});
