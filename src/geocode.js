const  axios =  require("axios");
var location='Manhattan';
var lat = "yesas",
    lng = "";

function X() {
   return axios.get("https://maps.googleapis.com/maps/api/geocode/json?", {
    params: {
        address: location,
        key: 'AIzaSyCO07rUpvSrN2zthoTfQLT1CYgbex9L88w'
    }
})
.then(function(response){
    lat = response.data.results[0].geometry.location.lat
    lng = response.data.results[0].geometry.location.lng
    return {
        lat: lat,
        lng: lng
    }
    })
.catch(function(error){
        console.log(error);
    });
    
    
    };


module.exports = X();
