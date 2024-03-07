// Anime.js animation for the header
anime({
  targets: '.header-container',
  translateY: [-50, 0],
  opacity: [0, 1],
  easing: 'easeInOutQuad',
  duration: 1500
});

// Anime.js animation for the comics section
anime({
  targets: '#comics-section .comics-container',
  translateY: [-50, 0],
  opacity: [0, 1],
  easing: 'easeInOutQuad',
  duration: 1500,
  delay: 500
});

// Anime.js animation for the manga section
anime({
  targets: '#manga-section .manga-container',
  translateY: [-50, 0],
  opacity: [0, 1],
  easing: 'easeInOutQuad',
  duration: 1500,
  delay: 1000
});

// Anime.js animation for the "About Us" section
anime({
  targets: '#about-section .about-container',
  translateY: [-50, 0],
  opacity: [0, 1],
  easing: 'easeInOutQuad',
  duration: 1500,
  delay: 1500
});
