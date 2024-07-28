document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    this.textContent = "brightness_7";
  } else {
    this.textContent = "brightness_2";
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});

document
  .querySelectorAll(".team-member, .service-item, .project, .testimonial")
  .forEach((item) => {
    observer.observe(item);
  });

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeToggleButton.textContent = "brightness_7";
  } else {
    body.classList.remove("dark");
    themeToggleButton.textContent = "brightness_2";
  }

  // Toggle theme on button click
  themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    themeToggleButton.textContent = isDarkMode
      ? "brightness_7"
      : "brightness_2";

    // Save theme preference to localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });

  // Animation on scroll
  const elements = document.querySelectorAll(
    ".team-member, .service-item, .project, .testimonial"
  );

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Theme toggle
//   const themeToggleButton = document.getElementById("theme-toggle");
//   const body = document.body;

//   themeToggleButton.addEventListener("click", () => {
//     body.classList.toggle("dark");
//     themeToggleButton.textContent = body.classList.contains("dark")
//       ? "brightness_7"
//       : "brightness_2";
//   });

//   // Animation on scroll
//   const elements = document.querySelectorAll(
//     ".team-member, .service-item, .project, .testimonial"
//   );

//   function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   function handleScroll() {
//     elements.forEach((element) => {
//       if (isInViewport(element)) {
//         element.classList.add("animate");
//       }
//     });
//   }

//   window.addEventListener("scroll", handleScroll);
//   handleScroll(); // Initial check
// });
