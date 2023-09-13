
/* Create array(deck) of objects(cards )*/
const deck = [
    {value: 2, img: "2C.png"},
    {value: 2, img: "2D.png"},
    {value: 2, img: "2H.png"},
    {value: 2, img: "2S.png"},
    //////////////////////////
    {value: 3, img: "3C.png"},
    {value: 3, img: "3D.png"},
    {value: 3, img: "3H.png"},
    {value: 3, img: "3S.png"},
    //////////////////////////
    {value: 4, img: "4C.png"},
    {value: 4, img: "4D.png"},
    {value: 4, img: "4H.png"},
    {value: 4, img: "4S.png"},
    //////////////////////////
    {value: 5, img: "5C.png"},
    {value: 5, img: "5D.png"},
    {value: 5, img: "5H.png"},
    {value: 5, img: "5S.png"},
    //////////////////////////
    {value: 6, img: "6C.png"},
    {value: 6, img: "6D.png"},
    {value: 6, img: "6H.png"},
    {value: 6, img: "6S.png"},
    //////////////////////////
    {value: 7, img: "7C.png"},
    {value: 7, img: "7D.png"},
    {value: 7, img: "7H.png"},
    {value: 7, img: "7S.png"},
    //////////////////////////
    {value: 8, img: "8C.png"},
    {value: 8, img: "8D.png"},
    {value: 8, img: "8H.png"},
    {value: 8, img: "8S.png"},
    //////////////////////////
    {value: 9, img: "9C.png"},
    {value: 9, img: "9D.png"},
    {value: 9, img: "9H.png"},
    {value: 9, img: "9S.png"},
    //////////////////////////
    {value: 10, img: "10C.png"},
    {value: 10, img: "10D.png"},
    {value: 10, img: "10H.png"},
    {value: 10, img: "10S.png"},
    //////////////////////////
    {value: 11, img: "JC.png"},
    {value: 11, img: "JD.png"},
    {value: 11, img: "JH.png"},
    {value: 11, img: "JS.png"},
    //////////////////////////
    {value: 12, img: "QC.png"},
    {value: 12, img: "QD.png"},
    {value: 12, img: "QH.png"},
    {value: 12, img: "QS.png"},
    //////////////////////////
    {value: 13, img: "KC.png"},
    {value: 13, img: "KD.png"},
    {value: 13, img: "KH.png"},
    {value: 13, img: "KS.png"},
    //////////////////////////
    {value: 14, img: "AC.png"},
    {value: 14, img: "AD.png"},
    {value: 14, img: "AH.png"},
    {value: 14, img: "AS.png"},
];

/* Function for animating the players' cards */
function animateCards(p1AnimatedCard, p2AnimatedCard, deck1Top=null, deck2Top=null) {
    p1AnimatedCard.classList.add("p1-card-animation");
    p2AnimatedCard.classList.add("p2-card-animation");

}

/* Implement Knuth Shuffle */
function shuffle(deck) {
    let currentIndex = deck.length;
    let randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
    }
    return deck;
}

/* Create War Game with shuffled array(deck) */
const shuffledDeck = shuffle(deck);
const war = new War(deck.slice(0,shuffledDeck.length/2), deck.slice(shuffledDeck.length/2));

/* Get the id of each players'card to animate */
let p1AnimatedCard = document.getElementById("p1-animation-card");
let p2AnimatedCard = document.getElementById("p2-animation-card");

/* Get the id of the html element that contains each players' card count */
let p1CardCount = document.getElementById("p1-card-count");
let p2CardCount = document.getElementById("p2-card-count");

/* Get the id of html element that contains each players war array */
let p1WarArray = document.getElementById("p1-war-array");
let p2WarArray = document.getElementById("p2-war-array");

/* Initialize each players players card count on window load */
window.addEventListener("load", () => {
    p1CardCount.innerHTML = war.deck1.length;
    p2CardCount.innerHTML = war.deck2.length;
})

let battleButton = document.getElementById("battle-btn");
battleButton.addEventListener("click", () => {
    animateCards(p1AnimatedCard, p2AnimatedCard)

    // document.querySelector("#p1-card").innerHTML = `<img class="card-img" src="./assets/images/${war.deck1[0].img}" alt="${war.deck1[0].img.slice(0,-4)}">`
    // document.querySelector("#p2-card").innerHTML = `<img class="card-img" src="./assets/images/${war.deck2[0].img}" alt="${war.deck2[0].img.slice(0,-4)}">`

    // switch (war.compareValues(war.deck1[0], war.deck2[0])) {
    //     case 1:
    //         war.deck1.push(war.deck1.splice(0,1)[0]);
    //         war.deck1.push(war.deck2.splice(0,1)[0]);
    //         if ( war.warArray1.length !== 0) {
    //             war.deck1.push(...war.warArray1)
    //             war.deck1.push(...war.warArray2)
    //             war.warArray1 = []
    //             war.warArray2 = []
    //         }
    //         p1CardCount.innerHTML = war.deck1.length;
    //         p2CardCount.innerHTML = war.deck2.length;
    //         break;
    //     case -1:
    //         war.deck2.push(war.deck1.splice(0,1)[0]);
    //         war.deck2.push(war.deck2.splice(0,1)[0]);
    //         if ( war.warArray2.length !== 0) {
    //             war.deck2.push(...war.warArray1)
    //             war.deck2.push(...war.warArray2)
    //             war.warArray1 = []
    //             war.warArray2 = []
    //         }
    //         p1CardCount.innerHTML = war.deck1.length;
    //         p2CardCount.innerHTML = war.deck2.length;
    //         break;
    //     case 0:
    //         for (let i = 0; i < 4; i++) {
    //             const node1 = document.createElement("img")
    //             node1.setAttribute("src", "./")
    //             p1WarArray.appendChild()
    //             p2WarArray.appendChild()
    //             war.warArray1.push(war.deck1.splice(0,1)[0])
    //             war.warArray2.push(war.deck2.splice(0,1)[0])
    //             p1CardCount.innerHTML = war.deck1.length;
    //             p2CardCount.innerHTML = war.deck2.length;
    //         }
    //         break;
    // }

    // if (war.checkForWinner()) {
    //     switch (war.checkForWinner()) {
    //         case 1:
    //             alert("Player 1 Wins!")
    //             break;
    //         case -1:
    //             alert("Player 2 Wins!")
    //             break;
    //         case 0:
    //             alert("It's a tie.")
    //             break;
    //     }
    // }
})

