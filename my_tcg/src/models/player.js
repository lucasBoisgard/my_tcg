import Pawn from './pawn';
import Board from './board';
import Hand from './hand';
import Cemetary from './cemetary';

export default class Player extends Pawn {
    constructor(config) {
        super (config)
        this.type = config.type;
        this.deck = config.deck;
        this.cemetary = new Cemetary({cards: []});
        this.hand = new Hand({cards: []});
        this.board = new Board({cards: []})
    }

    shuffle (deck = "deck") {
        if (deck == "deck") {
            this.deck.shuffle();
            return true;
        } else if (deck == "cemetary") {
            this.cemetary.shuffle();
            return true;
        } else {
            return false;
        }
    }

    draw () {
        return this.deck.draw();
    }

    playCard(position) {
        if (this.hand < position) {
            return false
        } else {
            this.board.push(this.hand.splice(position, 1));
            return true;
        }
    }
    
    discard(position) {
        if (this.hand < position) {
            return false
        } else {
            this.cemetary.push(this.hand.splice(position, 1));
            return true;
        }
    }

    attack(position, target) {
        if (this.board < position) {
            return false
        } else {
            this.board[position].attack(target);
            return true;
        }
    }

}
