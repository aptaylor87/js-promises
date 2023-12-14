// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).


// let baseURL = "https://deckofcardsapi.com/api/deck/"

// axios.get(`${baseURL}new/shuffle/?deck_count=1`)
//     .then(res => {
//         return axios.get(`${baseURL}${res.data["deck_id"]}/draw/?count=1`)
//     })
//     .then(res=> {
//         for (card of res.data.cards){
//             console.log(`${card.value} of ${card.suit}`)
//         }
//     })
//     .catch( err =>  console.log("Something went wrong!"))


// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.

// let baseURL = "https://deckofcardsapi.com/api/deck/"

// let cardsARR = []
// axios.get(`${baseURL}new/shuffle/?deck_count=1`)
//     .then(res => {
//         return axios.get(`${baseURL}${res.data["deck_id"]}/draw/?count=1`)
//     })
//     .then(res=> {
//         for (card of res.data.cards){
//             cardsARR.push(card)
//         }
//         return axios.get(`${baseURL}${res.data["deck_id"]}/draw/?count=1`)
//     })
//     .then(res => {
//         for (card of res.data.cards){
//             cardsARR.push(card)
//         }
//         return cardsARR
//     })
//     .then( cardsARR => {
//         for (card of cardsARR){
//             console.log(`${card.value} of ${card.suit}`)
//         }
//     }
//     )
//     .catch( err =>  console.log("Something went wrong!"))

// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.
let baseURL = 'https://deckofcardsapi.com/api/deck'
let deckId = null;
let $btn = $('button');
let $cardArea = $('#card-area')

$.getJSON(`${baseURL}/new/shuffle/`)
    .then(data => {
        deckId = data.deck_id;
        $btn.show();
    })

$btn.on('click', function() {
    $.getJSON(`${baseURL}/${deckId}/draw/`)
    .then(data => {
        let cardSrc = data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let RandomY = Math.random() * 40 - 20;
        $cardArea.append(
            $('<img>', {
                src: cardSrc,
                css: {
                    transform: `translate(${randomX}px, ${RandomY}px) rotate(${angle}deg)`
                }
            })
        );
        if (data.remaining === 0) $btn.remove();
    })
})