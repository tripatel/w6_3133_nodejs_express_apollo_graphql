const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Movie {
    id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  type Query {
    allMovies: [Movie]
    movieById(id: ID!): Movie
  }

  type Mutation {
    insertMovie(name: String!, director_name: String!, production_house: String!, release_date: String!, rating: Float!): Movie
    updateMovie(id: ID!, name: String, director_name: String, production_house: String, release_date: String, rating: Float): Movie
    deleteMovieById(id: ID!): Movie
  }
`;

module.exports = typeDefs;
