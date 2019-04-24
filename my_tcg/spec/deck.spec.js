import Deck from '../src/models/deck'
const deck = new Deck({cards:[1, 2, 3, 3]})    

describe("Deck.shuffle", function () { 
    it("checks si le deck a été mélanger", function() {
        deck.shuffle()
        expect([1, 2, 3, 3]).not.toBe(deck.cards);
        
      });
    it("check si shuffle return true", function () {
        expect(true).toBe(deck.shuffle());
    })
})

describe("Deck.draw", function () {
    it("check le retour de draw()", function () {
        expect(deck.cards[0]).toBe(deck.draw())
    });
    it('check la suppression de la carte tiré', function () {
        expect(deck.cards.length).toBe(3)
    })
}); 

describe("Deck.getCardsCount", function () {
    it("check return getCardsCount", function () {
        expect(deck.getCardsCount()).toBe(3);
    });
});