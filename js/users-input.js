let genreListAppended = $('.list-of-genres')

//TODO: create function that will add each genre to the form when editing movie info
// factor it to accept more than one value (on the form itself).
function pushGenresToCard() {
    const allMovieGenres = ['Drama', 'Action', 'Horror', 'Comedy', 'Thriller', 'Romance', 'Western', 'Mystery', 'Fantasy', 'Fiction',
        'Sci-Fi', 'War', 'Documentary'];
    let output = '';

    allMovieGenres.forEach(genre => {
        //language=html
        output =
            `<div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="${genre.toLowerCase()}" 
                       value="${genre.toLowerCase()}">
                <label class="form-check-label" for="${genre.toLowerCase()}">${genre}</label>
            </div>`
        genreListAppended.append(output)

    });
}

pushGenresToCard()

