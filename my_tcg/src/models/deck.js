export default class Deck {
    constructor (config) {
        this.cards = config.cards;
    }
    
    shuffle () {
        let cards = this.cards;
        if (cards.length > 1) {
            for (let i = cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cards[i], cards[j]] = [cards[j], cards[i]];
            }
            this.cards = cards;
            return true;
        } else {
            return false
        }
    }

    draw () {
        if (this.cards.length > 0) {
            return this.cards.shift();
        } else {
            return false;
        }
    }

    insertAt(card, position = this.getCardsCount()) {
        this.cards.splice(position, 0, card);
    }

    getCardsCount () {
        return this.cards.length;
    }
}