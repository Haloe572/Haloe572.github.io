function showMessage(response) {
    let message = '';
    let responseDiv = document.getElementById("response");

    if (response === true) {
        message = "Yay! I'm so happy! 💖";
        responseDiv.style.color = "#4CAF50"; // Green for Yes
    } else {
        message = "That's not an option! 😞";
        responseDiv.style.color = "#FF4C4C"; // Red for No
    }

    responseDiv.innerText = message;
    responseDiv.classList.add("show");
}

function moveButton() {
    let noButton = document.querySelector('.no');
    // Randomize position
    let randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    let randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    
    // Show the "That's not an option" message
    showMessage(false);
}

function closeMessage() {
    let responseDiv = document.getElementById("response");
    responseDiv.innerText = '';
    responseDiv.classList.remove("show");
}
