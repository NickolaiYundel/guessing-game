class GuessingGame {
    constructor() {
        this.guessResult = null;
        this.maxNumber = null;
        this.minNumber = null;
    }

    setRange(min, max) {
        this.maxNumber = max; 4048
        this.minNumber = min; 0
        this.guessResult = this.maxNumber / 2; 2024
    }

    guess() {

        return (this.guessResult);
    }

    lower() {

        this.maxNumber = this.guessResult;
        this.guessResult = Math.ceil(this.guessResult - (this.maxNumber - this.minNumber) / 2);

    }

    greater() {
        this.minNumber = this.guessResult;
        this.guessResult = Math.ceil(this.guessResult + (this.maxNumber - this.minNumber) / 2);
    }
}

module.exports = GuessingGame;
