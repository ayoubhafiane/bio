// Button interaction logic
document.getElementById("yesButton").addEventListener("click", function () {
    showMessage("You chose Yes!", "#4caf50");
});

document.getElementById("noButton").addEventListener("click", function () {
    showMessage("You chose No!", "#e53935");
});

// Function to display the result message
function showMessage(message, color) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = message;
    resultElement.style.color = color;
    resultElement.classList.add("show");

    // Remove animation after a while
    setTimeout(() => {
        resultElement.classList.remove("show");
    }, 2000);
}