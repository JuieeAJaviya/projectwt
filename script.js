document.getElementById('send-btn').addEventListener('click', function () {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        displayMessage(userInput, 'user-message');
        generateResponse(userInput);
        document.getElementById('user-input').value = '';
    }
});

function displayMessage(text, className) {
    let message = document.createElement('div');
    message.className = `message ${className}`;
    message.textContent = text;
    document.getElementById('chat-box').appendChild(message);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function generateResponse(userInput) {
    let botMessage = "Sorry, I'm a simple bot and can't provide real answers yet!";
    // Here you can implement logic to generate a response
    // For now, we'll just display a generic message
    displayMessage(botMessage, 'bot-message');
}
