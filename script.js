document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Typed.js for dynamic typing effect
    new Typed("#typing-effect", {
        strings: ["Healthcare Data Analyst", "Health Informatics Specialist", "Graduate Teaching Assistant"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        smartBackspace: true
    });

    // Initialize AOS (Animate On Scroll)
    AOS.init({ duration: 1000, once: true, mirror: false });

    // Dark mode toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    function toggleDarkMode(isDark) {
        body.classList.toggle("dark-mode", isDark);
        darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem("darkMode", isDark);
    }

    toggleDarkMode(localStorage.getItem("darkMode") === "true");
    darkModeToggle.addEventListener("click", () => {
        toggleDarkMode(!body.classList.contains("dark-mode"));
    });

    // Back to top button
    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        window.pageYOffset > 300 ? backToTop.style.display = "block" : backToTop.style.display = "none";
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Skills data for D3.js visualization
    const skills = [
        { id: "Python", group: 1, label: "Python", level: 98 },
        { id: "SQL", group: 1, label: "SQL", level: 90 },
        { id: "Tableau", group: 1, label: "Tableau", level: 85 },
        { id: "Data Analysis", group: 2, label: "Data Analysis", level: 95 },
        { id: "Health Informatics", group: 2, label: "Health Informatics", level: 92 }
    ];

    // D3.js for skills graph
    const svg = d3.select("#skills-graph").append("svg")
        .attr("width", 600)
        .attr("height", 400);

    svg.selectAll("circle")
        .data(skills)
        .enter()
        .append("circle")
        .attr("cx", (d, i) => i * 100 + 50)
        .attr("cy", 200)
        .attr("r", d => d.level / 10)
        .attr("fill", "steelblue")
        .append("title")
        .text(d => `${d.label} (${d.level}%)`);
});
