
// grab a reference for necessary HTML elements

// .quote-text

const quoteText = document.querySelector('.quote-text');
const newQuoteBtn = document.querySelector('.new-quote-btn');
// const tweetBtn = document.querySelector('.tweet-btn');

// add 'click' eventListener to .new-quote-btn
newQuoteBtn.addEventListener('click', getQuote);

// immediately call getQuote();
getQuote();

// getQuote() function definition
function getQuote() {
    // make an API request to https://icanhazdadjoke.com/
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response){
        // convert Stringified JSON response to Javascript Object
        return response.json()
    }).then(function(data){
        //replace innerText of .quote-text with data.joke
        // extract the joke text
        const quote = data.joke;

        // do the replacement
        quoteText.innerHTML = quote;

        // make the tweetBtn(.tweet-btn link) work by setting href

        // create tweet link with joke

        // const tweetLink = `https://twitter.com/share?text=${quote}`;

        // //  set the link
        // tweetBtn.setAttribute('href', tweetLink);
    }).catch(function(error){
        // if some error occured
        quoteText.innerHTML = 'Oops! Some error happened : (';

        // removes the old href from .tweet-btn if found any
        // tweetBtn.removeAttribute('href');
        // console.log the error
        console.log(error);
    });
}