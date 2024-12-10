// jobSearch.js
const searchInput = document.getElementById("SearchBar");
const jobItems = document.querySelectorAll(".jlist");

// Filter jobs on input
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    jobItems.forEach((job) => {
        const title = job.querySelector("h3").textContent.toLowerCase();
        const type = job.getAttribute("data-item").toLowerCase();

        // Show or hide based on match
        if (title.includes(query) || type.includes(query)) {
            job.style.display = "grid";
        } else {
            job.style.display = "none";
        }
    });
});
