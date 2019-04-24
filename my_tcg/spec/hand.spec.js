import Hand from '../src/models/hand'

const hand = new Hand({cards:["trefle", "coeur", "carreau", "pique"]})
const handLim = new Hand({cards:["trefle", "coeur", "carreau", "pique"], limit: 10})
const tab = ["trefle", "coeur", "carreau", "pique"]


describe("Hand.constructor", function () {
    it("check des cartes de la main", function () {
        for (let index = 0; index < tab.length; index++) {
            expect(tab[index]).toBe(hand.cards[index]);
        }
    });
    it("check la limite possible de carte en main", function () {
        expect(hand.limit).toBe(7);
        expect(handLim.limit).toBe(10);
    });
});

describe("Hand.addCard", function () {
    it("check si la carte est ajouter a dans la main", function () {
        let newTab = ["trefle", "coeur", "carreau", "pique", "new"];
        hand.addCard("new");
        for (let i = 0; i < newTab.length; i++) {
           expect(newTab[i]).toBe(hand.cards[i]);
        }
    });
    it("check return addCard"), function () {
        expect(hand.cards.length).toBe(tab.length + 1);
    }
})