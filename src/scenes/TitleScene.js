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

        this.startText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 50, 'Select Your Game', {
            fontFamily: 'Raleway',
            fontSize: '100px',
            origin: 0.5,
        }).setOrigin(0.5);

        this.onePlayerText = this.add.text(this.cameras.main.centerX - 300, this.cameras.main.centerY + 50, 'One Player', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameChooseScene', {
                hasPlayer2: false,
            });
            this.scene.stop();
        });

        this.twoPlayerText = this.add.text(this.cameras.main.centerX + 300, this.cameras.main.centerY + 50, 'Two Players', {
            fontFamily: 'Raleway',
            fontSize: '75px',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameChooseScene', {
                hasPlayer2: true,
            });
            this.scene.stop();
        });
    }

    update() {}
}

export default TitleScene;
