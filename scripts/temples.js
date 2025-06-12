const temples = [
  {
    name: "Johannesburg South Africa Temple",
    image: "images/johannesburg-south-africa.jpg"
  },
  {
    name: "England Temple",
    image: "images/england-temple.jpg"
  },
  {
    name: "Harare Zimbabwe Temple",
    image: "images/harare-zimbabwe-temple.jpg"
  },
  {
    name: "USA Temple",
    image: "images/usa-temple.jpg"
  },
  {
    name: "Vancouver British Columbia Canada Temple",
    image: "images/vancouver-canada-temple.jpg"
  }
];

const templeGrid = document.getElementById("templeGrid");

temples.forEach(temple => {
  const card = document.createElement("div");
  card.className = "temple-card";

  const img = document.createElement("img");
  img.src = temple.image;
  img.alt = temple.name;

  const caption = document.createElement("p");
  caption.textContent = temple.name;

  card.appendChild(img);
  card.appendChild(caption);
  templeGrid.appendChild(card);
});




