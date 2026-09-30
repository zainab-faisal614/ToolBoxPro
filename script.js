const searchInput = document.getElementById("toolSearch");
const toolCards = document.querySelectorAll(".tool-card");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    toolCards.forEach(function (card) {

        const toolName = card.innerText.toLowerCase();

        if (toolName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});