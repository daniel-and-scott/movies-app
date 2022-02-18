//TODO: Create function to get data from database
function getAllMovies() {
    fetch('https://foremost-fluttering-carol.glitch.me/movies')
        .then(res => res.json()
            .then(movies => console.log(movies)))
}

getAllMovies()

//TODO: Create function that takes the title and displays it

function getTheTitle() {
    fetch('https://foremost-fluttering-carol.glitch.me/movies')
        .then(res => res.json()
            .then(title => console.log(title[0].title)))
}

getTheTitle()

//TODO: Add movie to list


function addMoviesToList() {

    const addMovies = {
        title: 'asdf',
        rating: 'asdf',
        poster: 'asdf',
        year: 'asdf',
        genre: 'asdf',
        director: 'asdf',
        plot: 'asdf',
        actors: 'asdf',
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addMovies)
    }

    fetch("https://foremost-fluttering-carol.glitch.me/movies", options)
        .then(res => res.json()
            .then(info => console.log(info)))
}

//TODO: Create function that will delete previous inputs

