console.log("test loaded");

const cardContainer = document.querySelector('.card-container');

fetch('http://localhost:3000/test')
    .then(data => data.json())
    .then(myJasonData => showTest(myJasonData));

function showTest(languages) {
    console.log(languages);

    let htmlCode = '';
    for (let i = 0; i < languages.length; i++) {
        const language = languages[i];
        htmlCode += createCard(language);
    }
    cardContainer.innerHTML = htmlCode;
}

function createCard(language) {
    const card = `
    <div class="card">
        <img src = "${language.image}" />
        <h2>${language.name}</h2>
        <p class = "price">${language.description}</p>
    </div>
    `;
    return card;
}