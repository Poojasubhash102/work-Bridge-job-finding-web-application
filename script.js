// Sample job data (You can replace this with data fetched from your server)
const jobs = [
    { image: "images/google.png", title: "Web Developer (Full Time)", rate: "₹80000-85000", type: "fulltime" },
    { image: "images/microsoft.png", title: "Freelancer Web Developer", rate: "₹85000-90000", type: "freelancer" },
    { image: "images/facebook.png", title: "Web Developer (Part Time)", rate: "₹6000-9000", type: "parttime" },
    { image: "images/linkedin.png", title: "HR (Full Time)", rate: "₹50000-60000", type: "fulltime" },
    { image: "images/uber.png", title: "Training Supervisor", rate: "₹60000-65000", type: "freelancer" },
    { image: "images/shopping.png", title: "Learning Experience Manager (Part Time)", rate: "₹9000-10000", type: "parttime" },
    { image: "images/rakuten7982.jpg", title: "Cooperate Trainer (Part Time)", rate: "₹8000-10000", type: "parttime" },
    { image: "images/Deloitte_Logo.png", title: "Cyber Security Manager (Part Time)", rate: "₹10000-15000", type: "parttime" },
    { image: "images/hp.png", title: "Data Scientist (Full Time)", rate: "₹60000-70000", type: "fulltime" },
    { image: "images/apple.png", title: "AI Training Expert", rate: "₹80000-90000", type: "freelancer" },
    { image: "images/dell.png", title: "FullStack Developer (Full Time)", rate: "₹90000-100000", type: "fulltime" },
    { image: "images/infosys.png", title: "Frontend Developer", rate: "₹40000-45000", type: "freelancer" },
];

// Function to display job listings
const displayJobs = (jobs) => {
    const jobsContainer = document.querySelector('.jobs-container');
    jobsContainer.innerHTML = ""; // Clear previous listings

    jobs.forEach(job => {
        const jobElement = document.createElement("div");
        jobElement.className = "jlist";
        jobElement.innerHTML = `<img src="${job.image}" alt=""> <h3>${job.title}</h3> <p>${job.rate}</p> <span id="key">${job.type.charAt(0).toUpperCase() + job.type.slice(1)}</span>`;
        jobsContainer.appendChild(jobElement);
    });
};

const click=document.querySelector(".jlist");

click.addEventListener("click", ()=>{
    console.log("5463");
})

// Initial display of all jobs
displayJobs(jobs);

jobs.addEventListener


// Search functionality
document.querySelector('.search input').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm)
    );
    displayJobs(filteredJobs);
});
