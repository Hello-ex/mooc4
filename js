document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded!"); // onload event

    let images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        img.addEventListener("mouseover", function () {
            this.style.border = "5px solid blue";
            console.log("Mouseover event triggered on", this.alt);
        });

        img.addEventListener("mouseleave", function () {
            this.style.border = "none";
            console.log("Mouseleave event triggered on", this.alt);
        });

        img.addEventListener("focus", function () {
            this.style.outline = "5px solid red";
            console.log("Focus event triggered on", this.alt);
        });

        img.addEventListener("blur", function () {
            this.style.outline = "none";
            console.log("Blur event triggered on", this.alt);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
});

