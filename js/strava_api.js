//setup environmental variable taken from https://www.youtube.com/watch?v=17UVejOw3zA
require('dotenv').config();
//this code was taken from Github Repository: https://github.com/fpolig01/Code_From_Tutorials/tree/master/Strava_Api
const auth_link = "https://www.strava.com/oauth/token";

function getActivites(res) {

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`;
    fetch(activities_link)
        .then((res) => console.log(res.json()));
}

function reAuthorize() {
    fetch(auth_link, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({

            client_id: process.env.client_id,
            client_secret: process.env.client_secret,
            refresh_token: process.env.access_token,
            grant_type: 'refresh_token'
        })
    })
        .then(res => getActivites(res));

}

reAuthorize();