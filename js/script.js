const buttons = document.querySelector('.buttons');
const images = document.querySelectorAll('.section__img');
const activeImg = document.querySelector('.section__img.active');
let activeButton;

buttons.addEventListener('click', function (e) {
  if (e.target.closest('.buttons__button')) {
    activeButton = document.querySelector('.buttons__button.active');
    activeButton.classList.remove('active');
    e.target.classList.add('active');
    if (e.target.dataset.showImg) {
      for (const img of images) {
        img.classList.remove('active');
      }
      images[e.target.dataset.showImg - 1].classList.add('active');
    }
  }
});
