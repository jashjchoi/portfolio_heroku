// imports npm packages
const express = require('express');
const app = express();
let port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const DownTown = require('./models/place');

const dbURI = 'mongodb+srv://tulsaMapsUser:thereare4ofus!@cluster0.91cna.mongodb.net/LocallyOwned?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// .then((result) => {
//   // listen for requests
//   app.listen(5000);
// }).catch((err) => {
//   console.log('there is an error');
// });

// mongoose.connection.on('connected', () => {
//   console.log('Mongoose is connected!!!!');
// });


app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

// Get and Response
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/all-places', (req, res) => {
  DownTown.find({ })
    .then((result) => {
      res.send(result);
      console.log("hello world");
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/single-place', (req, res) => {
  DownTown.findById('60ba78f5650b7c69b4f57a17')
    .then((result) => {
      res.send(result);
      console.log('Search by ID works');
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.info(`App is listening on port http://localhost:${port}`);
});