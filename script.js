
const moments = [
  { src: 'assets/moment1.jpg', caption: 'Waktu kita pertama jalan bareng.' },
  { src: 'assets/moment2.jpg', caption: 'Hari ulang tahun kamu yang spesial banget.' },
  { src: 'assets/moment3.jpg', caption: 'Momen lucu yang nggak terlupakan!' }
];

let currentIndex = 0;

function openPortal() {
  const overlay = document.getElementById('transitionOverlay');
  const box = document.getElementById('momentBox');
  const wrapper = document.getElementById('momentWrapper'); // target scroll

  overlay.style.display = "flex";

  setTimeout(() => {
    overlay.style.display = "none";
    box.classList.add('show');
    showMoment(currentIndex);

    // Scroll otomatis ke bagian foto dengan smooth transition
    wrapper.scrollIntoView({ behavior: 'smooth' });

  }, 2000);
}

function showMoment(index) {
  const img = document.getElementById('momentImage');
  const caption = document.getElementById('momentCaption');
  img.src = moments[index].src;
  caption.textContent = moments[index].caption;
}

function showNext() {
  currentIndex = (currentIndex + 1) % moments.length;
  showMoment(currentIndex);
}
