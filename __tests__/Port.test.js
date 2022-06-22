const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe ('Port', () => {
    it ('can be instantiated', () => {
      expect (new Port()).toBeInstanceOf(Object);
    });

});

 it('sets the name property', ()=> {
        const port = new Port ('Calais')
        
        expect (port.name).toEqual('Calais');
        

});
