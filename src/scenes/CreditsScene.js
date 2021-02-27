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

        this.teamLeadTitleText = this.add.text(200, 200, 'Team Lead', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#53862D',
        });
        this.teamLeadText = this.add.text(200, 300, 'Syed Husain', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#124E78',
        });

        this.devTeamTitleText = this.add.text(200, 500, 'Development Team', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#53862D',
        });
        this.devTeamText = this.add.text(200, 600, 'Alejandro Bianucci\nPaul Eiche\nJustin Moss', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#124E78',
        });

        this.gameplayTitleText = this.add.text(1000, 300, 'Graphics & Gameplay', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#53862D',
        });
        this.gameplayText = this.add.text(1000, 400, 'Tobin Keruppayil\nMichael Fiotakis\nAnthony Talharim', {
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
