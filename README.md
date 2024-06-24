
# Fun Fact Today

This project is a simple web application that displays an interesting fact of the day using the Google Gemini API. The application is built with Express.js and uses EJS for templating.

## Live Site

Check out the live site here: [Fun Fact Today](https://fun-fact-today.onrender.com/)

## Features

- Fetches and displays a random interesting fact using the Google Gemini API.
- Simple and clean UI.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    \`\`\`bash
    git clone https://github.com/hasanpeal/FunFactToday.git
    cd FunFactToday
    \`\`\`

2. **Install dependencies:**

    \`\`\`bash
    npm install
    \`\`\`

3. **Create a `.env` file:**

    Create a `.env` file in the root directory of the project and add your Google Gemini API key:

    \`\`\`env
    API_KEY=your_google_generative_ai_api_key
    \`\`\`

4. **Start the server:**

    \`\`\`bash
    npm start
    \`\`\`

5. **Open your browser:**

    Go to \`http://localhost:3000\` to see the application in action.

## Usage

The application fetches an interesting fact from the Google Gemini API and displays it on the homepage. The fact is retrieved asynchronously when the page is loaded.

## Technologies Used

- **Express.js**: A web framework for Node.js.
- **EJS**: Embedded JavaScript templating.
- **Google Gemini API**: Used to generate interesting facts.
- **dotenv**: For loading environment variables from a `.env` file.

## Project Structure

\`\`\`bash
├── public
│   └── style.css
├── views
│   └── index.ejs
├── .env
├── app.js
├── package.json
└── README.md
\`\`\`

- \`public/style.css\`: Contains the CSS for styling the application.
- \`views/index.ejs\`: The EJS template for rendering the homepage.
- \`.env\`: Environment variables file containing the API key.
- \`app.js\`: The main application file.

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
