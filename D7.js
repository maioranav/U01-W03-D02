/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
  */

console.log("----------------- ESERCIZIO 1 ------------------");

function esercizio1(stringa1, stringa2) {
  return (stringa1.slice(0, 2) + stringa2.slice(-3)).toUpperCase();
}
console.log(esercizio1("Ciao a tutti", "sono Vincenzo"));

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

console.log("----------------- ESERCIZIO 2 ------------------");
const ex2 = () => {
  const array2 = [];
  for (let i = 0; i < 10; i++) {
    array2.push(Math.floor(Math.random() * 101));
  }
  return array2;
};
console.log(ex2());

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/

console.log("----------------- ESERCIZIO 3 ------------------");

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nPari = (array) => array.filter((n) => n % 2 === 0);
console.log(nPari(array3));

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("----------------- ESERCIZIO 4 ------------------");
const somma4 = (array) => {
  let somma = 0;
  array.forEach((numero) => (somma += numero));
  return somma;
};
console.log(
  `La somma dell'array iniziale dell'ex precedente è ${somma4(array3)}`
);

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/

console.log("----------------- ESERCIZIO 5 ------------------");
const array5 = ex2();
console.log(array5);
const ex5 = (array) => {
  return array.reduce((somma, valore, i) => somma + valore);
};
console.log("La somma dell'array è", ex5(array5), "con reduce");

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("----------------- ESERCIZIO 6 ------------------");
const n = 5;
const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const array6new = (array) =>
  array.map((valore) => {
    return valore + n;
  });
console.log(array6);
console.log(array6new(array6));

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("----------------- ESERCIZIO 8 ------------------");

const array8 = ["Salve", "gente", "io", "sono", "Vincenzo"];
const array8new = array8.map((valore) => {
  return valore.length;
});
console.log(array8);
console.log(array8new);

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

console.log("----------------- ESERCIZIO 9 ------------------");

const dispari99 = () => {
  const array9 = [];
  for (let i = 0; i < 99; i++) {
    array9.push(i + 1);
  }
  return array9.filter((n) => n % 2 !== 0);
};
console.log(dispari99());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("---------------- ESERCIZIO 10 ------------------");
const olderMovie = (array) => {
  let lastYearSet = 9999;
  for (let i = 0; i < array.length; i++) {
    if (array[i].Year < lastYearSet) {
      lastYearSet = array[i].Year;
      older = array[i];
    }
  }
  return older;
};
console.log(`Il film più vecchio è:`, olderMovie(movies));

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

console.log("---------------- ESERCIZIO 11 ------------------");
const qtyMovies = (array) => {
  return array.filter((movie) => movie.Type === "movie").length;
};
console.log("There are", qtyMovies(movies), "movies");

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("---------------- ESERCIZIO 12 ------------------");
const onlyTitles = (array) => {
  return array.map((movie) => movie.Title);
};
console.log(onlyTitles(movies));

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("---------------- ESERCIZIO 13 ------------------");
const lastMovies = (array) => {
  return array.filter((movie) => movie.Year >= 2000);
};
console.log(lastMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

console.log("---------------- ESERCIZIO 14 ------------------");
const imdbSet = (imdb, array = movies) => {
  const imdbQuery = imdb;
  return array.filter((movie) => movie.imdbID === imdbQuery);
};
console.log(imdbSet("tt0399295"));

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("----------------- ESERCIZIO 15 ------------------");
const anniSommati = (array) => {
  let somma15 = 0;
  array.forEach((film) => (somma15 += Number(film.Year)));
  return somma15;
};
console.log("La somma degli anni è", anniSommati(movies));
