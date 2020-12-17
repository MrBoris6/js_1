const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
for (let i = 0; i < personalMovieDB.count; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("Как оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;

    } else {
        console.log('error');
        i--;
    }
}
console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log("Посмотрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');


} else {
    console.log('Произошла ошибка');
}