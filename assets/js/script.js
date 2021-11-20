// const logo = document.querySelector('.header__img');

// logo.addEventListener('load', function () {
//   setInterval(function () {
//     logo.classList.add('bounce');
//   }, 3000);
// });

// const animate = document.querySelectorAll('.animate');

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const animate = document.querySelectorAll('.animate');

const showAnimation = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.dataset.animate === 'left' &&
    entry.target.classList.remove('fade--left');

  entry.target.dataset.animate === 'down' &&
    entry.target.classList.remove('fade--down');

  entry.target.dataset.animate === 'in' &&
    entry.target.classList.remove('fade--in');

  observer.unobserve(entry.target);
};

const animateObserver = new IntersectionObserver(showAnimation, {
  root: null,
  threshold: 0.15,
});

animate.forEach(function (el) {
  el.dataset.animate === 'left' && el.classList.add('fade--left');

  el.dataset.animate === 'down' && el.classList.add('fade--down');

  el.dataset.animate === 'in' && el.classList.add('fade--in');
  animateObserver.observe(el);
});
