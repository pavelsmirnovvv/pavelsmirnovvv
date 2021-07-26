"use strict"
const numberOfFilms = prompt("Сколько фильмов вы уже уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [ ],
private: false
};

const a = prompt("Какой последний фильм вы посмотрели", ""),
      b = prompt("Какой рейтинг вы бы ему поставили", ""),
      c = prompt("Какой последний фильм вы посмотрели", ""),
      d = prompt("Какой рейтинг вы бы ему поставили", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);