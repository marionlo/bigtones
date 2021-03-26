var flkty = new Flickity( '.carousel', {
  imagesLoaded: true,
  percentPosition: false,
  pageDots: false,
  prevNextButtons: false,
  freeScroll: true,
  cellAlign: 'left',
});


// Select elements here
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');

const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove('hidden');
}

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

const playbackIcons = document.querySelectorAll('.playback-icons use');
const shape = document.querySelectorAll('.shape');

// updatePlayButton updates the playback icon and tooltip
// depending on the playback state
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

