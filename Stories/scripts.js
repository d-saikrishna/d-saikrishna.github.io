document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle-btn").forEach(button => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const isVisible = content.style.display === "block";
        content.style.display = isVisible ? "none" : "block";
        button.textContent = isVisible ? "Show more" : "Show less";
      });
    });
  });
  