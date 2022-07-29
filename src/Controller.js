class Controller {
    constructor (ship){
       this.initialiseSea();

       this.ship = ship;

       document.querySelector('#sailbutton').addEventListener('click', () => {
        this.setSail();
       });

    };

    renderPorts(ports) {

        const portsElement = document.querySelector ('#ports');
        portsElement.style.width = '0px';
        ports.forEach((port, index) => {
            const newPortElement = document.createElement('div');
            newPortElement.className = 'port';

            newPortElement.dataset.portName = port.name;
            newPortElement.dataset.portIndex = index;

            const portsElementWidth = parseInt(portsElement.style.width, 10);
            portsElement.style.width = `${portsElementWidth + 256}px`;

            portsElement.appendChild(newPortElement);

        });
    };
    renderShip(){
        const ship = this.ship;
        const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);

        const shipElement = document.querySelector('#ship');
        shipElement.style.top = `${portElement.offsetTop + 32}px`;
        shipElement.style.left = `${portElement.offsetLeft - 32}px`;


    };
    initialiseSea(){
        const backgrounds = [
            './images/water0.png',
            './images/water1.png',
        ];

        let backgroundIndex = 0;
        window.setInterval(() => {
            document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds [backgroundIndex % backgrounds.length]}')`;
            backgroundIndex += 1;
        }, 1000);
    };

    setSail() {
        const ship = this.ship;

        const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const nextPortIndex = currentPortIndex + 1;
        const nextPortElement = document.querySelector(`[data-port-index = '${nextPortIndex}']`);

        const shipElement = document.querySelector('#ship');

        const sailInterval = setInterval (() => {
            const shipLeft = parseInt(shipElement.style.left, 10);
            if (shipLeft === (nextPortElement.offsetLeft - 32)){
                ship.setSail();
                ship.dock();
                clearInterval(sailInterval);
            };
            shipElement.style.left = `${shipLeft + 1 }px`;
        }, 20);

        if(!nextPortElement) {
            this.renderMessage(`You are at your final destination. We hope you had a pleasant trip.`);
        } 
        else {
            this.renderMessage(`Now departing ${ship.currentPort.name}!`) 
    } 

    if (ship.dock()){`Welcome to ${ship.currentPort.name}!`};
};


    renderMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.id = 'message';
        messageElement.innerHTML = message;

        const viewport = document.querySelector('#viewport');
        viewport.appendChild(messageElement);

        setTimeout(() => {
            viewport.removeChild(messageElement);
        }, 3000)
}

    displayPorts(){
        this.ship = ship;
        this.headsUpDisplay(`Current Port: ${ship.currentPort.name} /n Next Port: ${ship.nextPort.name}`);
    }

    headsUpDisplay(portMessage) {
        const portMessageElement = document.createElement ('div');
        portMessageElement.id = 'portMessage';
        portMessageElement.innerHTML = portMessage;

        const viewport = document.querySelectory('#viewport');
        viewport.appendChild(portMessageElement);
    }

};
    if(typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };