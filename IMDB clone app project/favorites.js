document.addEventListener("DOMContentLoaded",function(){
    const favoritesGrid = document.getElementById("favoritesGrid");

    const favoriteMovies = [
        {
            title: "Guardians of the Galaxy Vol. 2",
            year: 2017,
            poster: "images/Guardians of the Galaxy Vol. 2.jpg"
        },
        {
            title: "The Dark Night",
            year: 2005,
            poster: "images/The Dark Night.jpg"
        },
        {
            title: "Amazing SpiderMan",
            year: 2012,
            poster: "images/Amazing SpiderMan.jpg"
        },
        {
            title: "The Avengers",
            year: 2012,
            poster: "images/The Avengers.jpg"
        },
        {
            title: "Superman",
            year: 1978,
            poster: "images/Superman.jpg"
        },
        {
            title: "Thor",
            year: 2011,
            poster: "images/THOR.jpg"
        }
    ];
function displayFavoriteMovies() {
    const favoritesGrid = document.getElementById('favorites-grid');
    favoritesGrid.innerHTML = "";    
    //Generate html for favorite Movies
    //(A function that accepts up to three arguments.
    // forEach calls the callbackfn function one time 
    //for each element in the array.)
    favoriteMovies.forEach(function(movie){
        const movieCard =document.createElement("div");
        movieCard.classList.add("favorite-movie-card"); 

        const moviePoster = document.createElement("img");
        moviePoster.src = movie.poster;
        moviePoster.alt = movie.title;
        movieCard.appendChild(moviePoster);

        const MovieInfo = document.createElement("div");
        MovieInfo.classList.add("favorite-movie-info");

        const MovieTitle = document.createElement("h3");
        MovieTitle.innerHTML = movie.title;
        MovieInfo.appendChild(MovieTitle);

        const MovieYear = document.createElement("p");
        MovieYear.innerHTML = "Year: " + movie.year;
        MovieInfo.appendChild(MovieYear);

        movieCard.appendChild(MovieInfo);
        favoritesGrid.appendChild(movieCard);

    });

}
    //Calling the function to show the favorite function to show the favorite movie
    displayFavoriteMovies();
});
