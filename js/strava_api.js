//tried to make variables hiddent in an environmental variable but was unsuccessful
//setup environmental variable taken from https://www.youtube.com/watch?v=17UVejOw3zA
// require('dotenv').config();
//this code was taken from Github Repository: https://github.com/fpolig01/Code_From_Tutorials/tree/master/Strava_Api

(function() {
    const auth_link = "https://www.strava.com/api/v3/oauth/token";

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
    
                client_id:44242,
                client_secret: '469a81b5bfb679b8576db8607d2054d3c3b698eb' ,
                refresh_token: '8a612e963a3d7f868e120896725624b34f20e7b5',
                grant_type: 'refresh_token'
            })
        })
            .then(res => res.json())
            .then(res => getActivites(res));
    }
    
    reAuthorize();

})();

