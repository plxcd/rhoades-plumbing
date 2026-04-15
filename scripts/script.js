// Mobile Menu Toggle
const toggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Contact Form Validation
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = form.querySelectorAll("input, select, textarea");
    let valid = true;

    fields.forEach((field) => {
      if (!field.value.trim()) valid = false;
    });

    if (!valid) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    alert("Your request has been submitted!");
    form.reset();
    console.log("Mechanic site loaded successfully.");
  });
}

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();
