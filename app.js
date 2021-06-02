// imports
const express = require('express')
const app = express()
let port = process.env.PORT || 5000;


// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))


// Get and Response
app.get('', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
});

// Listen on port
app.listen(port, () => {
  console.info(`App is listening on part http://localhost:${port}`);
});
