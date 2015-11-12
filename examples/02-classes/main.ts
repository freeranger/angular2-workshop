class Movie {
  title;

  constructor(title="Default") {
    this.title = title;
  }
}

let avengers = new Movie('Avengers');
let anotherMovie = new Movie();

console.log(avengers);
console.log(anotherMovie);