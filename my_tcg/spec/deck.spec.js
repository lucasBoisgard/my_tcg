const Deck = require('../src/models/deck.js')

describe("verifie la class deck", function () { 
    var Deckcards = Deck.cards;
    it("checks si le deck a été mélanger", function() {
        Deck.shuffle();
        expect(Deck.cards).toEqual(DeckCards);
      });
})