const mainDiv = document.querySelector("#mainDiv");
document.body.onload = () => createGrid(16);

function createGrid(num) {
    mainDiv.innerHtml = "";
    const gridwidth = (100/ num) + '%';
    let total = num * num;
    for (let i=1; i <= total; i++) {
        const newDiv = document.createElement("Div");
        mainDiv.appendChild(newDiv);
        newDiv.className = "whiteGrid";
        newDiv.style.flexBasis = gridwidth;
    }

    const gridItem = Array.from(document.getElementsByClassName("whiteGrid"));
    for (let i=0; i <gridItem.length; i++) {
        gridItem[i]
        .addEventListener('mouseover', () => {
            gridItem[i].style.background = "black";
        });
    }
}

 function clickedButton() {
    let userChoice = prompt("Pick a width max of 100");
    while (isNaN(userChoice) || userChoice <= 0 || userChoice > 100) {
        userChoice = prompt("Invalid input! Pick a width max of 100");
    }

    createGrid(userChoice);
 }