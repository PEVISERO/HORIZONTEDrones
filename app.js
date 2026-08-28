const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const contactForm = document.querySelector("[data-contact-form]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileMenu?.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const fieldValue = (formData, fieldName) => {
  const value = formData.get(fieldName);
  return value && String(value).trim() ? String(value).trim() : "-";
};

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const message = [
    "*Solicitud de inspección técnica - HORIZONTEDrones*",
    "",
    `*Nombre:* ${fieldValue(formData, "nombre")}`,
    `*Empresa:* ${fieldValue(formData, "empresa")}`,
    `*WhatsApp:* ${fieldValue(formData, "telefono")}`,
    `*Correo:* ${fieldValue(formData, "email")}`,
    `*Tipo de proyecto:* ${fieldValue(formData, "proyecto")}`,
    `*Ubicación:* ${fieldValue(formData, "ubicacion")}`,
    `*Mensaje:* ${fieldValue(formData, "mensaje")}`
  ].join("\n");

  window.open(`https://wa.me/573172791305?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
