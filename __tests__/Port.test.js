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
describe ('addShip', () =>{
it('adds the ship to the ports ships', () => {
        const port = new Port ('Dover');
        const ship ={};
        
        port.addShip(ship);
      expect(port.ships).toContain(ship);
});

});

describe ('removeShip', () => {
it ('removes the ship from the port ships', () => {
const port = new Port ('Dover');
const titanic = {};
const queenMary = {};

port.addShip(titanic);
port.addShip(queenMary);
port.removeShip(queenMary);

expect (port.ships).toEqual([titanic]);
});
});