function startExperience() {
  document.querySelector(".overlay").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
  revealSections();
}

function showMessage() {
  document.getElementById("message").innerText =
    "Pause. Breathe. Continue later. Nothing important is slipping away.";
}

function revealSections() {
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        sec.classList.add("visible");
      }
    });
  });
}

// Easter eggs
document.addEventListener("keydown", (e) => {
  if (e.key === "l") {
    alert("Light shows up. Even if you don’t notice immediately.");
  }
  if (e.key === "s") {
    alert("Not everything has to make sense to matter.");
  }
});