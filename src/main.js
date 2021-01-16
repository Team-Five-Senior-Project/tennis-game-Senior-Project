import 'phaser';
import GameScene from './scenes/GameScene';
import Clouds from './scenes/Clouds';

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade'
    },
    scene: [GameScene, Clouds]
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
