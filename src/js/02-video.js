import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const currentTimeKey = 'videoplayer-current-time';
const currentTime =
  Number(JSON.parse(localStorage.getItem(currentTimeKey))) || 0;
const throttleTime = 1000;

player.setCurrentTime(currentTime);
player.on('timeupdate', throttle(onPlay, throttleTime));

function onPlay(time) {
  localStorage.setItem(currentTimeKey, JSON.stringify(time.seconds));
}
