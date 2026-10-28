// Property Search
const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const locationInput = document
        .getElementById("location")
        .value.trim()
        .toLowerCase();

    const propertyType = document.getElementById("propertyType").value;

    const properties = document.querySelectorAll(".property-card");

    let found = 0;

    properties.forEach(function (property) {
        const propertyLocation = property.textContent.toLowerCase();
        const type = property.dataset.type;

        const locationMatches =
            locationInput === "" || propertyLocation.includes(locationInput);

        const typeMatches =
            propertyType === "all" || type === propertyType;

        if (locationMatches && typeMatches) {
            property.style.display = "block";
            found++;
        } else {
            property.style.display = "none";
        }
    });

    if (found === 0) {
        alert("No properties found. Try another location or property type.");
    }

    document.getElementById("properties").scrollIntoView({
        behavior: "smooth"
    });
});


// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const responseMessage = document.getElementById("responseMessage");

    responseMessage.textContent =
        "Thank you, " + name + "! Your enquiry has been recorded in this demo.";

    contactForm.reset();
});