class War {
    constructor (deck1, deck2) {
        this.deck1 = deck1
        this.deck2 = deck2
        this.warArray1 = []
        this.warArray2 = []
    }

    checkForWinner () {
        if (this.deck1.length === 0 && this.deck2.length === 0) {
            return 0
        }
        else if (this.deck2.length === 0) {
            return 1
        }
        else if (this.deck1.length === 0) {
            return -1
        }
    }

    compareValues (card1, card2) {
        if (card1.value > card2.value) {
            return 1
        }
        else if (card1.value < card2.value) {
            return -1   
        }
        else {
            return 0
        }
    }
}