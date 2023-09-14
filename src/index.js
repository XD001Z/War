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
function animateCards(p1AnimatedCard, p2AnimatedCard, p1Deck, p2Deck, card1, card2) {
    let p1FrontCard = document.createElement("img");
    let p2FrontCard = document.createElement("img");

    p1FrontCard.src = `./assets/images/${card1.img}`;
    p2FrontCard.src = `./assets/images/${card2.img}`;

    p1Deck.appendChild(p1FrontCard);
    p2Deck.appendChild(p2FrontCard);

    p1AnimatedCard.classList.toggle("p1-card-animation");
    p1FrontCard.classList.toggle("p1-front-card-animation");

    p2AnimatedCard.classList.toggle("p2-card-animation");
    p2FrontCard.classList.toggle("p2-front-card-animation");

    setTimeout(() => {
        p1AnimatedCard.classList.toggle("p1-card-animation");
        p2AnimatedCard.classList.toggle("p2-card-animation");
        p1Deck.removeChild(p1FrontCard);
        p2Deck.removeChild(p2FrontCard);
    }, 1500);
};

/* Function for animating each players' cards in the occurence of a tie(war) */
function animateWar(flag, p1WarArray, p2WarArray, card1=undefined, card2=undefined) {
    if (flag) {
        if (card1 !== undefined && card2 !== undefined) {
            let warCard1 = document.createElement("img"); 
            let warCard2 = document.createElement("img"); 

            warCard1.src = `./assets/images/${card1.img}`;
            warCard2.src = `./assets/images/${card2.img}`;

            p1WarArray.appendChild(warCard1);
            p2WarArray.appendChild(warCard2);

            warCard1.classList.toggle("war-card-animation");
            warCard2.classList.toggle("war-card-animation");
        };
    }
    else {
        p1WarArray.childNodes.forEach((element) => {
            element.classList.toggle("war-card-animation-reverse");
        });
        p2WarArray.childNodes.forEach((element) => {
            element.classList.toggle("war-card-animation-reverse");
        });

        setTimeout(() => {
            p1WarArray.innerHTML = "";
            p2WarArray.innerHTML = "";
        }, 600);
    };
};

/* Function for displaying the final screen when the end of the game is determined */
function gameOverScreen(resultMessage, screen) {
    let transitionScreen = document.createElement("div");

    let message = document.createElement("h1");
    message.innerHTML = resultMessage;

    let replayButton = document.createElement("button");
    replayButton.innerHTML = "Play Again";
    replayButton.addEventListener('click', () => {
        window.location.reload(true);
    });

    screen.innerHTML = "";
    screen.classList.toggle("game-over-screen");

    screen.appendChild(message);
    screen.appendChild(replayButton);
    screen.appendChild(transitionScreen);

    transitionScreen.classList.toggle("game-over-transition-animation");
};

/* Function for processing the result of a turn(battle) */
function processTurn(war, p1CardCount, p2CardCount, p1WarArray, p2WarArray) {
    switch (war.compareValues(war.deck1[0], war.deck2[0])) {
        case 1:
            war.deck1.push(war.deck1.splice(0,1)[0]);
            war.deck1.push(war.deck2.splice(0,1)[0]);
            if (war.deck1.length !== 0 || war.deck2.length !== 0) {
                animateWar(false, p1WarArray, p2WarArray);
                war.deck1.push(...war.warArray1);
                war.deck1.push(...war.warArray2);
                war.warArray1 = [];
                war.warArray2 = [];
            };
            setTimeout(() => {
                p1CardCount.innerHTML = war.deck1.length;
                p2CardCount.innerHTML = war.deck2.length;
            }, 700);
            break;
        case -1:
            war.deck2.push(war.deck1.splice(0,1)[0]);
            war.deck2.push(war.deck2.splice(0,1)[0]);
            if (war.deck1.length !== 0 || war.deck2.length !== 0) {
                animateWar(false, p1WarArray, p2WarArray);
                war.deck2.push(...war.warArray1);
                war.deck2.push(...war.warArray2);
                war.warArray1 = [];
                war.warArray2 = [];
            };
            setTimeout(() => {
                p1CardCount.innerHTML = war.deck1.length;
                p2CardCount.innerHTML = war.deck2.length;
            }, 700);
            break;
        case 0:
            for (let i = 0; i < 4; i++) {
                animateWar(true, p1WarArray, p2WarArray, war.deck1[0], war.deck2[0]);
                war.warArray1.push(war.deck1.splice(0,1)[0]);
                war.warArray2.push(war.deck2.splice(0,1)[0]);
            };
            setTimeout(() => {
                p1CardCount.innerHTML = war.deck1.length;
                p2CardCount.innerHTML = war.deck2.length;
            }, 700);   
            break;
    };
};

/* Implement Knuth Shuffle */
function shuffle(deck) {
    let currentIndex = deck.length;
    let randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
    };
    return deck;
};

/* Create War Game with shuffled array(deck) */
shuffle(deck);
const war = new War(deck.slice(0,deck.length/2), deck.slice(deck.length/2));

/* Get the id of each players'card to animate */
let p1AnimatedCard = document.getElementById("p1-animation-card");
let p2AnimatedCard = document.getElementById("p2-animation-card");

/* Get the id of each players' deck */
let p1Deck = document.getElementById("p1-deck");
let p2Deck = document.getElementById("p2-deck");

/* Get the id of the html element that contains each players' card count */
let p1CardCount = document.getElementById("p1-card-count");
let p2CardCount = document.getElementById("p2-card-count");

/* Get the id of html element that contains each players war array */
let p1WarArray = document.getElementById("p1-war-array");
let p2WarArray = document.getElementById("p2-war-array");

/* Get the id of the body which will be our entire playing screen */
let screen = document.getElementById("screen");

/* Get the id of the button that progresses the game */
let battleButton = document.getElementById("battle-btn");

/* Initialize each players players card count on window load */
window.addEventListener("load", () => {
    p1CardCount.innerHTML = war.deck1.length;
    p2CardCount.innerHTML = war.deck2.length;
});

/* Bind the button to a function that carries out the game's logic on click */
battleButton.addEventListener("click", () => {
    battleButton.disabled = true;
    animateCards(p1AnimatedCard, p2AnimatedCard, p1Deck, p2Deck, war.deck1[0], war.deck2[0]);
    processTurn(war, p1CardCount, p2CardCount, p1WarArray, p2WarArray);
    switch (war.checkForWinner()) {
        case 1:
            setTimeout(() => {
                gameOverScreen("Player 1 Wins!", screen);
            }, 1500);
            break;
        case -1:
            setTimeout(() => {
                gameOverScreen("Player 2 Wins!", screen);
            }, 1500);
            break;
        case 0:
            setTimeout(() => {
                gameOverScreen("It's a tie...", screen);
            }, 1500);
            break;
    };
    setTimeout(() => {
        battleButton.disabled = false;
    }, 1500);
});
