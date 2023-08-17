document.addEventListener("DOMContentLoaded", function () {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach((detailsElement) => {
        const summaryElement = detailsElement.querySelector("summary");
        const contentElement = detailsElement.querySelector(".Driverdetails");

        summaryElement.addEventListener("click", () => {
            detailsElements.forEach((otherDetails) => {
                if (otherDetails !== detailsElement) {
                    otherDetails.removeAttribute("open");
                }
            });

            contentElement.style.height = contentElement.scrollHeight + "px";
            contentElement.classList.add("open");
        });

        detailsElement.addEventListener("toggle", () => {
            if (detailsElement.hasAttribute("open")) {
                contentElement.style.height = contentElement.scrollHeight + "px";
                contentElement.classList.add("open");
            } else {
                contentElement.style.height = "0";
                contentElement.classList.remove("open");
            }
        });
    });
});
