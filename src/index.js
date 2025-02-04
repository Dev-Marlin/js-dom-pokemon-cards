
//console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const container = document.querySelector(".cards");


for (let x = 0; x < data.length; x++)
{
    const card = document.createElement("li");
    card.classList.add("card");

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card--title");
    cardTitle.innerText = data[x].name; 
    card.append(cardTitle);

    const cardImage = document.createElement("img");
    cardImage.classList.add("card--img");
    cardImage.width="256";
    cardImage.src = data[x].sprites.other["official-artwork"].front_default;//data[x].sprites.front_default;
    card.append(cardImage);

    const cardText = document.createElement("ul");
    cardText.classList.add("card--text");

    for(let i = 0; i < 6; i++)
    {
        const cardTextPart = document.createElement("li");
        let s = data[x].stats[i];
        cardTextPart.innerHTML = s.stat.name +": "+s.base_stat;
        cardText.append(cardTextPart);
    }
    card.append(cardText);

    container.append(card);
}