document.querySelector('.chat-icon').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.chatbox').style.display = this.classList.contains('active') ? 'block' : 'none';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.chatbox').style.display = 'none';
    document.querySelector('.chat-icon').classList.remove('active');
});




document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const attachIcon = document.getElementById('attachIcon');
    const fileUpload = document.getElementById('fileUpload');
    const chatboxBody = document.getElementById('chatboxBody');
    
    // Show the send button when the user starts typing
    messageInput.addEventListener('input', function () {
        if (messageInput.value.trim() !== '') {
            attachIcon.style.display = 'none';
            sendMessageBtn.style.display = 'inline-block';
        } else {
            attachIcon.style.display = 'inline-block';
            sendMessageBtn.style.display = 'none';
        }
    });

    // Handle file upload
    fileUpload.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            // Display the uploaded file in the chat (you can style it as you wish)
            const fileMessage = document.createElement('p');
            fileMessage.textContent = `File uploaded: ${file.name}`;
            chatboxBody.appendChild(fileMessage);

            // Here you would send the file to the server
            // uploadFile(file);
        }
    });

    // Handle sending message
    sendMessageBtn.addEventListener('click', function () {
        const message = messageInput.value.trim();
        if (message !== '') {
            // Display the message in the chatbox
            const userMessage = document.createElement('p');
            userMessage.textContent = message;
            chatboxBody.appendChild(userMessage);

            // Send the message to the server or to the phone number
            sendMessageToServer(message);

            // Clear the input
            messageInput.value = '';
            attachIcon.style.display = 'inline-block';
            sendMessageBtn.style.display = 'none';
        }
    });
});

function sendMessageToServer(message) {
    // Implement the logic to send the message to the server
    // and forward it to the phone number +18452745402
    console.log("Sending message:", message);
    // Example:
    // fetch('/send-message', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ message: message, phone: '+18452745402' })
    // });
}


