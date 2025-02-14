https://medium.com/better-programming/a-simple-crud-app-using-graphql-nodejs-mongodb-78319908f563

https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786

# Sample Queries

### 1. Query all movies
```
query {
  movies {
    id
    name
    director_name
    production_house
    release_date
    rating
  }
}
```

### 2. Query a single movie by ID
```
query {
  movie(id: "60f48f8b7b45c2322f1a9b2d") {
    id
    name
    director_name
    production_house
    release_date
    rating
  }
}
```
