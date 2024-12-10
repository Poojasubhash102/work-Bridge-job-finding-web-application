
const jobs = [
    { company: "Google", title: "Web Developer (Full Time)", salary: "₹80000-85000", type: "Full Time", image: "images/google.png", id: 1 },
    { company: "Microsoft", title: "Freelancer Web Developer", salary: "₹85000-90000", type: "Freelancer", image: "images/microsoft.png", id: 2 },
    { company: "Facebook", title: "Web Developer (Part Time)", salary: "₹6000-9000", type: "Part Time", image: "images/facebook.png", id: 3 },
    { company: "linkedin", title: "HR (Full Time)", salary: "₹50000-60000", type: "Full Time", image: "images/linkedin.png", id: 4 },
    { company: "Microsoft", title: " Training Supervisor", salary: "₹60000-65000", type: "Freelancer", image: "images/uber.png", id: 5 },
    { company: "Facebook", title: "Manager  (Part Time)", salary: "₹9000-10000", type: "Part Time", image: "images/shopping.png", id: 6 },
    { company: "Rakuten", title: "Cooperate Trainer (Full Time)", salary: "₹80000-85000", type: "Full Time", image: "images/rakuten7982.jpg", id: 7 },
    { company: "Deloitte", title: "Cyber Security Manager", salary: "₹85000-90000", type: "Freelancer", image: "images/Deloitte_Logo.png", id: 8 },
    { company: "HP", title: "Data Scientist (Part Time)", salary: "₹20000-30000", type: "Part Time", image: "images/hp.png", id: 9 },
    { company: "Apple", title: "AI Training Expert (Full Time)", salary: "₹90000-100000", type: "Full Time", image: "images/apple.png", id: 10 },
    { company: "Dell", title: " FullStack Developer", salary: "₹60000-65000", type: "Freelancer", image: "images/dell.png", id: 11 },
    { company: "Infosys", title: "Frontend Developer  (Part Time)", salary: "₹15000-30000", type: "Part Time", image: "images/infosys.png", id: 12 },
    
    // ... Add other jobs here
];

const jobListContainer = document.getElementById("root");

// Dynamically add job listings
jobs.forEach((job) => {
    const jobItem = document.createElement("div");
    jobItem.classList.add("jlist");
    jobItem.setAttribute("data-item", job.type.toLowerCase());
    jobItem.setAttribute("data-id", job.id); 

    jobItem.innerHTML = `
        <img src="${job.image}" alt="${job.company}">
        <h3>${job.title}</h3>
        <p>${job.salary}</p>
        <span id="key">${job.type}</span>
    `;

    
    jobItem.addEventListener("click", () => {
        localStorage.setItem("selectedJob", JSON.stringify(job)); 
        window.location.href = "jobDetails.html"; 
    });

    jobListContainer.appendChild(jobItem);
});
