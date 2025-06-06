import { model } from "./mainModule.js";

const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

// Array to hold chat history
let chatHistory = [];

// Function to create and show the AI loading bubble
const addLoadingBubble = () => {
    const loadingBubble = document.createElement("div");
    loadingBubble.classList.add("chat-content", "ai", "ai-loading");
    loadingBubble.innerHTML = `
        <div class="ai-icon">
            <!-- AI icon here -->
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#prefix__paint0_radial_980_20147)"/>
                <defs>
                    <radialGradient id="prefix__paint0_radial_980_20147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)">
                        <stop offset=".067" stop-color="#9168C0"/>
                        <stop offset=".343" stop-color="#5684D1"/>
                        <stop offset=".672" stop-color="#1BA1E3"/>
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="chat-inner-body" style="align-self: flex-start;">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
    `;
    chatContainer.appendChild(loadingBubble);
    return loadingBubble;
};

// Function to copy text from the bubble

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        // alert("Text copied to clipboard!"); // Remove or comment out this line
    }).catch((err) => {
        console.error('Failed to copy: ', err);
    });
};


// Function to get AI response
const getChatResponse = async (userText) => {
    console.log("typed by user", userText);
    const loadingBubble = addLoadingBubble();

    // Include chat history in the request
    const fullChat = chatHistory.join('\n'); // Join chat history into a single string


    try {
        const result = await model.generateContent(userText);
        const response = await result.response.text();
        const formattedResponse = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Convert to bold
        const finalResponse = formattedResponse.replace(/\*/g, '• '); // Replace asterisks with bullet points

        // Remove loading bubble
        loadingBubble.remove();

        // Create AI chat bubble with actual response
        const aiBubble = document.createElement("div");
        aiBubble.classList.add("chat-content", "ai"); 
        aiBubble.innerHTML = `
            <div class="ai-icon">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#prefix__paint0_radial_980_20147)"/>
                    <defs>
                        <radialGradient id="prefix__paint0_radial_980_20147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)">
                            <stop offset=".067" stop-color="#9168C0"/>
                            <stop offset=".343" stop-color="#5684D1"/>
                            <stop offset=".672" stop-color="#1BA1E3"/>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div class="chat-inner-body" style="align-self: flex-start;">
                <div class="ai-text"><p>${formattedResponse.trim()}</p></div>
                <button class="copy">
                    <span data-text-end="Copied!" data-text-initial="Copy to clipboard" class="tooltip"></span>
                    <span>
                        <svg xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 6.35 6.35" height="20" width="20" class="clipboard">
                            <g>
                                <path fill="currentColor" d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"></path>
                            </g>
                        </svg>
                        <svg xml:space="preserve" viewBox="0 0 24 24" height="18" width="18" class="checkmark">
                            <g>
                                <path fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                            </g>
                        </svg>
                    </span>
                </button>
            </div>
        `;
        chatContainer.appendChild(aiBubble);

        // Add event listener to "Copy" button
        aiBubble.querySelector(".copy").addEventListener("click", () => {
            copyToClipboard(response.trim());
        });

        // Update chat history
        chatHistory.push(`User: ${userText}`);
        chatHistory.push(`AI: ${formattedResponse.trim()}`);

    } catch (error) {
        loadingBubble.remove();
        const errorBubble = document.createElement("div");
        errorBubble.classList.add("chat-content", "ai");
        errorBubble.innerHTML = `
            <div class="ai-icon">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#prefix__paint0_radial_980_20147)"/>
                    <defs>
                        <radialGradient id="prefix__paint0_radial_980_20147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)">
                            <stop offset=".067" stop-color="#9168C0"/>
                            <stop offset=".343" stop-color="#5684D1"/>
                            <stop offset=".672" stop-color="#1BA1E3"/>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div class="chat-inner-body" style="align-self: flex-end;">
                <div class="ai-text"><p>Can't connect</p></div>
                <button class="copy">
                    <span data-text-end="Copied!" data-text-initial="Copy to clipboard" class="tooltip"></span>
                    <span>
                        <svg xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 6.35 6.35" height="20" width="20" class="clipboard">
                            <g>
                                <path fill="currentColor" d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"></path>
                            </g>
                        </svg>
                        <svg xml:space="preserve" viewBox="0 0 24 24" height="18" width="18" class="checkmark">
                            <g>
                                <path fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                            </g>
                        </svg>
                    </span>
                </button>
            </div>
        `;
        chatContainer.appendChild(errorBubble);

        // Add event listener to "Copy" button in error case
        errorBubble.querySelector(".copy").addEventListener("click", () => {
            copyToClipboard("Can't connect");
        });
    }
};

