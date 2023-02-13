import Player from '@vimeo/player';
console.dir(Player);

const player = new Player('vimeo-player');

player.on('play', function () {
  console.log('played the handstick video!');
});

// player.on('play', function () {
//   console.log('played the video!');
// });
// //

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
