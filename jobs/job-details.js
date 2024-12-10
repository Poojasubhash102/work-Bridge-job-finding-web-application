// jobDetails.js
const jobDetailsContainer = document.getElementById("jobDetails");
const selectedJob = JSON.parse(localStorage.getItem("selectedJob")); // Retrieve job details from localStorage

if (selectedJob) {
    jobDetailsContainer.innerHTML = `
        <div class="job-header">
            <div class="job-img-row">
                <img src="${selectedJob.image}" alt="${selectedJob.company}" class="job-img">
                <div>
                    <h2>${selectedJob.title}</h2>
                    <p class="company">${selectedJob.company}</p>
                </div>
            </div>
            <p class="salary">Salary: ${selectedJob.salary}</p>
            <p class="job-type">Type: ${selectedJob.type}</p>
        </div>
        <div class="job-description">
            <h3>Job Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. Ut in lacus quis libero ultricies gravida sit amet quis mauris. Proin ac justo non nunc aliquet viverra. </p>
            <p>Skills Required: JavaScript, HTML, CSS, React</p>
            <p>Location: Remote</p>
            <p>Experience: 2+ years</p>
        </div>
        <button id="applyButton" class="apply-btn">Apply for Job</button>
    `;
} else {
    jobDetailsContainer.innerHTML = `<p>No job selected. Go back to the jobs list and select a job.</p>`;
}

// Apply Button Event Listener
const applyButton = document.getElementById("applyButton");
if (applyButton) {
    applyButton.addEventListener("click", () => {
        // Redirect to an application form page or open a form modal
        window.location.href = "apply.html";
    });
}
