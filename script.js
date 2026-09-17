const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const phone = contactForm.querySelector('input[type="tel"]').value.trim();
    const interest = contactForm.querySelector("select").value;
    const message = contactForm.querySelector("textarea").value.trim();

    const whatsappMessage = `Hello DCE Prime Realty.

My name is ${name}.
Email: ${email}
Phone: ${phone}
I'm interested in: ${interest}

Message:
${message}`;

    const whatsappNumber = "2347015781293";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
    contactForm.reset();
  });
}
