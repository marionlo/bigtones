console.log("Hello world");

var flkty = new Flickity( '.carousel', {
  imagesLoaded: true,
  percentPosition: false,
  fullscreen: true,
  pageDots: false,
  prevNextButtons: false,
  freeScroll: true,
on: {
  ready: function() {
    console.log('Flickity is ready');

  },
  select: function( index ) {
    console.log( 'Slide changed to' + index );

  }
}
});
