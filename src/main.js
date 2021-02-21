import 'phaser';
import TitleScene from './scenes/TitleScene';
import GameChooseScene from './scenes/GameChooseScene';
import GameScene from './scenes/GameScene';
import PauseScene from './scenes/PauseScene';
import EndScene from './scenes/EndScene';
import SliderPlugin from 'phaser3-rex-plugins/plugins/slider-plugin.js';

const WebFont = require('webfontloader');

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
        GameChooseScene,
        GameScene,
        PauseScene,
        EndScene,
    ],
};

window.addEventListener('load', () => {
    WebFont.load({
        google: {
            families: [
                'Raleway',
                'Roboto',
            ],
        },
        fontactive: () => {
            const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
        },
    });
});
