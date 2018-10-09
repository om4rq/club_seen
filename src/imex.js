const a = require('./geocode.js')

a.then(function(result){
    console.log(result.lat)
    console.log(result.lng)
//    console.log(result)
})

//console.log(a.lat+"|"+a.lng)