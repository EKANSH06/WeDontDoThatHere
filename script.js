let index = 0;

const slides = [
  {
    text: "Hey Juhi",
    sub: "Quick break from whatever’s going on."
  },
  {
    text: "Even Tony Stark needed a break sometimes.",
    sub: "You don’t have to solve everything today."
  },
  {
    text: "Happiness can be found, even in the darkest of times.",
    sub: "— Dumbledore"
  },
  {
    text: "You don’t need to prove anything today.",
    sub: "Just get through it."
  },
  {
    text: "We’re all figuring it out as we go.",
    sub: "And that’s okay."
  },
  {
    text: "",
    sub: "",
    button: true
  },
  {
    text: "Okay, that’s it.",
    sub: "Go back to your world."
  }
];

function nextSlide() {
  if (index >= slides.length - 1) return;
  index++;

  document.getElementById("message").innerText = "";

  const slide = slides[index];
  document.getElementById("text").innerText = slide.text;
  document.getElementById("subtext").innerText = slide.sub;

  document.getElementById("btn").style.display =
    slide.button ? "block" : "none";
}

function showMessage(e) {
  e.stopPropagation();
  document.getElementById("message").innerText =
    "Pause. Breathe. Nothing important is slipping away.";
}
