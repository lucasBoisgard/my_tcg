import Pawn from '../src/models/pawn';

const pawn = new Pawn(100, 5, 2);
const pawnEnnemy = new Pawn(120, 3, 6);


describe ("Pawn.constructor", function () {
    it("check les valeurs de this.stats ", function () {
        expect(pawn.stats.hp).toBe(100);
        expect(pawn.stats.str).toBe(5);
        expect(pawn.stats.def).toBe(2);
    });
});

describe ("Pawn.getter", function () {
    it("check retour de getLife", function () {
        expect(pawn.getLife()).toBe(100);
    });
    it("check retour de getStrength", function () {
        expect(pawn.getStrength()).toBe(5);
    });
    it("check retour de getDef", function () {
        expect(pawn.getDef()).toBe(2);
    });
});

describe ("Pawn.attack", function () {
    beforeEach(function() {
        pawn.attack(pawnEnnemy);
    });
    it("check si la target a perdu le bon nombre de hp et c'est defendu", function () {
        expect(pawnEnnemy.stats.hp).toBe(115);
        expect(pawn.stats.hp).toBe(94);
    }); 
});

describe ("Pawn.recieveAttack", function () {
    it("check la reception d'une attaque", function () {
        pawn.recieveAttack(pawnEnnemy);
        expect(pawn.getLife()).toBe(91)
    });
    it("check la contre attaque", function () {
        expect(pawnEnnemy.getLife()).toBe(113);
    }); 
});