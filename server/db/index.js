require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(err => console.error(err));

const MovieSchema = new mongoose.Schema({
  movieId: { type: Number, unique: true },
  movieName: String,
  casts: Array,
});

const MovieModel = mongoose.model('Movie', MovieSchema);

const getCasts = (movieId) => (
  MovieModel.find({ movieId }).exec()
);

const getMovies = () => {
  MovieModel.find({}).exec()
};

module.exports = { getCasts, MovieModel, getMovies };
