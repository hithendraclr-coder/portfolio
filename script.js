document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // EmailJS Setup
    // ==============================

    emailjs.init("etnCKvU-29eyeojr7");

    const form = document.getElementById("contact-form");

    if (form) {

        const submitBtn = form.querySelector("button[type='submit']");

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = "Sending...";
            }

            const templateParams = {
                from_name:  document.getElementById("name").value.trim(),
                from_email: document.getElementById("email").value.trim(),
                subject:    document.getElementById("subject").value.trim(),
                message:    document.getElementById("message").value.trim()
            };

            emailjs.send("service_setcmlk", "template_k5lgfg2", templateParams)
                .then(function () {

                    alert("✅ Message Sent Successfully!");
                    form.reset();

                })
                .catch(function (error) {

                    console.error("EmailJS Error:", error);
                    alert("❌ Failed to send message. Please try again.");

                })
                .finally(function () {

                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerText = "Send Message";
                    }

                });

        });

    }

    // ==============================
    // Fade Animation (Scroll Reveal)
    // ==============================

    const elements = document.querySelectorAll(
        ".project-card, .card, .skill-box, .cert-card, .info-card, .goal-card, .info-box"
    );

    if (elements.length > 0) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity    = "1";
                    entry.target.style.transform  = "translateY(0px)";
                    observer.unobserve(entry.target); // stop watching once visible

                }

            });

        }, { threshold: 0.15 });

        elements.forEach(function (element) {

            element.style.opacity    = "0";
            element.style.transform  = "translateY(40px)";
            element.style.transition = "opacity 0.8s ease, transform 0.8s ease";

            observer.observe(element);

        });

    }

    // ==============================
    // Footer Year
    // ==============================

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
            "© " +
            new Date().getFullYear() +
            " DASARANNA GAARI HITHENDRA | All Rights Reserved";

    }

    // ==============================
    // Typing Effect
    // ==============================

    const title = document.querySelector(".hero-text h2");

    if (title) {

        const text  = "Software Engineer";
        let   index = 0;

        title.innerHTML = "";

        function typeText() {

            if (index < text.length) {

                title.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeText, 100);

            }

        }

        typeText();

    }

    // ==============================
    // Button Glow Effect
    // ==============================

    const buttons = document.querySelectorAll(
        ".btn, .btn-outline, .project-btn, .github-btn, .social-btn"
    );

    buttons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {

            button.style.boxShadow = "0 0 20px #00f7ff, 0 0 40px #00f7ff";

        });

        button.addEventListener("mouseleave", function () {

            button.style.boxShadow = "none";

        });

    });

});