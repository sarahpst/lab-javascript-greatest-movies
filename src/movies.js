// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((currentMovie) => {
    return currentMovie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let result = moviesArray.filter(
    (element) =>
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
  );
  return result.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let totalScores = moviesArray.reduce((accumulator, element) => {
    let score = element.score;
    if (!score) {
      score = 0;
    }

    return accumulator + score;
  }, 0);

  return Math.round((totalScores / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((element) =>
    element.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) {
    return 0;
  }

  let totalScoreDrama = dramaMovies.reduce(
    (accumulator, element) => accumulator + element.score,
    0
  );
  return Math.round((totalScoreDrama / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedArray = moviesArray
    .map((element) => element)
    .sort((a, b) => {
      if (a.year === b.year) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      } else {
        return a.year - b.year;
      }
    });

  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let sortByAlphabet = moviesArray
    .map((element) => element.title)
    .sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });

  if (sortByAlphabet.length > 20) {
    return sortByAlphabet.slice(0, 20);
  } else {
    return sortByAlphabet;
  }
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
