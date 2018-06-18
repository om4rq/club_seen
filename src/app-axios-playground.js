const  axios =  require('axios');

var lng = 41.8781,
    lat = -87.6298,
    //array contains  [place_id, name, rating, price]
    //array wil be used combine with tempSec which contains [phone_number, and hours]
    stored = [],
    //tempId needs to be a separate array because it will be transformed to PlacesDetails url using .map
    tempId = [],
    //place search url requires longitude and latitude as inputs
    keys = ["AIzaSyCO07rUpvSrN2zthoTfQLT1CYgbex9L88w","AIzaSyAVAO1T6l9shRTSs06rJJtQIyLHTsJHcFM"],
    key = keys[0],
    placesSearch = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lng},${lat}&radius=11500&type=night_club&keyword=nightclub&key=${key}`;
axios.get(placesSearch)
    .then(function (response) {
        if(response.status ==='ZERO_RESULTS'){
            throw new Error('Unable to find that adress');
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
        // console.log(transformedUrl[0])
        return transformedUrl;
    })
    .then((response)=>{
        console.log("f55")
        //tempSec: array contains [phone_number, hours]
        //will be assigned to new array with stored
        // nested axios.all
        let tempSec = [];
        axios.all(response.map(x => {
            axios.get(x)
                .then((res)=> {
                    let namet = [res.data.result.name];
                    let phone_number = res.data.result.formatted_phone_number;
                    tempSec.push(namet,phone_number);
                    console.log("f1");
                })
                .catch((e)=>console.log(e));
        }))
            .then((x)=>{console.log("done");})
            .catch((e)=>console.log(e));



    //******* end of nested axios.all *****
        // console.log(stored)
    })
    .catch(function (error) {
        if(error.code === "ENOTFOUND"){
            console.log("Unable to connect to API servers");}});




//
//
//
