class PlayerConfig{
    constructor(settings) {
        this.xVectro = 0;
        this.yVectro = 0;
        this.speed = settings.defaultSpeed;
        this.zoom = settings.defaultZoom;

    }
}


module.exports = PlayerConfig;