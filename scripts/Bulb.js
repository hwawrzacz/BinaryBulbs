class Bulb {
    constructor(representedPower) {
        this.representedPower = representedPower;
        this.decimalValue = Math.pow(2, this.representedPower);
        this.isTurnedOn = false;

        this.element = this.parseTemplateToDomObj();
        this.bulbImage = this.element.querySelector('.bulb-image');
        this.toggleButton = this.element.querySelector('.bulb-toggle-button')

        this.initializeRepresentedBits();
        this.addClickListener();
        this.appendItselfToDOM();
    }

    parseTemplateToDomObj() {
        const parser = new DOMParser();
        const elementDocument = parser.parseFromString(this.htmlTemplate, 'text/html');
        const element = elementDocument.querySelector('.bulb-container');
        console.log(element);
        return element
    }

    initializeRepresentedBits() {
        const bitsInsideContainer = this.element.querySelector('.binary-repr-list');

        const power = Math.pow(2, this.representedPower);

        for (let i = 0; i < power; i++) {
            const listElement = this.createRepresentedBit();
            bitsInsideContainer.appendChild(listElement);
        }
    }

    createRepresentedBit() {
        const listElement = document.createElement('li');
        listElement.classList.add('binary-repr-element');
        return listElement;
    }

    addClickListener() {
        this.element.addEventListener('click', (event) => {
            this.toggleBulb();
            this.toggleButtonValue();
        });
    }

    removeClickListener() {
        this.toggleButton.removeEventListener('click');
    }

    toggleBulb() {
        if (this.isTurnedOn) {
            this.turnTheBulbOff();
        } else this.turnTheBulbOn();
    }

    toggleButtonValue() {
        this.toggleButton.innerHTML = this.isTurnedOn ? '1' : '0';
    }

    turnTheBulbOn() {
        this.isTurnedOn = true;
        const currSrc = this.bulbImage.getAttribute('src');
        const newSrc = currSrc.replace('off', 'on');
        this.bulbImage.setAttribute('src', newSrc);
    }

    turnTheBulbOff() {
        this.isTurnedOn = false;
        const currSrc = this.bulbImage.getAttribute('src');
        const newSrc = currSrc.replace('on', 'off');
        this.bulbImage.setAttribute('src', newSrc);
    }

    appendItselfToDOM() {
        const container = document.querySelector('.container');
        container.appendChild(this.element);
    }

    beGone() {
        this.removeClickListener();
        this.element.remove();
    }


    htmlTemplate = `
    <div class="bulb-container">
        <div class="image-wrapper">
            <img class="bulb-image" src="./images/bulb_off.png" alt="Image of bulb" />
            <div class="dots-wrapper">
                <ul class="binary-repr-list"></ul>
            </div>
        </div>
        <div class="button-container">
            <button class="nmrph-button nmrph-button--convex-concave 
                    bulb-toggle-button">0</button>
        </div>
    </div>`;
}