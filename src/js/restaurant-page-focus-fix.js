(() => {
  const elem15 = document.querySelector('.about-kitchen .slick-prev');
  if (
    elem15 ===
    document.activeElement.querySelector('.about-kitchen .slick-prev')
  ) {
    elem15.addEventListener('mouseout', () => {
      elem15.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem16 = document.querySelector('.about-kitchen .slick-next');
  if (
    elem16 ===
    document.activeElement.querySelector('.about-kitchen .slick-next')
  ) {
    elem16.addEventListener('mouseout', () => {
      elem16.blur(); // removes the focus
    });
  }
})();
