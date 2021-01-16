class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('ground', 'assets/images/ground.png');
    }

    create() {
        this.add.image(960, 540, 'ground');
    }

    update() {
        //
    }
}

export default GameScene;
