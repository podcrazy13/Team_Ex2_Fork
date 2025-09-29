function initLikeAndAlert() {
  const alertBtn = document.getElementById('alert-btn');
  if (alertBtn) {
    alertBtn.addEventListener('click', () => {
      alert('안녕하세요! 협업 실습입니다.');
    });
  }

  const likeBtn = document.getElementById('like-btn');
  const likeCountEl = document.getElementById('like-count');
  if (likeBtn && likeCountEl) {
    likeBtn.addEventListener('click', () => {
      const current = Number(likeCountEl.dataset.count || '0');
      const next = current + 1;
      likeCountEl.dataset.count = String(next);
      likeCountEl.textContent = String(next);
    });
  }
}

document.addEventListener('DOMContentLoaded', initLikeAndAlert);
<<<<<<< HEAD
function initDislike() {
const dislikeBtn = document.getElementById('dislike-btn');
const dislikeCountEl = document.getElementById('dislike-count');

if (dislikeBtn && dislikeCountEl) {
    dislikeBtn.addEventListener('click', () => {
    const current = Number(dislikeCountEl.dataset.count || '0');
    const next = current + 1;
    dislikeCountEl.dataset.count = String(next);
    dislikeCountEl.textContent = String(next);
    });
}
}
document.addEventListener('DOMContentLoaded', initDislike);
=======

function initDislike() {
  const dislikeBtn = document.getElementById('dislike-btn');
  const dislikeCountEl = document.getElementById('dislike-count');

  if (dislikeBtn && dislikeCountEl) {
    dislikeBtn.addEventListener('click', () => {
      const current = Number(dislikeCountEl.dataset.count || '0');
      const next = current + 1;
      dislikeCountEl.dataset.count = String(next);
      dislikeCountEl.textContent = String(next);
    });
  }
}
document.addEventListener('DOMContentLoaded', initDislike);
>>>>>>> 20299bc264401058f2f55996beb69e57222d3b27
