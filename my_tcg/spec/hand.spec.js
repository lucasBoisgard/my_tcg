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

describe("Hand.setCards", function () {
    var foo;
    var arr;

    beforeEach(function () {
        foo = new Hand({cards:[1,2,3,4,5,6,7], limit: 2});
        arr = [1,2];
    });
    it("check si trop de carte on été distribué et les supprime si c'est le cas", function () {
        for (let i = 0; i < 6; i++) {
            expect(arr[i]).toBe(foo.cards[i]);            
        }
    })
});

describe("Hand.addCard", function () {
    it("check si la carte est ajoute dans la main", function () {
        let newTab = ["trefle", "coeur", "carreau", "pique", "new"];
        hand.addCard("new");
        for (let i = 0; i < newTab.length; i++) {
           expect(newTab[i]).toBe(hand.cards[i]);
        }
    });
    it("check return addCard", function () {
        expect(hand.cards.length).toBe(tab.length + 1);
    });
});

describe("Hand.removeCard", function () {
    var foo;

    it("check return function removeCard", function () {
        expect(hand.removeCard(0)).toBe("trefle");
    });
    it("check si la carte retourné a été supprimé", function () {
        foo = ["coeur", "carreau", "pique", "new"];
        for (let i = 0; i < hand.cards.length; i++) {
            expect(hand.cards[i]).toBe(foo[i]);
        }        
    });
});

describe("Hand.getAllCards", function () {
    var foo;
    var bar;

    it("check si toutes les cartes sont return", function () {
        foo = ["coeur", "carreau", "pique", "new"];
        bar = hand.getAllCards();
        for (let i = 0; i < hand.cards.length; i++) {
            expect(bar[i]).toBe(foo[i]);
        }        
    });
});

describe("Hand.getAllCards", function () {

    it("check si le bon nombre de carte est return", function () {
            expect(hand.getCardsCount()).toBe(4);
    });
});