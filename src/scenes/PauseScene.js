class PauseScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'PauseScene',
        });
    }

    init(data) {
        this.hasPlayer2 = data.hasPlayer2;
        this.initialTime = data.initialTime;
        this.scoreLimit = data.scoreLimit;
    }

    preload() {}

    create() {
        this.resumeText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'Resume Game', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#124E78',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.resume('GameScene');
            this.scene.stop();
        });

        this.resetGameText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Reset Game', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#124E78',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.stop('GameScene');
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: this.initialTime,
                scoreLimit: this.scoreLimit,
            });
            this.scene.stop();
        });

        this.mainMenuText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 100, 'Main Menu', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#124E78',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('TitleScene');
            this.scene.stop('GameScene');
            this.scene.stop();
        });
    }

    update() {}
}

export default PauseScene;
