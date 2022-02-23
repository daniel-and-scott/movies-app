//TODO: create function to get data from database
getAllMovies()

function getAllMovies() {
    //language=html
    let loading = `
        <div class="ring">Loading
            <span></span>
        </div>`;
    $('#movie-cards').html(loading)

    fetch(dataBaseUrl)
        .then(res => res.json()
            .then(movies => showMovies(movies))
            .then(() => $('body').css('background-color', '#fff')))
}


//TODO: create function that takes the information from server and displays it in text field
function getTheTitle(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#title-change').val(title.title)))
}

//TODO: function to sort title on the web browser
function sortTitle() {
    fetch(dataBaseUrl, {method: 'GET'})
        .then(res => res.json()
            .then(title => title.sort(function (a, b) {
                var nameA = a.title;
                var nameB = b.title;
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }))).then((movies) => showMovies(movies));
}

//TODO: function that will get the poster ID and leave it in the form box if user does not edit it
function getThePoster(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#poster-change').val(title.poster)))
}

//TODO: function that will get the rating and leave it in the form box if user does not edit it
function getTheRating(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#rating-change').val(title.rating)))
}

//TODO: function to sort rating on the web browser
function sortRating() {
    fetch(dataBaseUrl, {method: 'GET'})
        .then(res => res.json()
            .then(title => title.sort(function (a, b) {
                var nameA = parseInt(a.rating);
                var nameB = parseInt(b.rating);
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }))).then((movies) => showMovies(movies));
}

//TODO: function that will get the year and leave it in the form box if user does not edit it
function getTheYear(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#year-change').val(title.year)))
}

//TODO: function that will get the genre and leave it in the form box if user does not edit it
function getTheGenres(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('.list-of-genres').val(title.genre)))
}

//TODO: Function to sort genre on the web browser
function sortGenre() {
    fetch(dataBaseUrl, {method: 'GET'})
        .then(res => res.json()
            .then(title => title.sort(function (a, b) {
                var nameA = a.genre;
                var nameB = b.genre;
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }))).then((movies) => showMovies(movies));
}

//TODO: function that will get the director and leave it in the form box if user does not edit it
function getTheDirector(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#director-change').val(title.director)))
}

//TODO: function that will get the plot and leave it in the form box if user does not edit it
function getThePlot(id) {
    fetch(`${dataBaseUrl}/${id}`, {method: `GET`})
        .then(res => res.json()
            .then(title => $('#plot-change').val(title.plot)))
}

//TODO: function that will get the actors and leave it in the form box if user does not edit it
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
            .then(() => {
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
            .then(() => {
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













