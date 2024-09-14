const gridItems = document.querySelectorAll(".grid-item")
let secondCardValue = null; 

let firstCardValue = null;
let firstCardClicked = false;
let firstCardElement = null; 

let matchesLeft = gridItems.length / 2; 
const matchesLeftElement = document.getElementById("matchesLeft"); 

gridItems.forEach(gridItem => {
  gridItem.addEventListener("click", (event) => {
    let value;
    value = gridItem.getAttribute("data-value");
    gridItem.innerHTML += `<p>Value: ${value}</p>`;

    if (!firstCardClicked) {
      firstCardValue = value;
      firstCardClicked = true;
      firstCardElement = gridItem;

    } else {
      secondCardValue = gridItem.getAttribute("data-value"); 

      if (secondCardValue === firstCardValue) {
        console.log("Match");
        setTimeout(() => {
          firstCardElement.remove();
          gridItem.remove();
          firstCardElement = null; 

          matchesLeft--; 
          matchesLeftElement.textContent = `Matches left: ${matchesLeft}`; 
        }, 500);
      } else {
        console.log("No match!");
        setTimeout(() => {
          firstCardElement.innerHTML = "";
          gridItem.innerHTML = "";
        }, 500);
      }
      firstCardValue = null;
      firstCardClicked = false;
    }

  });
});