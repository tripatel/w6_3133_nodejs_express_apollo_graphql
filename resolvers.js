const Movie = require('./models/Movie');

const movies = [
    { id: "1", name: "Inception", director_name: "Christopher Nolan", production_house: "Warner Bros.", release_date: "2010-07-16", rating: 8.8 },
    { id: "2", name: "The Matrix", director_name: "Lana Wachowski", production_house: "Warner Bros.", release_date: "1999-03-31", rating: 8.7 }
  ];
  
  const resolvers = {
    Query: {
      getAllMovies: () => movies,
      getMovieById: (_, { id }) => movies.find(movie => movie.id === id),
    },
  
    Mutation: {
      insertMovie: (_, { name, director_name, production_house, release_date, rating }) => {
        const newMovie = { id: String(movies.length + 1), name, director_name, production_house, release_date, rating };
        movies.push(newMovie);
        return newMovie;
      },
  
      updateMovie: (_, { id, name, director_name, production_house, release_date, rating }) => {
        const movie = movies.find(m => m.id === id);
        if (!movie) throw new Error("Movie not found");
  
        if (name) movie.name = name;
        if (director_name) movie.director_name = director_name;
        if (production_house) movie.production_house = production_house;
        if (release_date) movie.release_date = release_date;
        if (rating) movie.rating = rating;
  
        return movie;
      },
  
      deleteMovie: (parent, args) => {
        const { id } = args;
        const movieIndex = movies.findIndex(movie => movie.id === id);
        if (movieIndex === -1) return null;
      
        const deletedMovie = movies[movieIndex];
        movies.splice(movieIndex, 1);
        return deletedMovie;
      }
      
    }
  };
  
  module.exports = resolvers;