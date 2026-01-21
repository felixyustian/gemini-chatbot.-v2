# Gemini Chatbot v2 (Node.js)


An improved, interactive web-based chatbot powered by Google's Gemini API. This version features a Node.js backend with a lightweight frontend, designed to serve as a customizable conversational agent.

## 🚀 Features

* **Gemini API Integration**: Direct integration with Google's latest Gemini models for natural language understanding and generation.
* **Web Interface**: A clean, responsive chat interface (served via `static` files) built with HTML, CSS, and JavaScript.
* **Custom Prompts**: Dedicated `prompts/` directory for managing system instructions and bot personas.
* **Node.js Backend**: Fast and efficient server-side handling using `index.js`.

## 🛠️ Technology Stack

* **Runtime**: [Node.js](https://nodejs.org/)
* **Language**: JavaScript (Backend & Frontend)
* **Styling**: CSS
* **API**: Google Generative AI (Gemini)

## 📋 Prerequisites

Before running the application, ensure you have the following installed:
* [Node.js](https://nodejs.org/en/download/) (v16 or higher recommended)
* [npm](https://www.npmjs.com/) (Node Package Manager)
* A valid **Google Gemini API Key** (Get it from [Google AI Studio](https://aistudio.google.com/))

## 🔧 Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/felixyustian/gemini-chatbot.-v2.git](https://github.com/felixyustian/gemini-chatbot.-v2.git)
    cd gemini-chatbot.-v2
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure API Key**
    * Create a `.env` file in the root directory (if not already present).
    * Add your API key:
        ```env
        API_KEY=your_google_gemini_api_key_here
        ```
    * *Note: If the project uses a different method (like direct insertion in `index.js`), please locate the placeholder and paste your key there, but using `.env` is recommended for security.*

## ▶️ Usage

1.  **Start the Server**
    ```bash
    node index.js
    ```
    *Or if a start script is defined:*
    ```bash
    npm start
    ```

2.  **Access the Chatbot**
    Open your web browser and navigate to:
    `http://localhost:3000` (or the port specified in your console output).

## 📂 Project Structure

```text
gemini-chatbot.-v2/
├── index.js          # Main server entry point
├── package.json      # Node dependencies and scripts
├── prompts/          # System prompts and behavior definitions
├── static/           # Frontend assets (HTML, CSS, Client-side JS)
└── README.md         # Project documentation
```

## 📄 License
This project is licensed under the GPL-3.0 License. See the LICENSE file for details.
