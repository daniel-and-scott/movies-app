//TODO: Create function to get data from database
function getAllMovies() {
    fetch(dataBaseUrl)
        .then(res => res.json()
            .then(movies => showMovies(movies)))
}

getAllMovies()

//TODO: Create function that takes the title and displays it

function getTheTitle() {
    fetch(dataBaseUrl)
        .then(res => res.json()
            .then(title => console.log(title[0].title)))
}

getTheTitle()

//TODO: Add movie to list


function addMoviesToList(newMoviesToAdd) {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMoviesToAdd)
    }

    fetch(dataBaseUrl, options)
        .then(res => res.json()
            .then(info => console.log(info)))
}

//TODO: Create function that will delete previous inputs

function deleteMoviesFromList(id) {

    const deleteRequest = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        }
    }

    fetch(`${dataBaseUrl}/${id}`, deleteRequest)
        .then(res => res.json()
            .catch(err => console.log(err)));
}

//TODO: Create function that will change information within the API
// var info = {
//     title: 'ASDF'
// }
//
// function changeInformation(change ,id) {
//
//     const putRequest = {
//         method: "PUT",
//         headers: {
//             "Content-type": "application/json",
//         }
//     }
//     fetch(`${dataBaseUrl}/${id}`, putRequest)
//         .then(res => res.json()
//         .then(info => console.log(info)))
//
// }
//
// changeInformation(info,2)