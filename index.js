const express = require('express');
const app = express();
const port = 3000;

// Zet EJS als template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Route
app.get('/', (req, res) => res.render('index'));

// Start server
app.listen(port, '0.0.0.0', () => console.log(`App listening on port ${port}`));
