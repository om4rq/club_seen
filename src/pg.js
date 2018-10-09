const  axios =  require("axios")
const geo = require('./geocode.js');




var lng = 0,
    lat = 0,
    //array contains  [place_id, name, rating, price]
    //array wil be used combine with tempSec which contains [phone_number, and hours]
    stored = [],
    //tempId needs to be a separate array because it will be transformed to PlacesDetails url using .map
    tempId = [],
    //place search url requires longitude and latitude as inputs
    keys = ["AIzaSyCO07rUpvSrN2zthoTfQLT1CYgbex9L88w","AIzaSyAVAO1T6l9shRTSs06rJJtQIyLHTsJHcFM"],
    key = keys[0];
//obtain location cordinates
function location() {
    geo.then(function(result){
    lat = result.lat
    lng = result.lng
    return {
        lat: lat,
        lng:lng
    }
    }).then(function(result){

        scrape(lat)
    })
   
};

location()
//search for clubs. Input: cordinates

function scrape(){
axios.get( `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=11500&type=night_club&keyword=nightclub&key=${key}`)
    .then(function (response) {
        if(response.status ==="ZERO_RESULTS"){
            throw new Error("Unable to find that adress");
        }
        //create a prototype for places. To access properties, you must make a new object of places
        //     console.log(response.data.results.length)
        for(let i=0; i < response.data.results.length;i++) {
            let place_id = response.data.results[i].place_id;
            let name = response.data.results[i].name;
            let rating = response.data.results[i].rating;
            let price = response.data.results[i].price_level;
            stored.push({name,place_id,rating,price});
            //pushes place_id to array: tempId
            tempId.push(place_id);
        }
        let transformedUrl = tempId.map(id=> `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${key}`);
        return transformedUrl;
    })
    .then(function (response){
        let tempSec = [];
        axios.all(response.map(l => axios.get(l)))
            .then(axios.spread((...res)=> {
                let name =res.map(r=>r.data.result.name);
                let phone =res.map(r=>r.data.result.formatted_phone_number);
                const result = stored.map((e, i) => ({
                    name: e.name,
                    place_id: e.place_id,

                    phone: phone[i],
                    rating: e.rating,
                    price: e.price
                }));
                console.log(result);
                /*
            figure out how to print temSec
*/

	        // all requests are now complete
            }))
            .then((response) => {
                //            console.log(stored)
                //            console.log(tempSec)
            });

    })
    .catch(function (error) {
        if(error.code === "ENOTFOUND"){
            console.log("Unable to connect to API servers");}});
}





