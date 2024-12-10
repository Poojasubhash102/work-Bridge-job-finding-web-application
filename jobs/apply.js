// apply.js
const applyForm = document.getElementById("applyForm");

applyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(applyForm);
    const applicantDetails = {
        name: formData.get("name"),
        email: formData.get("email"),
        resume: formData.get("resume").name, // Just a placeholder
    };

    console.log("Application Submitted:", applicantDetails);

    // Show confirmation or redirect
    alert("Your application has been submitted successfully!");
    window.location.href = "job.html"; // Redirect to the jobs page
});
