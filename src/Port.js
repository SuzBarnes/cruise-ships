
class Port{
    constructor (name){
        this.name = name;
        this.ships = [];
};


addShip(ship){
    
    this.ships.push(ship);

};

removeShip(ship){
  
    const indexOfShipToRemove = this.ships.indexOf(ship);
        if (indexOfShipToRemove > -1){
            this.ships.splice(indexOfShipToRemove, 1);
        };
        return this.ships;

}
};
module.exports = (Port);