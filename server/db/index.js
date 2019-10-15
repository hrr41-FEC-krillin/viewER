const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true, useUnifiedTopology: true });

const MovieSchema = new mongoose.Schema({
  movieId: {type: Number, unique: true},
  movieName: String,
  casts: Array
});

const MovieModel = mongoose.model('Movie', MovieSchema);

var getCasts = (movieId) => {
  return MovieModel.find({ movieId: movieId }).exec();
}

module.exports = { getCasts };
