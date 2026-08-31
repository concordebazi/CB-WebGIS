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
