document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-menu");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        navMenu.classList.remove("open");
      }
    });
  });

  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });

  const form = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let hasError = false;
    const nombre = document.getElementById("nombre");
    const negocio = document.getElementById("negocio");
    const rubro = document.getElementById("rubro");
    const whatsapp = document.getElementById("whatsapp");
    const problema = document.getElementById("problema");
    const mensaje = document.getElementById("mensaje");

    [nombre, negocio, rubro, whatsapp, problema, mensaje].forEach((el) => {
      el.style.borderColor = "#ccc";
    });

    if (!nombre.value.trim()) {
      nombre.style.borderColor = "red";
      hasError = true;
    }
    if (!negocio.value.trim()) {
      negocio.style.borderColor = "red";
      hasError = true;
    }
    if (!rubro.value.trim()) {
      rubro.style.borderColor = "red";
      hasError = true;
    }
    if (!whatsapp.value.trim()) {
      whatsapp.style.borderColor = "red";
      hasError = true;
    }
    if (!problema.value.trim()) {
      problema.style.borderColor = "red";
      hasError = true;
    }

    const phoneRegex = /^\+?\d{6,15}$/;
    if (whatsapp.value && !phoneRegex.test(whatsapp.value.trim())) {
      whatsapp.style.borderColor = "red";
      hasError = true;
    }

    if (hasError) {
      formMessage.textContent =
        "Por favor completa los campos requeridos correctamente.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent =
      "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.";
    formMessage.style.color = "var(--primary-color)";

    form.reset();
  });

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
