

// api key 66f07e3588c7757a54dac9d3bc138777

document.getElementById('search-btn').addEventListener('click', () => {
    const inputField = document.getElementById('search-input');
    const searchText = inputField.value;
    loadData(searchText);
})


function loadData(city) {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15fb6c2a2e7c970aaca394ca01c619b1`
    fetch(url)
        .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(data) {
    
    const h3 = document.getElementById('h3');
    
}