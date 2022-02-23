//TODO: when button is pressed it will display the information in the form as well as give an attr to submit button
$(document).on('click', '.edit-information-btn', function () {
    let dataId = $(this).data('id')
    $('.edit-btn').attr('data-id', dataId)
    $('#form-id').val(dataId)
    getTheTitle(dataId);
    getThePoster(dataId);
    getTheRating(dataId);
    getTheYear(dataId);
    getTheGenres(dataId);
    getTheDirector(dataId);
    getThePlot(dataId);
    getTheActors(dataId);
});

//TODO: when button is pressed it will send data to the server and change the users input
$('.edit-btn').click(function () {
    let id = $('#form-id').val();
    console.log(id)
    changeInformation(id);
});

//TODO: when button is pressed it will pass the information of the card to the button and perform a data delete
$(document).on('click', '.edit-information-btn', function () {
    let dataId = $(this).data('id')
    $('.delete-btn').attr('data-id', dataId)
});


//TODO: if delete button is clicked will delete all data entry for that card
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


//TODO: when button is pressed it will send date to the server and change the users input
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
//TODO: functionality of drop down menu that sorts by title
$('.title-dropdown').click(() => {
    sortTitle()
});
//TODO: functionality of drop down menu that sorts by genre
$('.genre-dropdown').click(() => {
    sortGenre()
});
//TODO: functionality of drop down menu that sorts by rating
$('.rating-dropdown').click(() => {
    sortRating()
});