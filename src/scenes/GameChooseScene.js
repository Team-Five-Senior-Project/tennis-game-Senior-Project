class GameChooseScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameChooseScene',
        });
    }

    init(data) {
        this.hasPlayer2 = data.hasPlayer2;
    }

    preload() {
        this.load.image('bg', 'assets/images/game_background.jpg');

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

        this.timedGameText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 300, 'Timed Game', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#53862D',
        }).setOrigin(0.5);

        this.timedGame30SecText = this.add.text(this.cameras.main.centerX - 200, this.cameras.main.centerY - 200, '0:30', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#124E78',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: 30,
                scoreLimit: -1,
            });
            this.scene.stop();
        });

        this.timedGame1MinText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 200, '1:00', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#124E78',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: 60,
                scoreLimit: -1,
            });
            this.scene.stop();
        });

        this.timedGame1Min30SecText = this.add.text(this.cameras.main.centerX + 200, this.cameras.main.centerY - 200, '1:30', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#124E78',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: 90,
                scoreLimit: -1,
            });
            this.scene.stop();
        });

        this.scoredGameText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Scored Game', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#53862D',
        }).setOrigin(0.5);

        this.scoredGame5Text = this.add.text(this.cameras.main.centerX - 200, this.cameras.main.centerY + 100, '5', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#124E78',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: -1,
                scoreLimit: 5,
            });
            this.scene.stop();
        });

        this.scoredGame10Text = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 100, '10', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#124E78',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: -1,
                scoreLimit: 10,
            });
            this.scene.stop();
        });

        this.scoredGame15Text = this.add.text(this.cameras.main.centerX + 200, this.cameras.main.centerY + 100, '15', {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#124E78',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: -1,
                scoreLimit: 15,
            });
            this.scene.stop();
        });

        this.mainMenuText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 300, 'Back to Main Menu', {
            fontFamily: 'Roboto',
            fontSize: '75px',
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

export default GameChooseScene;
