const express = require('express');
const cors = require('cors');
const app = express()
const ctrl = require('./controller');
const { getPlaces, deletePlace, createPlace, updatePlace} = ctrl;
const dataBase = require('./db.json')
const path = require('path')

app.use(express.json());
app.use(cors());

app.get('/api/locations', getPlaces)
app.delete('/api/locations/:placeId', deletePlace)
app.post('/api/locations', createPlace)
app.put('/api/locations/:placeId', updatePlace)


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../index.html'))
   
})

const port = process.env.PORT || 5050

app.listen(port, function(){ console.log(`Server running on ${port}`)})