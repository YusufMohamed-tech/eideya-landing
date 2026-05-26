// Fallback name if the link has no ?name= value.
const defaultUserName = "[الاسم]";

// Example: index.html?name=أبو%20ماسه
const urlParams = new URLSearchParams(window.location.search);
const userName = (urlParams.get("name") || defaultUserName).trim() || defaultUserName;

const finalMessageTemplate =
  "كل عام وانت بخير يا [الاسم] .. ليك عيدية خاصة عشاء لفردين .. للحصول على العيدية برجاء تخفيض التارجت ٢٠٪؜";

const homeScreen = document.getElementById("homeScreen");
const resultScreen = document.getElementById("resultScreen");
const claimBtn = document.getElementById("claimBtn");
const backBtn = document.getElementById("backBtn");
const homeGreeting = document.getElementById("homeGreeting");
const finalMessage = document.getElementById("finalMessage");
const confettiLayer = document.getElementById("confettiLayer");

function fillName(text) {
  return text.replaceAll("[الاسم]", userName);
}

function showScreen(screenToShow, screenToHide) {
  screenToHide.classList.remove("is-active");
  screenToShow.classList.add("is-active");
}

function launchConfetti() {
  const colors = ["#d8a735", "#a72d2b", "#173f35", "#fff3d1", "#f6d36a"];

  confettiLayer.innerHTML = "";

  for (let i = 0; i < 34; i += 1) {
    const piece = document.createElement("span");
    const size = Math.random() * 8 + 7;

    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.width = `${size}px`;
    piece.style.height = `${size * 1.45}px`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.18}s`;
    piece.style.setProperty("--drift", `${Math.random() * 160 - 80}px`);

    confettiLayer.appendChild(piece);
  }

  window.setTimeout(() => {
    confettiLayer.innerHTML = "";
  }, 1200);
}

function updateCopy() {
  homeGreeting.textContent = fillName("كل عام وأنت بخير يا [الاسم]");
  finalMessage.textContent = fillName(finalMessageTemplate);
}

claimBtn.addEventListener("click", () => {
  updateCopy();
  launchConfetti();
  showScreen(resultScreen, homeScreen);
});

backBtn.addEventListener("click", () => {
  showScreen(homeScreen, resultScreen);
});

updateCopy();
