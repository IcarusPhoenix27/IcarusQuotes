const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('lds-facebook');


function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function newQuote() {
    //Pick a random quote from api quotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
    if(quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
}
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);







newQuote();




















// Get Quotes From API
/*async function getQuotes() {
    const apiUrl = './quotes.js';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
       newQuote();

    } catch (error) {
        //Catch Error Here
    }
}

//On Load
getQuotes();*/