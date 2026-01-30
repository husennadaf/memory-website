// 🎵 Background music toggle
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.onclick = () => {
  if (music.paused) {
    music.play();
    btn.innerText = "⏸ Pause Music";
  } else {
    music.pause();
    btn.innerText = "▶ Play Music";
  }
};

// 🖼️ Image zoom
function zoomImage(img) {
  document.getElementById("imgModal").style.display = "flex";
  document.getElementById("zoomImg").src = img.src;
}

function closeZoom() {
  document.getElementById("imgModal").style.display = "none";
}

const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (footerTop < screenHeight - 100) {
    footer.classList.add("show");
  }
});

