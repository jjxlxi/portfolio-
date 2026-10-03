document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll("#navMenu a");


    

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navMenu.classList.toggle("active");

            document.body.classList.toggle("menu-open", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Close menu after clicking a link */

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                document.body.classList.remove("menu-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    

    const year = document.querySelector(".footer-content p");

    if (year) {

        year.textContent =
            `© ${new Date().getFullYear()} Jelai P. Fabricante`;

    }


    

    const images = document.querySelectorAll("img");

    images.forEach((image) => {

        image.addEventListener("error", () => {

            image.style.display = "none";

            const parent = image.parentElement;

            if (parent) {
                parent.classList.add("image-missing");
            }

        });

    });


    console.log("Welcome to Jelai's portfolio!");

});