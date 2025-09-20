const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const sendButton = form.querySelector('button');

const API_URL = '/chat';

/**
 * Appends a new message to the chat box.
 * @param {string} sender - The sender of the message ('user' or 'bot').
 * @param {string} text - The message text.
 * @returns {HTMLElement} The created message element.
 */
function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}

/**
 * Handles the form submission to send a message to the chatbot.
 * @param {Event} e - The form submission event.
 */
async function handleChatSubmit(e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  // Disable form while processing
  input.disabled = true;
  sendButton.disabled = true;

  appendMessage('user', userMessage);
  input.value = '';

  const thinkingMessage = appendMessage('bot', 'Thinking...');

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        conversation: [{ role: 'user', message: userMessage }],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response from server.');
    }

    const result = await response.json();

    if (result.success && result.data) {
      thinkingMessage.textContent = result.data;
    } else {
      const errorMessage = result.message || 'Sorry, no response received.';
      thinkingMessage.textContent = errorMessage;
    }
  } catch (error) {
    console.error('Error:', error);
    thinkingMessage.textContent = 'Sorry, an error occurred. Please try again.';
  } finally {
    // Re-enable form
    input.disabled = false;
    sendButton.disabled = false;
    input.focus();
  }
}

form.addEventListener('submit', handleChatSubmit);
