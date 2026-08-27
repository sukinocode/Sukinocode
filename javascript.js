let songTitleTimeout;

function toggleAudio() {
  const audio = document.getElementById('bg-music');
  const icon = document.getElementById('audio-icon');
  const toast = document.getElementById('song-title-toast');
  if (audio.paused) {
    audio.play();
    icon.innerHTML = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>';
    toast.classList.add('show');
    clearTimeout(songTitleTimeout);
    songTitleTimeout = setTimeout(function() {
      toast.classList.remove('show');
    }, 5000);
  } else {
    audio.pause();
    icon.innerHTML = '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';
    toast.classList.remove('show');
    clearTimeout(songTitleTimeout);
  }
}

function checkS4u() {
  if (localStorage.getItem('sub4unlock_done') === 'true') {
    const overlay = document.getElementById('sub4unlock-overlay');
    if (overlay) overlay.style.display = 'none';
  }
}

function handleS4uClick(btn) {
  const url = btn.getAttribute('data-url');
  if (url) {
    window.open(url, '_blank');
  }
  btn.classList.add('done');
  const badge = btn.querySelector('.s4u-badge');
  if (badge) {
    badge.textContent = 'Selesai';
  }
  const buttons = document.querySelectorAll('.s4u-btn[data-url]');
  const allDone = Array.from(buttons).every(b => b.classList.contains('done'));
  if (allDone) {
    localStorage.setItem('sub4unlock_done', 'true');
    const overlay = document.getElementById('sub4unlock-overlay');
    if (overlay) overlay.style.display = 'none';
  }
}

function skipS4u() {
  localStorage.setItem('sub4unlock_done', 'true');
  const overlay = document.getElementById('sub4unlock-overlay');
  if (overlay) overlay.style.display = 'none';
}

function switchTab(screenId, btn) {
  const screens = document.querySelectorAll('.screens-container > div');
  screens.forEach(s => s.style.display = 'none');
  const target = document.getElementById(screenId);
  if (target) {
    target.style.display = 'flex';
  }
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));
  if (btn) {
    btn.classList.add('active');
  }
}

window.addEventListener('DOMContentLoaded', function() {
  checkS4u();
  const defaultTab = document.querySelector('.tab');
  if (defaultTab) {
    switchTab('screen-games', defaultTab);
  }
});
