const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');
const Itinerary = require ('../src/Itinerary.js')

describe ('Itinerary', () => {
    describe ('with ships and ports', () => {
let dover;
let calais;
let itinerary;

beforeEach(() => {
dover = new Port ('Dover');
calais = new Port ('Calais');
itinerary = new Itinerary([dover, calais]);
});
        it ('can be instantiated', () => {
    expect (new Itinerary()).toBeInstanceOf(Object);
        });
        it('has a ports property', () => {
    
    expect (itinerary.ports).toEqual([dover, calais]);
        });
    });
    });
