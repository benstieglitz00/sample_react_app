document.getElementById('showMessageButton').addEventListener('click', function () {
    const message = document.getElementById('messageInput').value;
    const displayMessage = document.getElementById('displayMessage');
    displayMessage.textContent = message || 'Please enter a message!';
  });