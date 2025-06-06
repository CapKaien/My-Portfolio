document.addEventListener("DOMContentLoaded", function() {
    const chatContainer = document.querySelector('.chat-container');
    const sendButton = document.getElementById('send-btn');
    const inputField = document.getElementById('chat-input');

    // Function to add loading bubble
    function addLoadingBubble() {
        const loadingBubble = document.createElement('div');
        loadingBubble.classList.add('ai-loading');
        loadingBubble.innerHTML = `
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        chatContainer.appendChild(loadingBubble);
    }

    // Function to remove loading bubble and show response
    function showAIResponse(responseText) {
        const loadingBubble = document.querySelector('.ai-loading');
        if (loadingBubble) {
            loadingBubble.remove();
        }

        // Add actual response bubble
        const aiResponse = document.createElement('div');
        aiResponse.classList.add('ai-loading'); // Style it similarly
        aiResponse.textContent = responseText;
        chatContainer.appendChild(aiResponse);
    }

    // Event listener for sending the message
    sendButton.addEventListener('click', function() {
        const userInput = inputField.value;
        if (userInput.trim()) {
            inputField.value = ''; // Clear the input field

            // Add the user's message to the chat
            const userBubble = document.createElement('div');
            userBubble.classList.add('ai-loading'); // You can style this bubble for user messages
            userBubble.textContent = userInput;
            chatContainer.appendChild(userBubble);

            // Add the loading bubble for AI's response
            addLoadingBubble();

            // Simulate an AI response after some delay (replace this with your actual API call)
            setTimeout(() => {
                const aiResponseText = "This is the AI's response."; // Replace with actual response
                showAIResponse(aiResponseText);
            }, 3000); // Simulate 3 seconds delay
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const helloMessage = document.getElementById("hello-message");
    const messageText = "Hello Hooman";  // Text for the hello-message
    let index = 0;

    // Function to show the typewriting effect
    function typeWriter() {
        if (index < messageText.length) {
            helloMessage.innerHTML += messageText.charAt(index);
            index++;
            setTimeout(typeWriter, 150); // Adjust the typing speed (in milliseconds)
        } else {
            setInterval(toggleGradient, 5000); // Start gradient toggling after typewriter finishes
        }
    }

    // Function to toggle gradients
    function toggleGradient() {
        helloMessage.classList.toggle("linear-gradient");
        helloMessage.classList.toggle("radial-gradient");
    }

    // Initially set the radial gradient class
    helloMessage.classList.add("radial-gradient");

    // Start the typewriter effect after page load
    typeWriter();
});

