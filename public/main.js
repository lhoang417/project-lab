const placesContainer = document.querySelector('#Want-to-visit')
const visitedContainer = document.querySelector('#visited')
const form = document.querySelector('form')

const baseURL = `https://destination-lab.herokuapp.com/api/locations`

const placesCallback = ({ data: places }) => displayPlaces(places)
const errCallback = err => console.log(err)

const getAllPlaces = () => axios.get(baseURL).then(placesCallback).catch(errCallback)
const createPlace = body => axios.post(baseURL, body).then(placesCallback).catch(errCallback)
const deletePlace = id => axios.delete(`${baseURL}/${id}`).then(placesCallback).catch(errCallback)




function submitHandler(e) {
    e.preventDefault()

    let address = document.querySelector('#address')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        address: address.value,
        imageURL: imageURL.value
    }

    createPlace(bodyObj)

    address.value = ''
    imageURL.value = ''
}

function createPlaceCard(place) {
    const placeCard = document.createElement('div')
    placeCard.classList.add('place-card')

    placeCard.innerHTML = `<img alt='place cover image' src=${place.imageURL} class="place-cover-image"/>
    <p class="address">${place.address}</p>
    <button id= 'delete' onclick="deletePlace(${place.id})">delete</button>
    <label class="container">Visited
    <input type="checkbox">
    <span class="checkmark"></span>
    </label>
    `

    placesContainer.appendChild(placeCard)
}



function displayPlaces(arr) {
    placesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPlaceCard(arr[i])

    }
}

form.addEventListener('submit', submitHandler)

getAllPlaces()