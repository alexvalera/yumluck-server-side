'use strict';
const yelp = require('yelp-fusion');
module.exports =  {
  search: function (req,res) {
    let termObj = {location: req.query.location}; 
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    console.log('searchYelp recieved: ', req.query.location); 
    //let termObj = {location: userLocation}; 
    const clientId = 'GDFLOUNmxupxL4ttaCeRLg'; 
    const clientSecret = 'AcHeL2steG1kB8jmaRDYWhfwn3iPzsaHNuNGKOipiMwsvDwSzGDrNbUUg3DQOj59';
    let client = {}; 
    return yelp.accessToken(clientId, clientSecret).then(response => {
      client = yelp.client(response.jsonBody.access_token); 
      client.search({
        location: termObj.location,
        limit: 10
      }).then(response => {
        console.log(response.jsonBody.businesses[0].name);
        res.send(JSON.stringify({businesses: response.jsonBody.businesses}));
        }).catch(e => {
          console.log(e);
        });
      }).catch(e => {
        console.log(e);
    });
  }
};