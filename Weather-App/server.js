const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();


app.use(express.static(__dirname));

// Endpoint to get the API key
app.get('/apikey', (req, res) => {
    res.json({ apiKey: process.env.API_KEY });
});

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
