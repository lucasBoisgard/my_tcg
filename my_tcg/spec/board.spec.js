import Board from '../src/models/board';
import Hand from '../src/models/hand';


describe ( "Board.extends" ,  function ()  { 
    const board = new Board({cards:[2,3,4], limit: 4});

    it ("check si board a bien extends Hand", function () { 
        expect(board instanceof Hand).toBeTruthy();
    });

});