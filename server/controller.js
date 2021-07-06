const { response } = require('express')
const places = require('./db.json')
let placeId = 4


module.exports = {
    getPlaces: function(req, res){
        res.status(200).send(places)
    },
    deletePlace: function(req, res){
        const tgtId = places.findIndex(function(placeObj){
            return placeObj.id === +req.params.placeId;
        })
        places.splice(tgtId, 1);
        res.status(200).send(places);
    },
    createPlace: function(req, res){
        let{address, imageURL} = req.body;
        const newPlace = {placeId, address, imageURL}
        places.push(newPlace)
        placeId++
        res.status(200).send(places)
    },
    updatePlace: function(req, res){
        
        let {type} = req.body
        const tgtIndex = places.findIndex(function(placeObj) {
            return placeObj.id === +req.params.placeId;
        })
        if (places[tgtIndex].rating = 5 && type === 'plus'){
        res.status(400)
        }
        else if(places[tgtIndex].rating === 0 && type === 'minus'){
        res.status(400)
        }
        else if (type === 'plus'){
            places[tgtIndex].rating++  
            res.sendStatus(200).send(places)
        }
        else if(type === 'minus'){
            places[tgtIndex].rating--
            res.sendStatus(200).send(places)
        } else{
            res.sendStatus(400)
        }
        }
}
