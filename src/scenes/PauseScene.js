class PauseScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'PauseScene',
        });
    }

    preload() {
        // 
    }

    create() {
        let resumeText = this.add.text(this.cameras.main.centerX, 50, 'Resume');
        resumeText.setOrigin(0.5);
        resumeText.setScale(5);
        resumeText.setInteractive({
            useHandCursor: true,
        });
        resumeText.on('pointerdown', () => {
            this.scene.resume('GameScene');
            this.scene.stop();
        });
    }

    update() {
        // 
    }
}

export default PauseScene;
