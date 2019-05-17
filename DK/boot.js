var BootScene = new Phaser.Class({
    Extends: Phaser.Scene,



    initialize: function BootScene () {
        Phaser.Scene.call(this, {key: 'BootScene'})
        alert("Click on image to start");
    },

    preload: function() {
        this.load.image('boot', 'assets/boot.png');

    },

    create: function () {
        this.add.image(400, 300, 'boot');

        this.input.on('pointerdown', function () {
            alert("By, Kent Smith");
            this.scene.start('BarrelScene');
            alert("Sub 2 Pewdiepie SORRY I PUT THAT THERE BEFORE HE ENDED THE MEME");
        }, this);
    }


});

