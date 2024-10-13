// Juhuslik number vahemikus 1 kuni 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    // Võta kasutaja sisend
    let userGuess = parseInt(document.getElementById("guess").value);
    let result = document.getElementById("result");

    // Kontrolli, kas sisend on sobiv number
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        result.textContent = "Palun sisesta number vahemikus 1-10.";
        return;
    }

    // Kontrolli kasutaja pakkumist
    if (userGuess < randomNumber) {
        result.textContent = "Suurem!";
    } else if (userGuess > randomNumber) {
        result.textContent = "Väiksem!";
    } else {
        result.textContent = "Õige! Arvuti number oli " + randomNumber + ".";
    }
}
