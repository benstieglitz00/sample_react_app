function displayMessage() {
    const textBox = document.getElementById('messageBox');
    textBox.value = 'Hello, this is your message!';
}

document.getElementById('displayButton').addEventListener('click', displayMessage);