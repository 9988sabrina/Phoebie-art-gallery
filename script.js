// Modal Logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Music Play/Pause Logic
window.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("musicBtn");
  const bgMusic = document.getElementById("bgMusic");

  // Required for Safari autoplay policy
  bgMusic.load();

  musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play().then(() => {
        musicBtn.textContent = "Pause Music";
      }).catch(err => {
        console.error("Playback failed:", err);
      });
    } else {
      bgMusic.pause();
      musicBtn.textContent = "Play Music";
    }
  });
});

