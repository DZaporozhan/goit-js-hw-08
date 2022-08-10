import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('play', function () {
  console.log('played the video!');
});
player.on('timeupdate', throttle(setTimeUpdate, 10000));

let parseSeconds;

function setTimeUpdate(currentTime) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(currentTime.seconds)
  );
  getParseSeconds();
}

function getParseSeconds() {
  const saveCurrentTime = localStorage.getItem('videoplayer-current-time');
  const parsedCurrentTime = JSON.parse(saveCurrentTime);
  if (saveCurrentTime) {
    return (parseSeconds = parsedCurrentTime);
  } else return (parseSeconds = 0);
}

player
  .setCurrentTime(getParseSeconds())
  .then(function (seconds) {
    seconds = parseSeconds;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
