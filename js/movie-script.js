//TODO: Create function to get data from database
function getAllMovies() {
    fetch(dataBaseUrl)
        .then(res => res.json()
            .then(movies => showMovies(movies)))
}

getAllMovies()

//TODO: Create function that takes the information from server and displays it in text field

function getTheTitle(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#title-change').val(title.title)))
}

function getThePoster(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#poster-change').val(title.poster)))
}

function getTheRating(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#rating-change').val(title.rating)))
}

function getTheYear(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#year-change').val(title.year)))
}

function getTheGenres(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('.list-of-genres').val(title.genre)))
}

function getTheDirector(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#director-change').val(title.director)))
}

function getThePlot(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#plot-change').val(title.plot)))
}

function getTheActors(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#actors-change').val(title.actors)))
}

//TODO: Add movie to list
function addMoviesToList(newMovieToAdd) {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovieToAdd)
    }

    fetch(dataBaseUrl, options)
        .then(res => res.json()
            .then(()=>{
                $('#movie-cards').html(' ')
                getAllMovies()
            }));
}

//TODO: Create function that will delete previous inputs
function deleteMovieFromList(id) {

    const deleteRequest = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        }
    }

    fetch(`${dataBaseUrl}/${id}`, deleteRequest)
        .then(res => res.json()
            .then(()=>{
                $('#movie-cards').html(' ')
                getAllMovies()
        }));
}

//TODO: Create function that will change information within the API
function changeInformation(id) {

    var genreArray = [];
    $.each($("input[name='genres']:checked"), function () {
        genreArray.push($(this).val());
    });


    const change = {
        title: $('#title-change').val(),
        rating: $('#rating-change').val(),
        poster: $('#poster-change').val(),
        year: $('#year-change').val(),
        genre: genreArray,
        director: $('#director-change').val(),
        plot: $('#plot-change').val(),
        actors: $('#actors-change').val(),
    }
    const putRequest = {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(change)
    }

    fetch(`${dataBaseUrl}/${id}`, putRequest)
        .then(res => res.json()
            .then(() => {
                $('#movie-cards').html(" ")
                getAllMovies()
            }));
}














