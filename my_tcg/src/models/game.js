import EventManager from "../eventManager"

export default class Game extends EventManager {
    constructor (config) {
        super(config);
        this.up = config.up;
        this.down = config.down;
        this.turn = "up";
    }

    getTurn () {
        return this.turn;
    }

    changeTurn () {
        if (this.turn == "up") {
            return this.turn = "down";
        } else {
            return thus.turn = "up";
        }
    }

    proxy(side, action, payload) {
        return this[side][action](payload);
    }
 }