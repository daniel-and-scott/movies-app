const showMovieInfo = $('#movie-cards')

function showMovies(data) {
    let allMovies = '';
    showMovieInfo.empty()
    data.forEach((id) => {
        //language=html
        allMovies = `
            <div class="card" style="width: 21rem;">
                <div class="card-header bg-dark">
                    <h5 class="card-title text-center movie-title text-white">${id.title}</h5>
                </div>
                <div class="card-body">
                    <div class="container mb-3">
                        <div class="poster d-flex justify-content-center"><img id="poster-img" src="${id.poster}">
                        </div>
                    </div>
                    <p class="rating card-text">Rating: ${id.rating}</p>
                    <p class="year card-text">Year: ${id.year}</p>
                    <p class="genre card-text">Genre: ${id.genre}</p>
                    <p class="director card-text">Director: ${id.director}</p>
                    <p class="plot card-text">Plot: ${id.plot}</p>
                    <p class="actors card-text">Actors: ${id.actors}</p>
                </div>
                <div class="card-footer">
                    <a href="#" data-id="${id.id}" class="btn btn-outline-success float-right edit-information-btn"
                       data-toggle="modal"
                       data-target="#editInfo">Edit This movie</a>
                </div>
            </div>
        `
        showMovieInfo.append(allMovies)
    });
}

// when button is pressed it will display the information in the form as well as give an attr to submit button
$(document).on('click', '.edit-information-btn', function () {
    let dataId = $(this).data('id')
    $('.edit-btn').attr('data-id', dataId)
    getTheTitle(dataId);
    getThePoster(dataId);
    getTheRating(dataId);
    getTheYear(dataId);
    getTheGenres(dataId);
    getTheDirector(dataId);
    getThePlot(dataId);
    getTheActors(dataId);
});

// when button is pressed it will send date to the server and change the users input
$('.edit-btn').click(function () {
    let id = $(this).data('id');
    changeInformation(id);
});

//when button is pressed it will pass the information of the card to the button and perform a data delete
$(document).on('click', '.edit-information-btn', function () {
    let dataId = $(this).data('id')
    $('.delete-btn').attr('data-id', dataId)
});


// if delete button is clicked will delete all data entry for that card
$('.delete-btn').click(function () {
    let id = $(this).data('id');
    let deleteConfirmed = confirm("are you sure you want to delete this data entry?")
    if (deleteConfirmed) {
        deleteMovieFromList(id)
        alert("Movie data entry has been successfully completed.")
    } else {
        alert("Action canceled")
    }
});


// when button is pressed it will send date to the server and change the users input
$('.add-movie-btn').click(function () {
    var fav = [];
    $.each($("input[name='genres']:checked"), function () {
        fav.push($(this).val());
    });
    const newMovieToAdd = {
        title: $('#title-add').val(),
        rating: $('#rating-add').val(),
        poster: $('#poster-add').val(),
        year: $('#year-add').val(),
        genre: fav,
        director: $('#director-add').val(),
        plot: $('#plot-add').val(),
        actors: $('#actors-add').val(),
    }
    addMoviesToList(newMovieToAdd);
});