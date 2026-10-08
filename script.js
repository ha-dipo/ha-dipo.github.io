'use strict';

// Keep a video gallery quiet and make failures visible without a dependency.
const videos = [...document.querySelectorAll('video')];
for (const video of videos) {
  video.addEventListener('play', () => {
    for (const other of videos) if (other !== video && !other.paused) other.pause();
  });
  const showError = () => {
    const message = video.closest('.video-frame')?.querySelector('.media-error');
    if (message) message.hidden = false;
  };
  video.addEventListener('error', showError);
  video.querySelector('source')?.addEventListener('error', showError);
}
