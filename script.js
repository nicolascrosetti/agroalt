window.onload = function() {
    new Glide('.glide', {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      gap: 40,
      breakpoints: {
        768: {
          perView: 1
        }
      }
    }).mount();
}