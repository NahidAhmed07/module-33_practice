

function loadQuote() {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => {
        const p = document.getElementById('quote');
        p.innerText = data.quote;
    })
}

loadQuote()

