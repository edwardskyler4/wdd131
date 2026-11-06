const enemyCard = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    imageSrc: 'images/snortleblat.webp',
    imageAlt: 'A homely crocodile-man hybrid standing in a swamp.',

    attacked: function() {
        this.health -= 20;
    },
    levelUp: function() {
        this.level++;
    }
}
const cardList = [enemyCard];

function cardTemplate(card) {
    return `<img class="image" src=${card.imageSrc} alt=${card.imageAlt}>
    <h1 class="name">${card.name}</h1>
    <div class="stats">
        <p>Class: ${card.class}</p>
        <p>Level: ${card.level}</p>
        <p>Health: ${card.health}</p>
    </div>`
}

function renderCards(cards) {
    const html = cards.map(cardTemplate);
    document.querySelector(".cardInfo").innerHTML = html.join("");
}

renderCards(cardList);

// Attacked btn
document.querySelector("#atkBtn").addEventListener("click", () => {
    if (enemyCard.health === 0) {
        alert("The creature has been defeated!")
    }
    else {
        enemyCard.attacked();
        renderCards(cardList);
    }
});

// Level up btn
document.querySelector("#lvlUpBtn").addEventListener("click", () => {
    enemyCard.levelUp();
    renderCards(cardList);
});