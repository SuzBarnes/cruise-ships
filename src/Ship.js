function Ship(name) {
    this.name = name;
    this.startingPort = name;
};

Ship.prototype.setSail = function () {
if (this.setSail) {
    this.startingPort = false;
}
};

module.exports = Ship;