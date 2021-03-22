console.log("Hello world");

var flkty = new Flickity( '.carousel', {
  imagesLoaded: true,
  percentPosition: false,
  fullscreen: true,
  pageDots: false,
  prevNextButtons: false,
  freeScroll: true,
  cellAlign: 'left',
on: {
  ready: function() {
    console.log('Flickity is ready');

  },
  select: function( index ) {
    console.log( 'Slide changed to' + index );

  }
}
});


// Select elements here
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');

const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove('hidden');
}