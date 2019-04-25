import Cemetary from '../src/models/cemetary';
import Deck from '../src/models/deck';


describe ( "Cemetary.extends" ,  function ()  { 
    const cemetary = new Cemetary({cards:[1, 2, 3, 3]})    

    it ("check si Cemetary a bien extends Deck", function () { 
        expect(cemetary instanceof Deck).toBeTruthy();
    });
    
});