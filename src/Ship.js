
function Ship(name) {
    this.name = name,
    this.currentPort = name,
    this.setSail = function () {
        if (this.setSail) {
            this.currentPort = false;
        }
    },

    this.dock = function(port) {
        this.currentPort = port;
    }
};



module.exports = (Ship)