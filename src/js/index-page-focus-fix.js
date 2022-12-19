(() => {
  const elem1 = document.querySelector('.about-restaurant .slick-prev');
  if (
    elem1 ===
    document.activeElement.querySelector('.about-restaurant .slick-prev')
  ) {
    elem1.addEventListener('mouseout', () => {
      elem1.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem2 = document.querySelector('.about-restaurant .slick-next');
  if (
    elem2 ===
    document.activeElement.querySelector('.about-restaurant .slick-next')
  ) {
    elem2.addEventListener('mouseout', () => {
      elem2.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem3 = document.querySelector(
    '.section__details-restaurant .slick-prev'
  );
  if (
    elem3 ===
    document.activeElement.querySelector(
      '.section__details-restaurant .slick-prev'
    )
  ) {
    elem3.addEventListener('mouseout', () => {
      elem3.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem4 = document.querySelector(
    '.section__details-restaurant .slick-next'
  );
  if (
    elem4 ===
    document.activeElement.querySelector(
      '.section__details-restaurant .slick-next'
    )
  ) {
    elem4.addEventListener('mouseout', () => {
      elem4.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem5 = document.querySelector('.about-hotel .slick-prev');
  if (
    elem5 === document.activeElement.querySelector('.about-hotel .slick-prev')
  ) {
    elem5.addEventListener('mouseout', () => {
      elem5.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem6 = document.querySelector('.about-hotel .slick-next');
  if (
    elem6 === document.activeElement.querySelector('.about-hotel .slick-next')
  ) {
    elem6.addEventListener('mouseout', () => {
      elem6.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem7 = document.querySelector(
    '.section_details-of-our-hotel .slick-prev'
  );
  if (
    elem7 ===
    document.activeElement.querySelector(
      '.section_details-of-our-hotel .slick-prev'
    )
  ) {
    elem7.addEventListener('mouseout', () => {
      elem7.blur(); // removes the focus
    });
  }
})();

(() => {
  const elem8 = document.querySelector(
    '.section_details-of-our-hotel .slick-next'
  );
  if (
    elem8 ===
    document.activeElement.querySelector(
      '.section_details-of-our-hotel .slick-next'
    )
  ) {
    elem8.addEventListener('mouseout', () => {
      elem8.blur(); // removes the focus
    });
  }
})();
