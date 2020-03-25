// var StravaApiV3 = require('strava_api_v3');
// var defaultClient = StravaApiV3.ApiClient.instance;

// // Configure OAuth2 access token for authorization: strava_oauth
// var strava_oauth = defaultClient.authentications['strava_oauth'];
// strava_oauth.accessToken = "20369294ed39ce99335d8ce5cbf492a3546ee2ac "

// var api = new StravaApiV3.AthletesApi()

// var callback = function(error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully. Returned data: ' + data);
//   }
// };
// api.getLoggedInAthleteZones(callback);
//Javascript File for Strava


// const auth_link = "https://www.strava.com/oauth/token"

// function getActivites(res){

//     const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
//     fetch(activities_link)
//         .then((res) => console.log(res.json()))
// }

// function reAuthorize(){
//     fetch(auth_link,{
//         method: 'post',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'

//         },

//         body: JSON.stringify({

//             client_id: '44242',
//             client_secret: '469a81b5bfb679b8576db8607d2054d3c3b698eb',
//             refresh_token: '5ac5800179163d8735503431c9139ff962fa08f7',
//             grant_type: 'refresh_token'
//         })
//     })
//     .then(res => getActivites(res))
      
// }

// reAuthorize();

//***************************************************************************************** */

//using Strava Node to retrieve data found on: https://github.com/mcfitz2/node-strava

var strava = new require("./strava")({
    client_id: "<44242>",	
    client_secret: "<469a81b5bfb679b8576db8607d2054d3c3b698eb>",
    redirect_uri: "<localhost>",
    access_token: "<Access 97e9b0a15c95c6edbb4ce5fb9b3171636f71b7de>"
});

strava.athlete.get(function(err, res) {
    console.log(res);
});