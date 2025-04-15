const carousel = document.getElementById('carousel');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const scrollAmount = 320;

  prev.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });