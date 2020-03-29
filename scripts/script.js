let numberOfBulbs = 0;
let bulbs = [];
let sumOfAll = 0
const decimalValueOfAllOutput = document.querySelector('.decimal-value');
const binaryValueOfAllOutput = document.querySelector('.binary-value');

initializeBulbs(5);
addRecalculateClickListener();
this.refreshOutputs();

function initializeBulbs(number) {
    for (let power = 0; power < number; power++) {
        addBulb(power);
    }
}

function addRecalculateClickListener() {
    document.addEventListener('click', () => {
        recalculateSumOfAllBulbs();
        refreshOutputs();
    });
}

function recalculateSumOfAllBulbs() {
    let sum = 0;

    bulbs.forEach(bulb => {
        if (bulb.isTurnedOn) {
            sum += bulb.decimalValue;
            console.log(sum);
        }
    });

    sumOfAll = sum;
}

function refreshOutputs() {
    decimalValueOfAllOutput.value = sumOfAll;
    binaryValueOfAllOutput.value = getBinaryValueOfAll();
}

function getBinaryValueOfAll() {
    let binaryValue = '';

    bulbs.forEach(bulb => {
        const currentValue = bulb.isTurnedOn ? '1' : '0';
        binaryValue = currentValue + binaryValue;
    });

    return binaryValue;
}

function addBulb(power) {
    bulbs.push(new Bulb(power));
    numberOfBulbs++;
}

function removeBulb() {
    bulbs[numberOfBulbs - 1].beGone();
    bulbs.splice(numberOfBulbs - 1, 1);
    numberOfBulbs--;
}
