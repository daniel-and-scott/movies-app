const showMovieInfo = $('#movie-cards')

function showMovies(data) {
    let allMovies = '';

    data.forEach((id) => {
        //language=html
        allMovies = `
            <div class="card" style="width: 18rem;">
                <div class="card-header bg-dark">
                    <h5 class="card-title text-center movie-title text-white">${id.title}</h5>
                </div>
                <div class="card-body">
                    <div class="poster card-text mb-3">Poster: ${id.poster}</div>
                    <p class="rating card-text">Rating: ${id.rating}</p>
                    <p class="year card-text">Year: ${id.year}</p>
                    <p class="genre card-text">Genre: ${id.genre}</p>
                    <p class="director card-text">Director: ${id.genre}</p>
                    <p class="plot card-text">Plot: ${id.plot}</p>
                    <p class="actors card-text">Actors: ${id.actors}</p>
                </div>
                <div class="card-footer">
                    <a href="#" data-id="${id.id}" class="btn btn-outline-success float-right edit-information-btn"
                       data-toggle="modal"
                       data-target="#editInfo">Edit This movie</a>
                </div>
            </div>`
        showMovieInfo.append(allMovies)
    });
}

$(document).on('click', '.edit-information-btn', function () {
    let dataId = $(this).data('id')
    $('.edit-btn').attr('data-id', dataId)
    getTheTitle(dataId);
});

$('.edit-btn').click(function () {
    let id = $(this).data('id');
    changeInformation(id);

});