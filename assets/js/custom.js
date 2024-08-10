window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the scroll value based on when you want the color change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// const accordions = document.querySelectorAll(".accordion");

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector("#accordion-icon");

  header.addEventListener("click", () => {
    // Determine if the clicked accordion is already open
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector("#accordion-icon");

      // Set height based on whether the accordion is the one being clicked
      if (i === index) {
        c.style.height = isOpen ? "0px" : `${c.scrollHeight}px`;
        ic.classList.toggle("ri-add-line", isOpen);
        ic.classList.toggle("ri-subtract-fill", !isOpen);
      } else {
        c.style.height = "0px";
        ic.classList.remove("ri-subtract-fill");
        ic.classList.add("ri-add-line");
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const monthlyBtn = document.getElementById('monthly-btn');
  const yearlyBtn = document.getElementById('yearly-btn');
  const monthlyPricing = document.getElementById('monthly-pricing');
  const yearlyPricing = document.getElementById('yearly-pricing');

  monthlyBtn.addEventListener('click', function() {
      monthlyBtn.classList.add('active');
      yearlyBtn.classList.remove('active');
      monthlyPricing.classList.add('active');
      yearlyPricing.classList.remove('active');
  });

  yearlyBtn.addEventListener('click', function() {
      yearlyBtn.classList.add('active');
      monthlyBtn.classList.remove('active');
      yearlyPricing.classList.add('active');
      monthlyPricing.classList.remove('active');
  });
});
