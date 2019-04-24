export default class Hand {
    constructor (config) {
        // cards in hand
        this.cards = config.cards;

        // limit of card in hand
        this.limit = config.limit || 7;
    }
    
    addCard (card) {
        if (this.cards.length < this.limit) {
            this.cards.push(card);
            return true;
        } else {
            return false;
        }
    }

    removeCard (position) {
        return this.cards.splice(position, 1) || false;
    }

    getAllCards () {
        return this.cards;
    }

    getCardsCount () {
        return this.cards.length;
    }
}