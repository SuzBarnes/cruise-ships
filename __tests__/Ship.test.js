/*globals describe it expect*/
const Ship = require('../src/Ship.js');

describe ('Ship', () => {
    describe ('ship with ports and an itinerary', () => {
        let dover;
        let calais;
        let itinerary;
        let ship;
        
beforeEach(() => {
dover = {
    name: 'Dover',
    ships: [],
    addShip: jest.fn(),
    removeShip: jest.fn()
}
calais = {
    name: 'Calais',
    ships: [],
    addShip: jest.fn(),
    removeShip: jest.fn()
};

itinerary = {
    ports: [dover, calais]
};

ship = new Ship(itinerary);
});
        
        it ('can be instantiated', () => {     
            expect(ship).toBeInstanceOf(Object);
        });
        
        it('has a starting port', () => {
        expect(ship.currentPort).toBe(dover);
        });
        
        it('gets added to port on instantiation', () => {
         expect (dover.addShip).toHaveBeenCalledWith(ship);
        });
        
        
        describe ('setSail', () => {
        it('can set sail', () => {
            ship.setSail();
        
        expect (ship.currentPort).toBeFalsy();
        expect (dover.removeShip).toHaveBeenCalledWith(ship);
        
        });
        
        it("can't sail further than its itinerary", () => {
         ship.setSail();
            ship.dock();
        
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
        
        describe ('dock', () => {
        it ('can dock at a different port', () => {
            ship.setSail();
            ship.dock();
        
            expect (ship.currentPort).toBe(calais);
            expect (calais.addShip).toHaveBeenCalledWith(ship);
        });
    });
});
    });
});
