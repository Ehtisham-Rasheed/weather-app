const request = require("request");

const geocode = (address, callback) => 
{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiZWh0aXNoYW0tcmFzaGVlZCIsImEiOiJjbDN4ODlhamIwNjV5M2RqanlpaXMyamY1In0.2cw9VOQpH_gedJ0qnEXKJw&limit=1";

    request({url, json: true}, (error, {body}) => {
         if(error)
         {
              callback("Unable to connect to location services!", undefined);
         }
         else if(body.features.length === 0)
         {
              callback("Unable to find location. Try another search", undefined);
         }
         else
         {
             callback(undefined, {
                  latitude: body.features[0].center[1],
                  longitutde: body.features[0].center[0],
                  location: body.features[0].place_name,
             })
         }
    })
}

module.exports = geocode;