(() => {
  const elem9 = document.querySelector('.double-room--simple .slick-prev');
  if (
    elem9 ===
    document.activeElement.querySelector('.double-room--simple .slick-prev')
  ) {
    elem9.addEventListener('mouseout', () => {
      elem9.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem10 = document.querySelector('.double-room--simple .slick-next');
  if (
    elem10 ===
    document.activeElement.querySelector('.double-room--simple .slick-next')
  ) {
    elem10.addEventListener('mouseout', () => {
      elem10.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem11 = document.querySelector('.double-room--luxe .slick-prev');
  if (
    elem11 ===
    document.activeElement.querySelector('.double-room--luxe .slick-prev')
  ) {
    elem11.addEventListener('mouseout', () => {
      elem11.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem12 = document.querySelector('.double-room--luxe .slick-next');
  if (
    elem12 ===
    document.activeElement.querySelector('.double-room--luxe .slick-next')
  ) {
    elem12.addEventListener('mouseout', () => {
      elem12.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem13 = document.querySelector('.triple-section .slick-prev');
  if (
    elem13 ===
    document.activeElement.querySelector('.triple-section .slick-prev')
  ) {
    elem13.addEventListener('mouseout', () => {
      elem13.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem14 = document.querySelector('.triple-section .slick-next');
  if (
    elem14 ===
    document.activeElement.querySelector('.triple-section .slick-next')
  ) {
    elem14.addEventListener('mouseout', () => {
      elem14.blur(); // removes the focus
    });
  }
})();
