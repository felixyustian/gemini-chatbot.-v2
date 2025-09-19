I'm building a chatbot web app using **Node.js + Express** (backend) and **Vanilla JavaScript** (frontend).

My backend exposes a `POST` endpoint at `/chat` that expects a JSON body in this format:

```json
{
  "conversation": [
    {
      "role": "user",
      "message": "<user_message>"
    }
  ]
}
```

The backend uses Google Gemini API to generate AI responses and returns a JSON object like:

```json
{
  "success": true,
  "message": null,
  "data": "<gemini_ai_response>"
}
```

On the frontend, I have a form with a text input and a submit button. When the user submits the form, I want to:
- Add the user's message to the chat box.
- Show a temporary "**Thinking...**" bot message.
- Send the user's message as a `POST` request to `/chat` (with JSON body above).
- When the response arrives, replace the "**Thinking...**" message with the AI's reply (from the `result` property).
- If an error occurs or no result is received, show "**Sorry, no response received.**" or "**Failed to get response from server.**"

Can you help me write the complete [@script.js](/path/to/script.js) for the frontend (Vanilla JS, no frameworks) that covers this flow, including proper error handling and DOM manipulation? Please make sure the code is simple and production-ready.

The HTML structure is:
```html
<form id="chat-form">
  <input type="text" id="user-input" />
  <button type="submit">Send</button>
</form>
<div id="chat-box"></div>
```

Please provide the complete code for [@script.js](/path/to/script.js)  only, matching the backend API spec above.
