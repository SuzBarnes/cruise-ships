const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe ('Port', () => {
  describe('with ships and an itinerary', () => {
    let calais;
    let dover;
    let ship;
    let titanic;
    let queenMary;

    beforeEach (() => {
      calais = new Port('Calais');
      dover = new Port ('Dover');
      ship = {}
      titanic = {};
      queenMary ={};
  });


    it ('can be instantiated', () => {
      expect (new Port()).toBeInstanceOf(Object);
    });

 it('sets the name property', ()=> {

        expect (calais.name).toEqual('Calais');
        
});
describe ('addShip', () =>{
it('adds the ship to the ports ships', () => {
      
        dover.addShip(ship);
      expect(dover.ships).toContain(ship);
});

describe ('removeShip', () => {
it ('removes the ship from the port ships', () => {
dover.addShip(titanic);
dover.addShip(queenMary);
dover.removeShip(queenMary);

expect (dover.ships).toEqual([titanic]);
});
});
});
});
  });