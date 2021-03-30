// Setup Carousel
var flkty = new Flickity( '.carousel', {
  imagesLoaded: true,
  percentPosition: false,
  pageDots: false,
  prevNextButtons: false,
  freeScroll: true,
  cellAlign: 'left',
});


// Custom video controls, display video
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');

const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) { 
  video.controls = false;
  videoControls.classList.remove('hidden');
}

// Play, pause the video
const playButton = document.getElementById('play');
window.togglePlay = function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}
if(playButton){
  playButton.addEventListener('click', togglePlay);
}


// updatePlayButton updates the playback icon and tooltip
// depending on the playback state, remove our shape and the play button when playing
const playbackIcons = document.querySelectorAll('.playback-icons use');
const shape = document.querySelectorAll('.shape');

function updatePlayButton() {
  playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
  shape.forEach(icon => icon.classList.toggle('hidden'));
}

video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);


window.updatePlayButton = function updatePlayButton() {
  playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
  shape.forEach(icon => icon.classList.toggle('hidden'));

  if (video.paused) {
    playButton.setAttribute('data-title', 'Play (k)')
  } else {
    playButton.setAttribute('data-title', 'Pause (k)')
  }
}


video.addEventListener('click', togglePlay);

  // Add class hidden when we accept the cookies notice
window.addNewClass = function addNewClass(){
  var elem = document.getElementById("toasty");
  elem.className += " hidden";
}
