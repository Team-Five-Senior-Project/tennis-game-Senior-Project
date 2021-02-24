class CreditsScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'CreditsScene',
        });
    }

    init() {
    }

    preload() {
        this.load.image('bg', 'assets/images/game_background.jpg');
    }

    create() {
        this.bg = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bg');

        this.creditsText = this.add.text(600, 200, 'Credits', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#53862D',
        });

        // weird indentation is necessary for newlines
        const contributors = `Syed Husain
Alejandro Biancucci
Anthony Talharim
Paul Eiche
Michael Fiotakis
Tobin Keruppayil
Justin Moss
        `;
        this.contributorsText = this.add.text(900, 200, contributors, {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#124E78',
        });

        this.mainMenuText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 400, 'Back to Main Menu', {
            fontFamily: 'Roboto',
            fontSize: '50px',
            color: '#124E78',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('TitleScene');
            this.scene.stop();
        });
    }

    update() {}
}

export default CreditsScene;
