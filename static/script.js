// --- MODEL & API SETUP ---
// NOTE: You must replace this with your own API key.
const API_KEY = ""; // please set your Google Gemini API key here 
const MODEL_NAME = "gemini-2.5-flash";

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

// --- DOM ELEMENT REFERENCES ---
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const chatForm = document.getElementById("chat-form");
const loadingIndicator = document.getElementById("loading-indicator");

// --- CORE FUNCTIONS ---

/**
 * Appends a message to the chat box.
 * @param {string} message - The message content.
 * @param {string} sender - 'user' or 'bot'.
 */
const addMessage = (message, sender) => {
    const messageElement = document.createElement("div");
    // Added 'message' class for common styling and sender-specific class
    messageElement.classList.add("message", sender === "user" ? "user-message" : "bot-message");

    // Use marked.js to parse Markdown from bot responses
    const formattedMessage = sender === 'bot' ? marked.parse(message) : message;
    messageElement.innerHTML = formattedMessage; // Use innerHTML to render formatted text
    
    chatBox.appendChild(messageElement);
    // Auto-scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
};

/**
 * Shows or hides the loading indicator.
 * @param {boolean} isLoading - True to show, false to hide.
 */
const toggleLoading = (isLoading) => {
    loadingIndicator.style.display = isLoading ? "block" : "none";
};

/**
 * Sends a message to the Gemini API and gets the response.
 * @param {string} message - The user's message.
 */
const getGeminiResponse = async (message) => {
    toggleLoading(true); // Show loader before API call
    try {
        const requestBody = {
            contents: [{ parts: [{ text: message }] }],
        };

        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        // Handle cases where the response might not have the expected structure
        const botMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get a response. Please try again.";
        addMessage(botMessage, "bot");

    } catch (error) {
        console.error("Error fetching from Gemini API:", error);
        addMessage("Oops! Something went wrong. Please check the console for details.", "bot");
    } finally {
        toggleLoading(false); // Hide loader after API call completes
    }
};

// --- EVENT LISTENERS ---

/**
 * Handles the form submission event.
 */
chatForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents the default form submission (page reload)
    
    const userMessage = userInput.value.trim();
    if (!userMessage) return; // Don't send empty messages

    addMessage(userMessage, "user");
    userInput.value = ""; // Clear the input field

    getGeminiResponse(userMessage);
});