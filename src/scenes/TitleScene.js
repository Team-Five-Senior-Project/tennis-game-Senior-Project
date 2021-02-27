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

        this.load.image('logo_auntieannes', 'assets/images/auntieannes.png');
        this.load.image('logo_burritobeach', 'assets/images/bb.png');
        this.load.image('logo_chicagosports', 'assets/images/chisports.png');
        this.load.image('logo_dunkindonuts', 'assets/images/dd.png');
    }

    create() {
        this.bg = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bg');

        this.logo1 = this.add.image(150, 100, 'logo_auntieannes');
        this.logo2 = this.add.image(this.cameras.main.width - 450, 125, 'logo_burritobeach');
        this.logo3 = this.add.image(this.cameras.main.width - 175, 250, 'logo_chicagosports');
        this.logo4 = this.add.image(150, 250, 'logo_dunkindonuts');

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
