/** Create mock data */
var movieTitles = ['Squirrel Man', 'Roht: Korangar', 'Revengers: Short Battle', 'Doctor Familiar', 'Guardians of Wu Dao Kou'];
var actorFirst = ['Jenna', 'Steve', 'John', 'Rainn', 'Angela', 'Ed', 'Mindy', 'BJ', 'Brian', 'Ellie', 'Phyllis', 'Leslie', 'Oscar', 'Kate', 'Creed', 'Paul', 'Craig', 'Melora', 'Rashida'];
var actorLast = ['Fischer', 'Carell', 'Krasinski', 'Wilson', 'Kinsey', 'Helms', 'Kaling', 'Novak', 'Baumgartner', 'Kemper', 'Smith', 'Baker', 'Nunez', 'Flannery', 'Bratton', 'Lieberstein', 'Robinson', 'Hardin', 'Jones'];
var characterFirst = ['Pam', 'Michael', 'Jim', 'Dwight', 'Angela', 'Andy', 'Kelly', 'Ryan', 'Kevin', 'Erin', 'Phyllis', 'Stanley', 'Oscar', 'Meredith', 'Creed', 'Toby', 'Darryl', 'Jan', 'Karen'];
var characterLast = ['Beesly', 'Scott', 'Halpert', 'Schrute', 'Martin', 'Bernard', 'Kapoor', 'Howard', 'Malone', 'Hannon', 'Vance', 'Hudson', 'Martinez', 'Palmer', 'Bratton', 'Flenderson', 'Philbin', 'Levison', 'Filippelli'];

const getRandomInt = function(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var castId = 0;
const Cast = function() {
  this.castId = castId++;
  this.actor = actorFirst[getRandomInt(actorFirst.length - 1, 0)] + ' ' + actorLast[getRandomInt(actorLast.length - 1, 0)];
  this.character = characterFirst[getRandomInt(characterFirst.length - 1, 0)] + ' ' + characterLast[getRandomInt(characterLast.length - 1, 0)];
  this.imageUrl = `https://castphotos.s3-us-west-1.amazonaws.com/${getRandomInt(40, 0)}.png`;
  this.role = getRandomInt(3, 1);
}

var movieId = 0;
const Movie = function() {
  this.movieId = movieId++;
  this.title = movieTitles[movieId - 1];
  this.casts = [];
}

var populateMovieData = function() {
  var movieData = [];

  for (var i = 0; i < movieTitles.length; i++) {
    var someMovie = new Movie();
    for (var k = 0; k < getRandomInt(30, 20); k++) {
      var someCast = new Cast();
      someMovie.casts.push(someCast);
    }
    movieData.push(someMovie);
  }

  return movieData;
}

var movieData = populateMovieData();

/** Adding mock data to database */
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const MovieSchema = new mongoose.Schema({
  movieId: {type: Number, unique: true},
  title: String,
  casts: Array
});

const MovieModel = mongoose.model('Movie', MovieSchema);

MovieModel.insertMany(movieData, (err, docs) => {
  if (err) console.log(`can't add movie data -->`, err);
  else console.log('added movie data');
});
