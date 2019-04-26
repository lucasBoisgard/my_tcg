import Deck from '../eventManager';

export default class Pawn {
    constructor(life, strength, def) {
        this.stats = {
            hp: life,
            str: strength,
            def: def
        }
    }
    getLife() {
        return this.stats.hp;
    }

    getStrength () {
        return this.stats.str;
    }

    getDef () {
        return this.stats.def;
    }

    attack (target) {
        target.recieveAttack(this);        
    }

    recieveAttack (opponent, strikeBack = false) {
        if (strikeBack) {
            this.stats.hp = this.stats.hp - opponent.stats.def;
        }
        else {
            this.stats.hp = this.stats.hp - opponent.stats.str;
            opponent.recieveAttack(this,true);
        }
    }
}