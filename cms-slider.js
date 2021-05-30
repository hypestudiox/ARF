
  (function() {
    // create a new Library instance and store it in a variable called "fsSlider"
    var fsSlider = new FsLibrary(".slider-data-feed");
    // run Slider on our instance
    fsSlider.slider({
      sliderComponent: ".slider-component",
      resetIx: true
    });
  })();
