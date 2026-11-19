// Arnold.dev portfolio interactions
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Reveal sections as they enter the viewport.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// Reading progress indicator.
const progress = document.querySelector(".scroll-progress");
window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progress) progress.style.width = `${percentage}%`;
}, { passive: true });

// Footer year.
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Public GitHub profile data. The site still works if the API is unavailable.
async function loadGitHubProfile() {
  const repoCount = document.querySelector("#repo-count");
  const followerCount = document.querySelector("#follower-count");
  const message = document.querySelector("#github-message");
  try {
    const response = await fetch("https://api.github.com/users/arnold1121");
    if (!response.ok) throw new Error("GitHub profile could not be loaded.");
    const profile = await response.json();
    if (repoCount) repoCount.textContent = profile.public_repos ?? "—";
    if (followerCount) followerCount.textContent = profile.followers ?? "—";
    if (message) message.textContent = "Live public profile information from GitHub.";
  } catch (error) {
    if (message) message.textContent = "Visit GitHub to see the latest repositories and activity.";
  }
}
loadGitHubProfile();

// Contact form opens the visitor's email app. It does not send data to a server.
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Replace this address with the email address you want to publish.
    const recipient = "YOUR_EMAIL@example.com";
    if (recipient === "YOUR_EMAIL@example.com") {
      const note = document.querySelector("#form-note");
      if (note) note.textContent = "Please update YOUR_EMAIL@example.com in assets/js/main.js and index.html before using the contact form.";
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
