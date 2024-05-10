const cardArray = [
  {
    name: "fries",
    img: "./img/fries.jpg.jpg ",
  },
  {
    name: "burger",
    img: "./img/burger.jpg.jpg",
  },
  {
    name: "hotdog",
    img: "./img/hot-dog.jpg.jpg",
  },
  {
    name: "ice-cream",
    img: "./img/ice-cream.jpg.jpg",
  },
  {
    name: "milkshake",
    img: "./img/milkshake.jpg.jpg",
  },
  {
    name: "pizza",
    img: "./img/pizza.jpg.jpg",
  },
  {
    name: "fries",
    img: "./img/fries.jpg.jpg ",
  },
  {
    name: "burger",
    img: "./img/burger.jpg.jpg",
  },
  {
    name: "hotdog",
    img: "./img/hot-dog.jpg.jpg",
  },
  {
    name: "ice-cream",
    img: "./img/ice-cream.jpg.jpg",
  },
  {
    name: "milkshake",
    img: "./img/milkshake.jpg.jpg",
  },
  {
    name: "pizza",
    img: "./img/pizza.jpg.jpg",
  },
];
cardArray.sort(() => 0.5 - Math.random()); // to suffle the array

const gridDisplay = document.querySelector("#grid");
let cardsChosen = []; // in this array we will push the chosen cards
let cardsChosenIds = []; // we push here all id's;
let score = 0;
let result = document.getElementById('result')

function createBoard() {
  // create for each object one img
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img"); // create img element
    card.setAttribute("src", "./img/blank.jpg.jpg"); // add an img at the element
    card.setAttribute("data-id", i); // every card has an unic id
    card.setAttribute("width", 200); // set the width at the img
    card.setAttribute("height", 150);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}
createBoard();

function flipCard() {
  let cardId = this.getAttribute("data-id"); // 'this'keyword let us interact with the element we click and here we are getting his data-id
  cardsChosen.push(cardArray[cardId].name); // we go into the  cardArray and we pass through the cardID , we get the name and we push the clicked card in the cardsChosen array
  cardsChosenIds.push(cardId);
  // The 'this' keyword refers to the element that triggered the event,
  // which is the <img> element clicked. Storing it in 'clickedImage'
  // allows for easier manipulation of its properties.
  let clickedImage = this;
  clickedImage.setAttribute("src", cardArray[cardId].img); // we go into the cardArray we pass through the cardId and get that card's image
  clickedImage.style.width = "200px";
  clickedImage.style.height = "150px";
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("img");

  if (cardsChosen[0] === cardsChosen[1]) {
    alert("Yeah!");
    score++;
    result.innerText = score;
  } else {
    cards[cardsChosenIds[0]].setAttribute("src", "img/blank.jpg.jpg");
    cards[cardsChosenIds[1]].setAttribute("src", "img/blank.jpg.jpg");
  }
  cardsChosen = [];
  cardsChosenIds = [];
}
