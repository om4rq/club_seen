const  axios =  require('axios');


var lng = 41.8781,
    lat = -87.6298;


var placesSearch = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lng},${lat}&radius=11500&type=night_club&keyword=nightclub&key=AIzaSyAVAO1T6l9shRTSs06rJJtQIyLHTsJHcFM`;
function Places(){};
let place = new Places();

var stored = []

var i=0

    axios.get(placesSearch)
    .then(function (response) {
        if(response.status ==='ZERO_RESULTS'){
            throw new Error('Unable to find that adress');
        }
    //create a prototype for places. To access properties, you must make a new object of places
    //     console.log(response.data.results.length)

        Places.prototype.place_id = response.data.results[i].place_id;
        Places.prototype.name = response.data.results[i].name;
        Places.prototype.rating = response.data.results[i].rating;
        Places.prototype.price = response.data.results[i].price_level;


        let placesDetails = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place.place_id}&key=AIzaSyAVAO1T6l9shRTSs06rJJtQIyLHTsJHcFM`
        return(axios.get(placesDetails))
    })
    .then((response)=>{
        Places.prototype.address = response.data.result.vicinity;
        Places.prototype.website = response.data.result.website;
        Places.prototype.phone_number = response.data.result.international_phone_number;
        Places.prototype.hours = response.data.result.opening_hours.weekday_text;


        stored.push(place.__proto__)
        console.log(stored)
        // console.log(place0.__proto__);
    })
    .catch(function (error) {
        if(error.code === "ENOTFOUND"){
            console.log("Unable to connect to API servers");
        } else {
            console.log(error.message);
        }
    })
;

// console.log(place.name)
// axios.get(googlePlacesUrl)
// .then((response) => {
//     console.log(response);
// })
// .catch((error)=> {
//     console.log(error);
// })




