
const auth_link = "https://www.strava.com/oauth/token"

function getActivites(res){

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => console.log(res.json()))
}

function reAuthorize(){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({
            // token_type: 'bearer',
            client_id: '44242',
            client_secret: '469a81b5bfb679b8576db8607d2054d3c3b698eb',
            refresh_token: '5ac5800179163d8735503431c9139ff962fa08f7',
            grant_type: 'refresh_token'
        })
    })
    .then(res => getActivites(res))
      
}

reAuthorize()