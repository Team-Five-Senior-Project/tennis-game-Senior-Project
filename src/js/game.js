// Creates a game obj and stores it in variable 'scene'
// A scene is a set of functions that are called duing the game
var scene = new Phaser.Scene('game');

// Canvas config
var config = {
  type: Phaser.AUTO,
  scale: {
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: scene
};

// Game object -> setting up the game before it runs using the configs
var game = new Phaser.Game(config);

// init function -> to store score and other variables
scene.init = () => {
  this.score = 0;
};

// Preload funtion to load images, audio, etc.
scene.preload = () => {
  // load assests
};

// Create function to load the preloaded elements
scene.create = () => {};

// Update function is where the game logic goes: movement, interactions, scoreing, etc.
scene.update = () => {};
