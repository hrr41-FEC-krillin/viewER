const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

const MovieSchema = new mongoose.Schema({
  movieId: {type: Number, unique: true},
  movieName: String,
  casts: Array
});

const Movie = mongoose.model('Movie', MovieSchema);

var movieData = require('./mockData.json');

Movie.insertMany(movieData, (err, docs) => {
  if (err) console.log(`can't add movie data -->`, err);
  console.log('added movie data');
});
