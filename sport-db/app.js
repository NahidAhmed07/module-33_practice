


document.getElementById('search-btn').addEventListener('click', () => {
    

    const inputField = document.getElementById('search-input');
    const searchText = inputField.value;
    loadData(searchText);


})

function loadData(playername) {
    
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${playername}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlayer(data.player))
}

function displayPlayer(players) {
    
    const parent = document.getElementById('player-parent');

    
    players.forEach(player => {
        console.log(player);
        const div = document.createElement('div');
        div.className = 'player';
        
        // div.classList.add('col', 'card')

        const img = document.createElement('img');
        img.className = 'img-fluid';
        img.style.maxHeight = '300px';
        
        if (player.strCutout == null) {
            img.src = "./img/img.jpg";
        } else {
            img.src = player.strCutout;
        }
            

        const h3 = document.createElement('h3');
        h3.innerText = player.strPlayer;
        h3.className = 'mt-3 mb-2';

        const p = document.createElement('p');
        p.innerText = player.strNationality;

        const btn = document.createElement('button');
        btn.innerText = 'see more...';
        btn.className = 'btn btn-outline-secondary';

        btn.setAttribute('data-bs-toggle', 'modal');
        btn.setAttribute('data-bs-target', '#modal');
        btn.setAttribute('type', 'button')

        const jsonData = JSON.stringify(player);

        btn.setAttribute('onclick', `showDetails(${jsonData})`)

        div.appendChild(img);
        div.appendChild(h3)
        div.appendChild(p)
        div.appendChild(btn)
        parent.appendChild(div);
    });
}

function showDetails(player) {

    document.querySelector('.modal-title').innerText = player.strPlayer;
    const modalImg = document.getElementById('modal-img');
    if (player.strCutout == null) {
            modalImg.src = "./img/img.jpg";
    } else {
            modalImg.src = player.strCutout;
    }

}


