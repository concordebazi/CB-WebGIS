// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");

            const isOpen =
            navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    const navItems =
    navLinks.querySelectorAll("a");


    navItems.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove("active");

                    menuToggle.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );

}
/* ==========================================
   CONTACT FORM SUBMISSION
========================================== */

const contactForm =
document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const formData =
            new FormData(contactForm);

            try {

                const response =
                await fetch(
                    contactForm.action,
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            "Accept": "application/json"
                        }
                    }
                );

                if (response.ok) {

                    window.location.href =
                    "thank-you.html";

                } else {

                    alert(
                        "Something went wrong. Please try again."
                    );

                }

            } catch (error) {

                alert(
                    "Something went wrong. Please try again."
                );

            }

        }
    );

}
