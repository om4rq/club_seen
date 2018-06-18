// let arr1= [ 'PRYSM Nightclub', 'Primary NightClub', 'Stereo Nightclub', 'Studio Paris Nightclub', 'JC Martini Club', 'Berlin', 'Annex Nightclub Chicago', 'Transit', 'Electric Hotel', 'Brick\'s Night Club', 'Enclave Night Club', 'Bongo\'s Nightclub', 'Surreal Nightlife & Bottle Service', 'Volkan', 'Hydrate', 'Underground', 'LITE Chicago', 'Red Night Club', 'Tunnel', 'SUB 51' ]
// let arr2 = [ '(312) 546-4141', '(312) 888-2471', '(773) 889-7171', '(312) 377-9944', '(773) 622-9444', '(773) 348-4975', '(773) 278-4646', '(312) 491-8600', '(312) 374-4683', undefined, undefined, '(312) 491-9729', '(773) 459-8133', '(773) 247-2400', '(773) 975-9244', '(312) 644-7600', '(312) 600-5937', '(773) 545-2224', '(773) 348-8899', '(312) 828-0051' ]
// let obj1 = [ { name: 'PRYSM Nightclub', place_id: 'ChIJKbhQPSTTD4gRVW0a0Mvp_I8', rating: 3, price: 3 }, { name: 'Studio Paris Nightclub', place_id: 'ChIJF2INhbEsDogR2laq1Iazy3U', rating: 3.6, price: 3 }, { name: 'Stereo Nightclub', place_id: 'ChIJ98xxjIXMD4gRq435JSTHyiI', rating: 4.4, price: 2 }, { name: 'Primary NightClub', place_id: 'ChIJcQp13U_TD4gRuNvRXAqSLY0', rating: 3.7, price: undefined }, { name: 'JC Martini Club', place_id: 'ChIJBZLn_HPMD4gR86E4WfhCrTg', rating: 3.3, price: 1 }, { name: 'Berlin', place_id: 'ChIJ5_8s-qvTD4gRKOrODqBYCHM', rating: 3.9, price: undefined }, { name: 'Transit', place_id: 'ChIJI_7n7iUtDogRsfDEOJHmn-s', rating: 3.3, price: 2 }, { name: 'Electric Hotel', place_id: 'ChIJ99Ra8rQsDogRr_fP84fvVkE', rating: 3.1, price: 2 }, { name: 'Fantasy Nightclub', place_id: 'ChIJHeFyk7DTD4gRWyQ7JoIXmKQ', rating: 2.7, price: undefined }, { name: 'Brick\'s Night Club', place_id: 'ChIJH0saZd8yDogR5zP5PVU0pI4', rating: 4.2, price: undefined }, { name: 'Annex Nightclub Chicago', place_id: 'ChIJ3_nIUcfSD4gRaPdxEHgrDC4', rating: 3.4, price: undefined }, { name: 'Enclave Night Club', place_id: 'ChIJ3V58PUvTD4gRpFSTzYiWU1I', rating: 3.1, price: undefined }, { name: 'Surreal Nightlife & Bottle Service', place_id: 'ChIJGeaBT4fSD4gRBYjyQSf4BUI', rating: 4.6, price: undefined }, { name: 'Bongo\'s Nightclub', place_id: 'ChIJI_7n7iUtDogR2693pLWEWdk', rating: 5, price: undefined }, { name: 'Hydrate', place_id: 'ChIJcVd84K_TD4gR61CvEhs_VHE', rating: 4, price: undefined }, { name: 'Underground', place_id: 'ChIJwyg4I7IsDogR0ZOrQlJl0LQ', rating: 2.4, price: undefined }, { name: 'Red Night Club', place_id: 'ChIJ2QT_F2zMD4gRYo1zNdG86bM', rating: 4.1, price: undefined }, { name: 'SUB 51', place_id: 'ChIJyd5B87EsDogRferPsYYs7mA', rating: 3.7, price: undefined }, { name: 'Watra Night Club', place_id: 'ChIJ8wetvpExDogRxZQknXeppEc', rating: 3.8, price: undefined }, { name: 'La Cueva Night Club', place_id: 'ChIJgdaDIk8yDogRKbZz_Ha_5ls', rating: 4.5, price: 2 } ]
//
// var obj = Object.assign({'name':}, )
// console.log(obj)


let id = [1,2,3]

let obj = [{name: "John"},{name: "Jane"},{name: "Doe",}]
let arr1 = ['bar', 'foo', 'foobar']

const result = obj.map((e,i) => ({ id: id[i],name: e.name, arr1: arr1[i]}))
//
// let desiredOutcome = [
// 	{
// 		name: "John",
// 		number: 1
// 	},
// 	{
// 		name: "Jane",
// 		number: 2
// 	},
// 	{
//         name: "Doe",
// 		number: 3
// 	}]




console.log(result)
console.log()

// console.log("Desired output:")
// console.log(desiredOutcome)

