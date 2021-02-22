class TitleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TitleScene',
        });
    }

    preload() {
        this.load.image('bg', 'assets/images/game_background.jpg');
        this.load.svg('logo', 'assets/svg/around-the-world__logo.svg', {
            scale: 1.5,
        });

        this.load.image('pvp', 'assets/images/btn__play-player.png');
        this.load.image('pvc', 'assets/images/btn__play-computer.png');
    }

    create() {
        this.bg = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bg');

        this.logo = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY - 200, 'logo')
            .setOrigin(0.5);

        this.onePlayerBtn = this.add.image(this.cameras.main.centerX - 400, this.cameras.main.centerY + 150, 'pvc').setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameChooseScene', {
                hasPlayer2: false,
            });
            this.scene.stop();
        });

        this.twoPlayerBtn = this.add.image(this.cameras.main.centerX + 400, this.cameras.main.centerY + 150, 'pvp').setOrigin(0.5).setInteractive({
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
