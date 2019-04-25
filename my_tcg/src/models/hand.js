export default class Hand {
    constructor (config) {
        // limit of card in hand
        this.limit = config.limit || 7;
        // set cards in hand
        this.setCards(config.cards);
    }

    setCards (cards) {
        if (cards.length > this.limit) {
            cards.reverse().splice(0, cards.length - this.limit);
            cards.reverse();
        }
        this.cards = cards;
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
        return this.cards.splice(position, 1)[0] || false;
    }

    getAllCards () {
        return this.cards;
    }

    getCardsCount () {
        return this.cards.length;
    }
}