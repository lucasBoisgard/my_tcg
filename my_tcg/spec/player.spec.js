import Player from '../src/models/player';
import Deck from "../src/models/deck";

const player = new Player({deck : new Deck({cards:[2,3,4]})});


describe ( "Player.shuffle" ,  function ()  { 
    it ("check si le deck est bien mélangé", function () { 
        player.shuffle("deck")
        for (let i = 0; i < player.deck.cards.length; i++) {
            expect(player.deck.cards[i]).not.toBe([2,3,4][i]);
        }
    });
});

