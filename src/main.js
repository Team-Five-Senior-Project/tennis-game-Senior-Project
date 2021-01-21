import 'phaser';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';
import PauseScene from './scenes/PauseScene';
import SliderPlugin from 'phaser3-rex-plugins/plugins/slider-plugin.js';

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    input: {
        activePointers: 3,
    },
    plugins: {
        global: [
            {
                key: 'rexSlider',
                plugin: SliderPlugin,
                start: true,
            },
        ],
    },
    physics: {
        default: 'arcade',
    },
    scene: [
        TitleScene,
        GameScene,
        PauseScene,
    ],
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
