import 'phaser';
import GameScene from './scenes/GameScene';

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: [
        GameScene
    ]
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
