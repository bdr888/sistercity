import React, { Component, PureComponent } from 'react';


// window.addEventListener('load', () => {
// 	var
// 		carousels = document.querySelectorAll('.carousel')
// 	;

// 	for (var i = 0; i < carousels.length; i++) {
// 		carousel(carousels[i]);
// 	}
// });

function carousel(root) {
  const figure = root.querySelector('figure');
  const nav = root.querySelector('nav');
  const images = figure.children;
  const n = images.length;
  const gap = root.dataset.gap || 0;
  const bfc = 'bfc' in root.dataset;
  const theta = 2 * Math.PI / n;
  const currImage = 0;


  function setupCarousel(n, s) {
    const
      apothem = s / (2 * Math.tan(Math.PI / n));

    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener('resize', () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });

    setupNavigation();

    function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }

    figure.style.transformOrigin = `50% 50% ${-apothem}px`;

    for (var i = 0; i < n; i++) { images[i].style.padding = `${gap}px`; }
    for (i = 1; i < n; i++) {
      images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
      images[i].style.transform = `rotateY(${i * theta}rad)`;
    }
    if (bfc) {
      for (i = 0; i < n; i++) { images[i].style.backfaceVisibility = 'hidden'; }
    }

    rotateCarousel(currImage);
  }

  function setupNavigation() {
    nav.addEventListener('click', onClick, true);

    function onClick(e) {
      e.stopPropagation();

      const t = e.target;
      if (t.tagName.toUpperCase() != 'BUTTON') { return; }

      if (t.classList.contains('next')) {
        currImage++;
      } else {
        currImage--;
      }

      rotateCarousel(currImage);
    }
  }
}
class Carousel extends Component {
  render() {
    return (
      <div>
        <h2>Eight images, with 80px gap</h2>
        <div className="carousel" data-gap="80">
          <figure>
            <img src="https://source.unsplash.com/VkwRmha1_tI/800x533" alt="" />
            <img src="https://source.unsplash.com/EbuaKnSm8Zw/800x533" alt="" />
            <img src="https://source.unsplash.com/kG38b7CFzTY/800x533" alt="" />
            <img src="https://source.unsplash.com/nvzvOPQW0gc/800x533" alt="" />
            <img src="https://source.unsplash.com/mCg0ZgD7BgU/800x533" alt="" />
            <img src="https://source.unsplash.com/1FWICvPQdkY/800x533" alt="" />
            <img src="https://source.unsplash.com/bjhrzvzZeq4/800x533" alt="" />
            <img src="https://source.unsplash.com/7mUXaBBrhoA/800x533" alt="" />
          </figure>
          <nav>
            <button className="nav prev">Prev</button>
            <button className="nav next">Next</button>
          </nav>
        </div>
      </div>
    );
  }
}

export default Carousel;
