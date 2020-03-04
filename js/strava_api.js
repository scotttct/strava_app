//this code was taken from Github Repository: https://github.com/fpolig01/Code_From_Tutorials/tree/master/Strava_Api
const auth_link = "https://www.strava.com/oauth/token";
require('dotenv').config();//setup environmental variable taken from https://www.youtube.com/watch?v=17UVejOw3zA

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

            client_id: 'STRAVA_USER',
            client_secret: 'STRAVA_API_SECRET',
            refresh_token: 'STRAVA_API_REFRESH_TOKEN',
            grant_type: 'refresh_token'
        })
    })
        .then(res => getActivites(res));

}

reAuthorize();