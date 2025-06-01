const burgerBtn = document.getElementById('burger-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

const container = document.querySelector('.news-scroll-container');
const dots = document.querySelectorAll('.dot');

container.addEventListener('scroll', () => {
  const scrollLeft = container.scrollLeft;
  const cardWidth = container.offsetWidth;

  const index = Math.round(scrollLeft / cardWidth);

  dots.forEach(dot => dot.classList.remove('activ'));
  if (dots[index]) {
    dots[index].classList.add('activ');
  }
});

const reviewContainer = document.querySelector('.reviews-cards');
const reviewDots = document.querySelectorAll('.dot-review');

reviewContainer.addEventListener('scroll', () => {
  const scrollLeft = reviewContainer.scrollLeft;
  const cardWidth = reviewContainer.offsetWidth;
  const index = Math.round(scrollLeft / cardWidth);

  reviewDots.forEach(dot => dot.classList.remove('active'));
  if (reviewDots[index]) {
    reviewDots[index].classList.add('active');
  }
});
