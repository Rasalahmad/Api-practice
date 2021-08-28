document.getElementById('kanye-btn').addEventListener('click', function() {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuotes(data));
});

const displayQuotes = (quote) => {
    const display = document.getElementById('quote');
    display.innerText = quote.quote;
}