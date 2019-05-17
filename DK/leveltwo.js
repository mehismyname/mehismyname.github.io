var LeveltwoScene = new Phaser.Class({
    Extends: Phaser.Scene,

    platform: null,
    BigDDDD: null,

    initialize: function LeveltwoScene () {
        Phaser.Scene.call(this, {key: 'LeveltwoScene'})
    },

    preload: function() {
        this.load.image('BigD', 'assets/BigD.jpg');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('BigH', 'assets/hero.jpg');
        this.load.image('Barrel', 'assets/barrel.png');
    },



    create: function () {
        this.Hero = this.physics.add.sprite(500, 390, 'BigH').setScale(0.1);
        console.log('TESTING!');
        console.log('1');
        console.log('2');
        console.log('3');

    },



    update: function () {

        if (this.cursors.left.isDown)
        {

            this.Hero.setVelocityX(-290);

        } else if (this.cursors.right.isDown)
        {
            this.Hero.setVelocityX(+290);

        } else {
            this.Hero.setVelocityX(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.Hero.setVelocityY(-490);
        }
    },


});