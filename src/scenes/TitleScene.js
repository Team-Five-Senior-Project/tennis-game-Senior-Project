class TitleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TitleScene',
        });
    }

    preload() {
        // TODO: replace the main screen background image
        this.load.image('bg', 'assets/images/ground.png');
    }

    create() {
        this.bg = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bg');

        let startText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 50, 'Select Your Game');
        startText.setOrigin(0.5);
        startText.setScale(5);

        let onePlayerText = this.add.text(this.cameras.main.centerX - 300, this.cameras.main.centerY + 50, 'One Player');
        onePlayerText.setOrigin(0.5);
        onePlayerText.setScale(4);
        onePlayerText.setInteractive({ useHandCursor: true });
        onePlayerText.on('pointerdown', () => {
            this.scene.start('GameScene', { hasPlayer2: false });
        });

        let twoPlayerText = this.add.text(this.cameras.main.centerX + 300, this.cameras.main.centerY + 50, 'Two Players');
        twoPlayerText.setOrigin(0.5);
        twoPlayerText.setScale(4);
        twoPlayerText.setInteractive({ useHandCursor: true });
        twoPlayerText.on('pointerdown', () => {
            this.scene.start('GameScene', { hasPlayer2: true });
        });
    }

    update() {
        // 
    }
}

export default TitleScene;
