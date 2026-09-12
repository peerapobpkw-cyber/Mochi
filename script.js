const loveButton = document.getElementById("loveButton");
const navHeart = document.getElementById("navHeart");

function sendLove() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.className = "heart-pop";
    heart.textContent = ["💗","💕","💖","♡","✨"][Math.floor(Math.random()*5)];
    heart.style.left = `${45 + Math.random()*10}%`;
    heart.style.top = `${58 + Math.random()*8}%`;
    heart.style.setProperty("--x", `${(Math.random()-.5)*380}px`);
    heart.style.animationDelay = `${Math.random()*.25}s`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1600);
  }
  loveButton.textContent = "♡ Love sent!";
  setTimeout(() => loveButton.textContent = "♡ Send Love", 1500);
}
loveButton.addEventListener("click", sendLove);
navHeart.addEventListener("click", sendLove);
