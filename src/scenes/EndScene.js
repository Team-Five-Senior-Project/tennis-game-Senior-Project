class EndScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'EndScene',
        });
    }

    init(data) {
        this.hasPlayer2 = data.hasPlayer2;
        this.initialTime = data.initialTime;
        this.scoreLimit = data.scoreLimit;
        this.score1 = data.score1;
        this.score2 = data.score2;
        this.numPlayers = this.hasPlayer2 ? 2 : 1;
    }

    preload() {
        this.load.image('game_backgroud', 'assets/images/game_background.jpg');
    }

    create() {
        this.ground = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'game_backgroud');

        this.gameOverText = this.add.text(this.cameras.main.centerX, 150, 'GAME OVER', {
            fontFamily: 'Roboto',
            fontSize: '100px',
            color: '#53862D',
        }).setOrigin(0.5);
        
        let scoreP1Txt = `Your Score: ${this.score1}`;
        let scoreP2Txt = `Your Score: ${this.score2}`;
        let winnerTextStr = null;
        if (this.score1 === this.score2) {
            winnerTextStr = 'It was a tie!';
        } else {
            switch (this.numPlayers) {
                case 1:
                    winnerTextStr = this.score1 > this.score2 ? `Congratulations Player ${this.numPlayers}!` : 'Nice try!';
                    break;
                case 2:
                    winnerTextStr = `Congratulations Player ${this.score1 > this.score2 ? 1 : 2}!`;
                    break;
                default:
                    break;
            }
        }
        
        this.yourScoreTxtP1 = this.add.text(this.cameras.main.centerX, (this.cameras.main.centerY / 2) + 300, scoreP1Txt, {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#53862D',
        }).setOrigin(0.5).setVisible(false);

        this.yourScoreTxtP2 = this.add.text(this.cameras.main.centerX, (this.cameras.main.centerY / 2) + 300, scoreP2Txt, {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#53862D',
        }).setOrigin(0.5).setVisible(false);

        // Conditionally display player's score
        if (this.score1 > this.score2) {
            this.yourScoreTxtP1.setVisible(true);
        } else if (this.numPlayers === 2 && this.score1 < this.score2) {
            this.yourScoreTxtP2.setVisible(true);
        }
        
        this.winnerText = this.add.text(this.cameras.main.centerX, (this.cameras.main.centerY / 2) + 200, winnerTextStr, {
            fontFamily: 'Roboto',
            fontSize: '75px',
            color: '#53862D',
        }).setOrigin(0.5);

        this.mainMenuText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 200, 'Main Menu', {
            fontFamily: 'Roboto',
            fontSize: '50px',
            color: '#124E78',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('TitleScene');
            this.scene.stop();
        });
        
        // reset current game
        this.resetGameText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'Reset Game', {
            fontFamily: 'Roboto',
            fontSize: '50px',
            color: '#124E78',
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true,
        }).on('pointerdown', () => {
            this.scene.launch('GameScene', {
                hasPlayer2: this.hasPlayer2,
                initialTime: this.initialTime,
                scoreLimit: this.scoreLimit,
            });
            this.scene.stop();
        });
    }

    update() {}
}

export default EndScene;
