const button = document.getElementById("loveButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.classList.add("show");

  for (let i = 0; i < 14; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = ["💗", "💕", "💖", "💓", "✨"][Math.floor(Math.random() * 5)];

    heart.style.setProperty("--x", `${(Math.random() - 0.5) * 360}px`);
    heart.style.setProperty("--y", `${-80 - Math.random() * 280}px`);
    heart.style.left = `${48 + (Math.random() - 0.5) * 8}%`;
    heart.style.top = `${58 + (Math.random() - 0.5) * 8}%`;
    heart.style.animationDelay = `${Math.random() * 0.18}s`;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1700);
  }

  setTimeout(() => message.classList.remove("show"), 2200);
});
