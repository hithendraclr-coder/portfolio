```javascript
document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // EmailJS Setup
    // ==============================

    if (typeof emailjs !== "undefined") {
        emailjs.init({
            publicKey: "etnCKvU-29eyeojr7"
        });
    }

    const form = document.getElementById("contact-form");

    if (form) {

        const submitBtn = form.querySelector("button[type='submit']");

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            if (typeof emailjs === "undefined") {
                alert("Email service is unavailable. Please try again later.");
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = "Sending...";
            }

            const templateParams = {
                from_name: document.getElementById("name")?.value.trim() || "",
                from_email: document.getElementById("email")?.value.trim() || "",
                subject: document.getElementById("subject")?.value.trim() || "",
                message: document.getElementById("message")?.value.trim() || ""
            };

            emailjs.send(
                "service_setcmlk",
                "template_k5lgfg2",
                templateParams
            )
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
        ".project-card, .card, .skill-box, .cert-card, " +
        ".info-card, .goal-card, .info-box, .education-card"
    );

    if ("IntersectionObserver" in window && elements.length > 0) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.1
        });

        elements.forEach(function (element) {

            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";
            element.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            observer.observe(element);

        });

    } else {

        elements.forEach(function (element) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        });

    }

    // ==============================
    // Footer Year
    // ==============================

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.textContent =
            "© " +
            new Date().getFullYear() +
            " DASARANNA GAARI HITHENDRA | All Rights Reserved";

    }

    // ==============================
    // Typing Effect
    // ==============================

    const title = document.querySelector(".hero-text h2");

    if (title) {

        const text = "Software Engineer";
        let index = 0;

        title.textContent = "";

        function typeText() {

            if (index < text.length) {

                title.textContent += text.charAt(index);
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
        ".btn, .btn-outline, .project-btn, " +
        ".github-btn, .social-btn, .send-btn"
    );

    buttons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {

            button.style.boxShadow =
                "0 0 20px rgba(0, 247, 255, 0.7), " +
                "0 0 35px rgba(0, 247, 255, 0.4)";

        });

        button.addEventListener("mouseleave", function () {

            button.style.boxShadow = "";

        });

    });

});
```
