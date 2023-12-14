// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.


// let url = "http://numbersapi.com/7";
// axios.get(url)
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch( err=> console.log("Something went wrong!"))



// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

// let url = "http://numbersapi.com/5..9";
// axios.get(url)
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch( err =>  console.log("Something went wrong!"))

// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

let url = "http://numbersapi.com/7"

let fourNumberFacts = []

for (let i = 1; i < 5; i++) {
    fourNumberFacts.push(
        axios.get('http://numbersapi.com/7')
    )
}

Promise.all(fourNumberFacts)
    .then(numberArr => {
        for (res of numberArr) {
            $("body").append(`<p>${res.data}</p>`)
        }
    })
    .catch( err =>  console.log("Something went wrong!"))

// (Note: You’ll need to make multiple requests for this.)