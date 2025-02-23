# Weather App Project

This project is a simple weather application that serves static files and includes an API endpoint to fetch an API key from environment variables. It is built using Node.js and Express.

## Features

- Serves static files from the project's root directory
- Endpoint to fetch API key from environment variables
- Serves `index.html` file at the root URL
- Starts the server and listens on a specified port (defaults to 3000)

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables
Create a `.env` file in the root directory and add the following:
```env
API_KEY=<your_api_key>
```

## Running the App
Start the server:
```bash
npm start
```

Open your browser and navigate to:
```
http://localhost:<your_port>
```

## API Endpoints
- `GET /apikey`: Returns a JSON object containing the API key.

## Project Structure
```
weather-app/
├── .env
├── index.html
├── server.js
├── package.json
└── node_modules/
```

## Acknowledgements
Inspired by the need for easy access to weather data.

Built with love using Node.js and Express.

