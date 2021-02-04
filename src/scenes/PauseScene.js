class PauseScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'PauseScene',
        });
    }

    init(data) {
        this.hasPlayer2 = data.hasPlayer2;
        this.initialTime = data.initialTime;
    }

    preload() {}

    create() {
        this.resumeText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Resume', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.resume('GameScene');
            this.scene.stop();
        });

        this.restartText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 100, 'Main Menu', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('TitleScene');
            this.scene.stop('GameScene');
            this.scene.stop();
        });

        this.resetGameText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'Reset Game', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.stop('GameScene');
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: this.initialTime,
            });
            this.scene.stop();
        });
    }

    update() {}
}

export default PauseScene;
