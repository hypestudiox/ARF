
  (function() {
    // create a new Library instance and store it in a variable called "projectsGrid"
    var projectsGrid = new FsLibrary('.collection-list')
    // run loadmore on our instance
    projectsGrid.loadmore({
      button: ".load-more-button",
      loadAll: false,
      resetIx: true,
      animation: {
        enable: true,
        duration: 500,
        easing: 'ease-out',
        effects: 'fade translate(0px,20px)'
      }
    })
  })();