// Function to handle user input and AI response
const APIHandler = () => {
    const userText = chatInput.value.trim();
    
    // Only proceed if the user has entered text
    if (!userText) return;

    // Hide hello-message
    const helloMessage = document.querySelector("#hello-message");
    if (helloMessage) {
        helloMessage.style.display = 'none';
    } else {
        console.warn("#hello-message element not found.");
    }

    // Hide message
    const message = document.querySelector("#message");
    if (message) {
        message.style.display = 'none';
    } else {
        console.warn("#message element not found.");
    }

    

    // User message bubble
    const chatBubble = document.createElement("div");
    chatBubble.classList.add("chat-content", "user");
    chatBubble.innerHTML = `
        <div class="chat-inner-body" style="align-self: flex-end;">
            <div class="user-text"><p>${userText}</p></div>
            <button class="copy">
                <span data-text-end="Copied!" data-text-initial="Copy to clipboard" class="tooltip"></span>
                <span>
                    <svg xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 6.35 6.35" height="20" width="20" class="clipboard">
                        <g>
                            <path fill="currentColor" d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"></path>
                        </g>
                    </svg>
                    <svg xml:space="preserve" viewBox="0 0 24 24" height="18" width="18" class="checkmark">
                        <g>
                            <path fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                        </g>
                    </svg>
                </span>
            </button>
        </div>
        <div class="user-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88a9.95 9.95 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20"/>
            </svg>
        </div>
    `;
    chatContainer.appendChild(chatBubble);

    // Add event listener to "Copy" button for user input
    chatBubble.querySelector(".copy").addEventListener("click", () => {
        copyToClipboard(userText);
    });

    chatInput.value = ""; // Clear input field
    getChatResponse(userText);
};


// Send message on button click
sendButton.addEventListener("click", APIHandler);

// Handle Enter key press for sending messages
chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        APIHandler();
    }
});

// Function to format the response for readability
const formatResponse = (response) => {
    // Format the response while preserving structure and adding line breaks
    const formattedResponse = response
        // Remove bold formatting (double asterisks)
        .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting

        // Replace asterisks with bullet points
        .replace(/\*/g, '• ') // Replace all asterisks with bullet points

        // Format numbered questions and answers (ensuring spacing)
        .replace(/(\d+)\.\s/g, '$1. ') // Ensure the number is followed by a space

        // Ensure there are no extra new lines
        .replace(/\n+/g, '\n') // Replace multiple new lines with a single one

        // Trim whitespace from the final response
        .trim();

    return formattedResponse;
};

console.log(chatContainer.innerHTML); // Log the contents of the chat container at key points



document.addEventListener("DOMContentLoaded", function () {
    // Generate 4 random recommendations using AI
    generateAIRecommendations();

    // Function to request AI to generate 4 random searches
    async function generateAIRecommendations() {
        try {
            // Replace with your AI model's method to generate suggestions
            const result = await model.generateContent(
                "Generate 4 random search recommendations for the user.",
                {
                    temperature: 0.7,
                    maxTokens: 50
                }
            );
            
            const aiResponse = await result.response.text();
            const recommendations = extractRecommendationsFromAIResponse(aiResponse);

            displayRecommendations(recommendations);

        } catch (error) {
            console.error("Error fetching AI recommendations:", error);
        }
    }

    function extractRecommendationsFromAIResponse(responseText) {
        // Split the response into lines
        const recommendations = responseText.split("\n").slice(0, 4); // Extract first 4 lines (or adjust as needed)
        return recommendations
            .map(rec => rec.replace(/^\d+\.\s*/, '') // Remove numbering format (e.g., "1. ", "2. ")
                            .replace(/\*/g, '') // Remove asterisks for bold formatting
                            .trim()) // Trim whitespace
            .filter(rec => rec.length > 0); // Clean up empty lines
    }
    
    

    // Function to display 4 random AI-generated recommendations as cards
    function displayRecommendations(recommendations) {
        const recommendationContainer = document.getElementById('recommendation-cards');
        recommendationContainer.innerHTML = ''; // Clear existing cards

        // Create cards for the recommendations
        recommendations.forEach(rec => {
            const card = document.createElement('div');
            card.className = 'col-3';
            card.innerHTML = `
                <div class="card recommendation-card">
                    <div class="card-body">
                        <p class="card-text">${rec}</p>
                    </div>
                </div>
            `;
            recommendationContainer.appendChild(card);

            // Add click event to send recommendation to the chat
            card.addEventListener('click', function () {
                sendToChat(rec);
            });
        });
    }

    function sendToChat(message) {
        const chatInput = document.getElementById('chat-input');
        chatInput.value = message; // Set the input value

        // Trigger an input event to simulate user typing (optional)
        chatInput.dispatchEvent(new Event('input'));

        // Simulate clicking the send button to send the message
        setTimeout(() => {
            document.getElementById('send-btn').click();
            hideRecommendationCards(); // Hide the cards after sending the message
        }, 100); // Small delay to ensure the input field is updated
    }

    // Function to hide the recommendation cards
    function hideRecommendationCards() {
        const recommendationContainer = document.querySelector('.recommendation-container');
        if (recommendationContainer) {
            recommendationContainer.classList.add('hidden'); // Hide the container
        }
    }

    // Event listener for the send button (when clicked)
    const sendButton = document.getElementById('send-btn');
    sendButton.addEventListener('click', () => {
        const chatInputValue = document.getElementById('chat-input').value;
        hideRecommendationCards(); // Hide cards when the send button is clicked
    });

    // Event listener for typing in the chat input (to hide cards automatically when typing starts)
    const chatInput = document.getElementById('chat-input');
    chatInput.addEventListener('input', () => {
        const chatInputValue = chatInput.value.trim(); // Get trimmed input value
        if (chatInputValue.length > 0) {
            hideRecommendationCards(); // Hide cards as soon as user types something
        }
    });

    // Event listener for form submission (handles both button click and enter key)
    const chatForm = document.getElementById('chat-form');
    chatForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting (optional, if using async)
        document.getElementById('send-btn').click(); // Trigger the send action
        hideRecommendationCards(); // Hide the cards after sending
    });
});
console.log(recommendations); // Check AI response

