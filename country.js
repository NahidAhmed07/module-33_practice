

function loadData() {
    fetch('https://restcountries.eu/rest/v2/all')
        
        .then(res => res.json())

    .then(data => displayCountry(data))
}

loadData()


function displayCountry(countrys) {

    for (const country of countrys) {
        // console.log(country);

        const div = document.createElement('div');
        div.className = 'country';
        

        const h5 = document.createElement('h5');
        h5.innerText = `Name : ${country.name} 
          Capital : ${country.capital}`;
        const img = document.createElement('img');

        img.src = country.flag;
        img.style.width = '100%';

        const btn = document.createElement('button');
        btn.innerText = 'see more Details';
        btn.setAttribute('onclick', `showDetails("${country.alpha3Code}")`)


        div.appendChild(img);
        div.appendChild(h5);
        div.appendChild(btn)

        const parent = document.getElementById('parent');
        parent.appendChild(div);
        
    }
}

function showDetails(code) {
    fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
        .then(res => res.json())
        .then(data => showModal(data))
}

function showModal(data) {
    
}