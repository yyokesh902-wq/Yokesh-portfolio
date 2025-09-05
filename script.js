// Small interaction - project card click
document.querySelectorAll(".projects .card").forEach(project => {
  project.addEventListener("click", () => {
    alert(`You clicked on ${project.querySelector("h3").innerText}`);
  });
});

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});