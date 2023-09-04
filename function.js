const movies = [
    {"title": "Jaws", "director": "Steven Spielberg", "year": "1975"},
    {"title": "Star Wars", "director": "George Lucas", "year": "1977"},
    {"title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018"},
    {"title": "Top Gun", "director": "Tony Scott", "year": "1986"},
    {"title": "Justice League", "director": "Zack Snyder", "year": "2017"}
];

// Part 1 - Create a function to find a movie and output it's detail
        
// function findMovie(movieTitle){
//     for(const movie of movies){
//         if(movie.title===movieTitle){
//             console.log("found: ",movie)
//         }
//     console.log(movie)
//     }
//     console.log(movie) //Out of scope of if statement
// }   

// findMovie("Star Wars");
// console.log(movie) //Out of scope of if statement



// Part 2 = Create a function to return a movie object

function returnMovie(movieTitle){
    for(const movie of movies){
        if(movie.title===movieTitle){
            console.log(movie)
            return movie
        }
    // console.log("Any text. any text at all")
    return "Movie not found"
    }
}

let myMovie = returnMovie("Avengers: Infinity War")
console.log(myMovie)

console.log("The movie title is:",myMovie.title)

let myOtherMovie = returnMovie("Thor: Ragnarok")
console.log(myOtherMovie) //Because Thor Ragnarok is not on the list, we dont enter the if statement and just enter the console log within the function

function myMovieDetails(anyMovie) {
    if(typeof anyMovie==='object') {
        return "a suitable string"
    }
    else {
        return anyMovie
    }
}

console.log(myMovieDetails(myOtherMovie))

console.log(myMovieDetails(myOtherMovie))