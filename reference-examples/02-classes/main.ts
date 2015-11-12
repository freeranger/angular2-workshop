class Movie {
    title;

    constructor(title = "Default") {
        this.title = title;
    }
}

let avengers = new Movie("avengers");

console.log(avengers.title);