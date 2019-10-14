const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true, useUnifiedTopology: true });

const MovieSchema = new mongoose.Schema({
  movieId: {type: Number, unique: true},
  movieName: String,
  casts: Array
});

const Movie = mongoose.model('Movie', MovieSchema);

var getCasts = (movieId, cb) => {
  Movie.find({ movieId: movieId })
    .exec((err, docs) => {
      err ? console.log(err) : cb(docs[0].casts);
    });
}

module.exports = { getCasts };
